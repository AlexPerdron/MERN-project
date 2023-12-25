import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const secretKey = process.env.SECRET_KEY;

export const generateJwtToken = (userId) => {
	const issuer = "SocialMe";
	const expiresIn = "100d";
	const payload = { userId };
	const token = jwt.sign(payload, secretKey, {
		issuer,
		expiresIn,
	});

	return token;
};

export const returnUserIdFromToken = (req) => {
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

export const validateAndAuthorizeToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if(authHeader && authHeader.startsWith("Bearer ")){
    const token = authHeader.split(" ")[1];

    try{
      const decodedToken = jwt.verify(token, secretKey);
      console.log(decodedToken);
      if (decodedToken.issuer === "SocialMe"){
        next();
      } else {
        res.status(401).json({
          status: "Unauthorized",
        });
      }
    } catch (err) {
      res.status(401).json({
        status: "Unauthorized",
      });
    }
  } else {
    res.status(401).json({
      status: "Unauthorized",
    });
  }
};
