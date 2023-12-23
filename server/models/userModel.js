import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
		},
		email:{
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		post: {
			type: Array,
			default: [],
		},
		profilePicture: String,
		coverPicture: String,
		description:{
			type: String,
			max: 50,
			default:"",
		},
	},
	{ timestamps: true }
);

export const userModel = mongoose.model("User", userSchema);
