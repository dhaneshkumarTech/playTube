import mongoose,{Schema,model} from "mongoose";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const userSchema = Schema(
    {
        userName: {
            type: String,
            required: true, 
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        fullName: {
            type: String,
            required: true, 
            trim: true,
            index: true
        },
        email: {
            type: String,
            required: true, 
            unique: true,
            lowercase: true,
            trim: true
        },
        password: {
            type: String,
            required: [true,"Password is required"]
        },
        coverImage: {
            type: String
        },
        avatar: {
            type: String
        },
        refreshToken: {
            type: String,
            required: true, 
        },
        watchHistory: [
            {
            type: mongoose.Types.ObjectId,
            ref: "Video"
            }
        ]
    },
    {
        timestamps: true
    }
)

userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        return next();
    }
    this.password = bcrypt.hash(this.password, 8);
    next();
})

userSchema.methods.isPassowrdCorrect = async function(password){
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateAccessToken = async function(){
    return jwt.sign(
        {
            _id: this._id,
            userName: this.userName,
            email: this.email
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken = async function(){
    return jwt.sign(
        {
            _id: this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: REFRESH_TOKEN_EXPIRY
        }
    )
}


export const User = model("User", userSchema);