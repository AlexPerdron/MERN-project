import { PostModel } from "../models/PostsModels.js";

export const getPosts = async (req, res) => {
    try {
        const posts = await PostModel.find();

        console.log('posts', posts);

        res.status(200).json(posts);
    } catch(err) {
        res.status(500).json({error: err });
    }
};

export const createPost = async (req, res) => {
    try {
        const NewPost = req.body;

        const post = new PostModel(NewPost);
        await post.save();

        res.status(200).json(post);
    } catch (err) {
        res.status(500).json({error: err });
    }
}

export const updatePost = async (req, res) => {
    try {
        const UpdatePost = req.body;

        const post = await new PostModel.findOneAndUpdate({ _id: updatePost._id }, updatePost, {new: true});
    
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json({error: err });
    }
}