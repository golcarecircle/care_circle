// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getAllUser, getUserById, updateUser  } from './controllers/user.controller';

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
export default async function handler(req: NextApiRequest, res: NextApiResponse<IUser[] | IUser | {}>){
	await connectDB();
	switch (req.method) {
		case 'GET':
			const { id } = req.query;
			if (id) {
				const user: IUser = await getUserById(id as string);
				res.status(200).json(user);
				break;
			}
			const users: IUser[] = await getAllUser();
  			res.status(200).json(users);
			break;
		case 'POST':
			const user: IUser = req.body;
			console.log(user);
			const updatedUpdatedUser = await updateUser(user._id as string, user);
			if (updatedUpdatedUser) {
				res.status(200).json(updatedUpdatedUser);

			}else{
				res.status(400).json({message: 'Error updating user'});
			}
			break;
		default:
			break;
	}
  
}
