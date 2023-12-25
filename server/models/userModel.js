import mongoose from "mongoose";
import validator  from "validator";

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
		},
		email:{
			type: String,
			unique: true,
			required: [true, "Please enter an email"],
			validate: [validator.isEmail, "Please enter a valid email"]
		},
		password: {
			type: String,
			required: [true, "Please enter a password"],
			minLength: [6, "Minimum password length is 8 characters"],
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
