import { generateJwtToken } from "../middleware/jwt.js";
import { userModel } from "../models/userModel.js";

export const registerUserHandler = async (req, res) => {
	try {
		const email = req.body.email;
		const username = req.body.username;
		const password = req.body.password;

		const user = await userModel.where({ email: email }).findOne();

		if (user) {
			res.status(405).json({
				status: "404",
				message: "User already exists",
			});
		} else {
			const newUser = userModel.create({
				email: email,
				username: username,
				password: password,
			});
			// await newUser.save();
			let token = generateJwtToken(newUser._id);
			res.status(201).json({
				status: "200",
				message: "User created successfully",
				// token: token,
			});
		}
	} catch (error) {
		res.status(500).json({
			status: "500",
			message: "Server Error",
			error: error,
		});
	}
};

export const loginUserHandler = async (req, res) => {
	const email = req.body.email;
	const password = req.body.password;
	const user = await userModel.where({ email: email })
		.findOne()
		.select("+password");
	if (!user) {
		res.status(404).json({ message: "User not found" });
	} else {
		const isMatch = await user.comparePassword(password);
		if (!isMatch) {
			res.status(401).json({ message: "Invalid password" });
		} else {
			let token = generateJwtToken(user._id);
			res.status(200).json({
				message: "User logged in successfully",
				token: token,
			});
		}
	}
};

export const getAllUserHandler = async (req, res) => {
	try {
		const users = await userModel.find();

		res.status(200).json(users);
	} catch (error) {
		res.status(500).json({ error: error });
	}
};

export const getSingleUserHandler = async (req, res) => {
	try {
		const userId = req.params.userId;
		const user = await userModel.findOne({ _id: userId });
		if (!user) {
			res.status(404).json({ message: "User not found" });
		} else {
			res.status(200).json(user);
		}
	} catch (error) {
		res.status(500).json({ error: error });
	}
};
// export const test = async (req, res) => {
// 	res.status(200).json({ message: "Test" });
// }
