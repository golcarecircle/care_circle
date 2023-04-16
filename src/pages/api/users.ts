// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import {
  getAllUser,
  getUserById,
  updateUser,
  createUser
} from './controllers/user.controller';

import connectDB from './db';
import { Appointment, MedicalHistory } from '@/util/types';
export type IUser = {
  _id?: string;
  fullName: string;
  userType: string;
  sex?: string;
  age?: number;
  email: string;
  password: string;
  phone?: string;
  location?: string;
  dob?: Date;
  image: string;
  createdAt?: Date;
  updatedAt?: Date;
  appointments?: Appointment[]
  medicalRecords?: MedicalHistory[] 
  hospital?: string
};
export type UserX = Omit<IUser, 'createdAt' | 'updatedAt'>;
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IUser[] | IUser | {}>,
) {
  await connectDB();
  switch (req.method) {
    case 'GET':
      const { id } = req.query;
      if (id) {
        const user = await getUserById(id as string);
        res.status(200).json(user);
        break;
      }
      const users = await getAllUser();
      if (!users) {
        throw new Error('No user found')
      }
      res.status(200).json(users);
      break;
    case 'POST':
      const user: IUser = req.body;
      console.log(user);
      const updatedUpdatedUser = await createUser(user);
      console.log(updatedUpdatedUser);
      if (updatedUpdatedUser) {
        res.status(200).json(updatedUpdatedUser);
      } else {
        res.status(400).json({ message: 'Error updating user' });
      }
      break;
    case 'PUT':
      const { id: id2, ...user2 } = req.body;
      const updatedUser = await updateUser(id2 as string, user2 as IUser);
      if (updatedUser) {
        res.status(200).json(updatedUser);
      } else {
        res.status(400).json({ message: 'Error updating user' });
      }
      break;
    default:
      res.status(400).json({ message: 'Error updating user' });
      break;
  }
}
