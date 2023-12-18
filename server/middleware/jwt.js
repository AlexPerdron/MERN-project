import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const secretKey = process.env.SECRET_KEY

export const generateJwtToken = (userId) => {
    const issuer = 'tasKing';
    const expiresIn = '100d';
    const payload = { userId };
    const token = jwt.sign(payload, secretKey, {
      issuer,
      expiresIn,
    });
  
    return token;
  };
  