import mongoose from "mongoose";
import { UserModel } from "../models/UsersModels.js";
import { updatePost } from "./posts.js";

export const findUniqueUser = async (req, res)=> {
    try {
        const user = await mongoose.find({email: email, password: password});
        
        console.log('users',posts);
        res.status(200);
    } catch (err) {
        res.status(500).json({error: err });
    }
}
export const createUser = async (req, res) => {
    try {
        const NewUser = req.body;
        
        const user = new UserModel(NewUser);
        await user.save();
    } catch (err){
        res.status(500).json({error: err});
    }
};

export const updateUser = async (req, res) => {
    try{
        const UpdatePost = req.body;

        const user = await new UserModel.findOneAndUpdate({_email: updateUser._email}, updatePost,{new: true});

        res.status(200).json(post);
    } catch (err){
        res.status(500).json({error: err});
    }
}
