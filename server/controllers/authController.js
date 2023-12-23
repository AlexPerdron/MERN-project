import {
	generateJwtToken,
} from "../middleware/jwt.js"
import { UserModel } from "../models/UserModels.js";

export const createUserHandler = async (req, res) => {
	try {
		const email = req.body.email;
		const username = req.body.username;
		const password = req.body.password;

		const user = await UserModel.where({email: email}).findOne();

		if (user) {
			res.status(404).json({ 
				message: "User already exists",
			});
		}
		else {
			const newUser = UserModel.create({
				email: email,
				username: username,
				password: password,
			});
			// await newUser.save();
			let token = generateJwtToken(newUser._id);
			res.status(201).json({ 
				message: "User created successfully",
				// token: token,
			});
		}
	}
	catch (error) {
		res.status(500).json({ 
			error: error });
	}
};
// export const test = async (req, res) => {
// 	res.status(200).json({ message: "Test" });
// }
