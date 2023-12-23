import { postModel } from "../models/postModel.js";

export const getPosts = async (req, res) => {
	try {
		const posts = await postModel.find();

		console.log("posts", posts);

		res.status(200).json(posts);
	} catch (err) {
		res.status(500).json({ error: err });
	}
};

export const createPosts = async (req, res) => {
	try {
		const NewPost = req.body;

		const post = new postModel(NewPost);
		await post.save();

		res.status(200).json(post);
	} catch (err) {
		res.status(500).json({ error: err });
	}
};

export const updatePosts = async (req, res) => {
	try {
		const UpdatePost = req.body;

		const post = await postModel.findOneAndUpdate(
			{ _id: UpdatePost._id },
			UpdatePost,
			{ new: true }
		);

		res.status(200).json(post);
	} catch (err) {
		res.status(500).json({ error: err });
	}
};
