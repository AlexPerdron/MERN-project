import { 
	generateJwtToken, 
	//returnUserIdFromToken 
} from "../middleware/jwt.js";

export const loginUserHandler = async (req, res) => {
	try {
		// Get the user's email and password from request body.
		const { email, password } = req.body;
		const user = await findUserByEmail(email);
		if (!user || !(await comparePasswords(password, user.password))) {
			return res.status(401).json({ message: "Invalid email or password" });
		}
		const token = generateJwtToken(user.userId);
		return res.status(200).json({ token: token });
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};
