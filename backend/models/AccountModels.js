import mongoose, { trusted } from "mongoose";

const accountSchema = mongoose.Schema({
        username: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        account_type: String,
        likeCount: {
            type: Number,
            default: 0
        },
    }, 
    //createdAt, updateAt
    { timestamps: true }
);

export const AccountModel = mongoose.model('Account', accountSchema);


