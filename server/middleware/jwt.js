import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const secretKey = process.env.SECRET_KEY;

export const generateJwtToken = (userId) => {
	const issuer = "tasKing";
	const expiresIn = "100d";
	const payload = { userId };
	const token = jwt.sign(payload, secretKey, {
		issuer,
		expiresIn,
	});

	return token;
};

export const  returnUserIdFromToken = (req) =>{
  try{
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, secretKey);
    const userId = decodedToken.userId;
    return userId;
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};
