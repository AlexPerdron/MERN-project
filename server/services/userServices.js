import { UserModel } from "../models/UserModels.js";

export const findUserByEmail = async (email) => {
	const user = await UserModel.find({
		where: {
			email: email,
		},
	});
	return user;
};

export const createUser = async (user) => {
	await UserModel.create({
		data: {
			username: user.username,
			email: user.email,
			password: user.password,
			avatar: user.avatar,
			projectIds: [],
		},
	});
};

export const findAllUser = async () => {
	const users = await UserModel.findMany();
	return users;
};

export const findUserById = async (id) => {
	const user = await UserModel.findUnique({
		where: {
			userId: id,
		},
		select: {
			userId: true,
			name: true,
			email: true,
			avatar: true,
			projectIds: true,
		},
	});
	return user;
};
