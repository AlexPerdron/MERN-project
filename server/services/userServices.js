import { User } from '../models/UserModels';


export const findUserByEmail = async (email) => {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  return user;
};

export const createUser = async (user) => {
  await prisma.user.create({
    data: {
      name: user.name,
      email: user.email,
      password: user.password,
      avatar: user.avatar,
      projectIds: [],
    },
  });
};

export const findAllUser = async () => {
  const users = await prisma.user.findMany();
  return users;
};

export const findUserById = async (id) => {
  const user = await prisma.user.findUnique({
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

// export const addProjectToUser = async (userId: string, inputProjectId: string) => {
//   const user = await prisma.user.findUnique({
//     where: {
//       userId: userId
//     },
//   });

//   if (user) {
//     user.projectId.push(inputProjectId);

//     await prisma.user.update({
//       where: {
//         userId: userId
//       },
//       data: {
//         projectId: user.projectId
//       },
//     });
//   }
//   console.log(user);
// }
