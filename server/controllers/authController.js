import { 
	findUserById, 
	findUserByEmail,
	findAllUser 
} from "../services/userServices.js";

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

		const user = await findUserByEmail(email);
		console.log(user);

		if (user) {
			res.status(404).json({ 
				message: "User already exists",
				user 
			});
		}
		else {
			const hashedPassword = await bcrypt.hashSync(password, 12);

			await createUser({
				username,
				email,
				password: hashedPassword,
			});

			res.status(201).json({ message: "User created" });
		}
	}
	catch (error) {
		res.status(500).json({ error: error });
	}
}

// export const test = async (req, res) => {
// 	res.status(200).json({ message: "Test" });
// }
