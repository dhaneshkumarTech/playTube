import mongoose,{Schema,model} from "mongoose";

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

userSchema.pre('save', function(next){
    if(){
        return next();
    }
    this.password = bcrypt
    
})

export const User = model("User", userSchema);