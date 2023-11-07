import mongoose, { trusted } from "mongoose";

const postSchema = mongoose.Schema({
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true,
            default: 'Anonymous'
        },
        attachment: String,
        likeCount: {
            type: Number,
            default: 0
        },
    }, 
    //createdAt, updateAt
    { timestamps: true }
);

export const PostModel = mongoose.model('Post', postSchema);