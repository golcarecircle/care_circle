// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getAllUser } from './controllers/user.controller'
import connectDB from './db';
export type IUser = {
    _id?: string;
    name: string;
    userType: string;
    sex: string;
    age: number;
    email: string;
    password: string;
    phone: string;
    location: string;
    dob: Date;
    image: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export type UserX = Omit<IUser,  | 'createdAt' | 'updatedAt' >;
export default async function handler(req: NextApiRequest, res: NextApiResponse<IUser[]>){
  await connectDB();
  const users: IUser[] = await getAllUser();
  return res.status(200).json(users);
}
