import UserModel from '../models/user.model';
import bcryptjs from 'bcryptjs';
import { UserX } from '../users';
import connectDB from '../db';
export const getAllUser = async () => {
  await connectDB();
  const users = await UserModel.find({});
  return users;
};
export const getUserById = async (id: string) => {
  const user: UserX | null = await UserModel.findById(id);
  if (!user) throw new Error('No User Found');
  return user;
};
export const getUserByEmail = async (email: string) => {
  const user: UserX | null = await UserModel.findOne({
    email,
  });
  if (!user) throw new Error('No User Found');
  return user;
};

export const createUser = async (user: UserX) => {
  console.log('Request to add user: ', user);
  console.log(await connectDB());
  const userAdded: UserX = {
    ...user,
    password: bcryptjs.hashSync(user.password, 10),
    userType: 'PATIENT',
  };
  console.log('Request to add user: ', userAdded);
  const finduser = await UserModel.findOne({
    email: userAdded.email,
  });
  if (finduser) throw new Error('User Found, Change Email');
  const newUser = await UserModel.create(userAdded);
  return newUser;
};
export const updateUser = async (id: string, user: UserX) => {
  const userUpdated = await UserModel.findByIdAndUpdate(id, user, {
    new: true,
  });
  return userUpdated;
};
