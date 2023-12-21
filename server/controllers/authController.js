import bodyParser from "body-parser";
import { UserModel } from "../models/UserModels.js";
import { boolean } from "zod";

const secretKey = process.env.SECRET_KEY;

export const generateJwtTokenHandler = async (req, res) => {
	const issuer = SocialMe;
	const expiresDays = "10d";
	const payload = { userId };
	const token = jwt.sign(payload, secretKey, issuer, expiresDays);

	return token;
}

export const createUserHandler = async (req, res) => {
	try {
		const {email, password, username} = req.body; 

		const user = await UserModel.where({email: email}).findOne();
		console.log(user);
		if (user) {
			res.status(404).json({ 
				message: "User already exists",
				user 
			});
		}
		else {
			const hashedPassword = await bcrypt.hashSync(password, 10);

			await createUser({
				username,
				email,
				password: hashedPassword,
			});

			res.status(200).json({ 
				status: "success",
				message: "User created" });
		}
	}
	catch (error) {
		res.status(500).json({ error: error });
	}
};
// export const test = async (req, res) => {
// 	res.status(200).json({ message: "Test" });
// }
