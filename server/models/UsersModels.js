import mongoose, {trusted} from "mongoose";

const userSchema = mongoose.Schema({
        username: {
            type: String,
            required: true,
            unique: true,
            minlength: 3,
        },
        password: {
            type: String,
            required: true,
            minlength: 5,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            minlength: 5,
        },
        profilePicture: {
            type: String,
            default: "",
        },
        coverPicture: {
            type: String,
            default: "",
        },
        description: {
            type: String,
            max: 50,
            default:"",
        },
        postId: {
            type: Array,
            default: [],
        },
    },
    //createdAt, updatedAt
    {timestamps: true}
);

export const UserModels = mongoose.model('User', userSchema)
