import { generateJwtToken } from "../middleware/jwt.js";
import {
	createUser,
	findUserById,
	findUserByEmail,
} from "../services/userService.js";

export const registerUserHandler = async (req, res) => {
	try {
		const email = req.body.email;
		const user = await findUserByEmail(email);

		if (user) {
			res.status(405).json({
				status: "404",
				message: "User already exists",
			});
		}

		const newUser = await createUser(req.body);
		let token = generateJwtToken(newUser._id);

		res.status(200).json({
			status: "200",
			message: "User created successfully",
			token: token,
		});
	} catch (error) {
		res.status(500).json({
			status: "500",
			message: "Server Error",
			error: error,
		});
	}
};

export const loginUserHandler = async (req, res) => {
	try {
		const email = req.body.email;
		const password = req.body.password;
		const user = await findUserByEmail(email);
		if (user) {
			if (user.password === password) {
				let token = generateJwtToken(user._id);
				res.status(200).json({
					status: "200",
					message: "User logged in successfully",
					token: token,
				});
			} else {
				res.status(401).json({
					status: "401",
					message: "Incorrect password",
				});
			}
		}
		res.status(404).json({
			status: "404",
			message: "Incorrect email",
		});
	} catch (err) {
		res.status(500).json({
			status: "500",
			message: "Server Error",
			error: error,
		});
	}
};

export const getSingleUserHandler = async (req, res) => {
	try {
		const userId = req.params.userId;
		const user = await findUserById(userId);
		if (!user) {
			res.status(404).json({ message: "User not found" });
		}

		res.status(200).json(user);
	} catch (error) {
		res.status(500).json({ error: error });
	}
};
// export const test = async (req, res) => {
// 	res.status(200).json({ message: "Test" });
// }
