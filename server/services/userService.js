import { userModel } from "../models/userModel.js";

export const createUser = async (user) => {
	const newUser = userModel.create({
		email: user.email,
		username: user.username,
		password: user.password,
	});
	return newUser;
};

export const findUserById = async(UserId) => {
  const users = await userModel.findOne({
    _id: UserId,
  });
  return users;
};

export const findUserByEmail = async(email) =>{
	const users = await userModel.findOne({
		email: email,
	});
	return users;
}