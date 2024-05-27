import mongoose, {Schema, model} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = Schema(
    {
        title:{
            type: String, 
            required: true
        },
        description: {
            type: String,
            required: true
        },
        owner:{
            type: mongoose.Types.ObjectId,
            ref: "User",
            required: true
        },
        videoFile: {
            type: String,
            required: true
        },
        thumbnail: {
            type: String,
            required: true
        },
        duration: {
            type: Number,
            required: true
        },
        views: {
            type: Number,
            required: true,
            default: 0
        },
        isPublihed: {
            type: Boolean,
            default: true
        },
    },
    {
        timestamps: true
    }
)

mongoose.plugin(mongooseAggregatePaginate)

export const Video = model("Video", videoSchema)