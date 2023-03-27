// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getAllUser } from './controllers/user.controller'
type IUser = {
    _id: string;
    name: string;
    userType: string;
    sex: string;
    age: number;
    email: string;
    password: string;
    phone: string;
    location: string;
    dob: Date;
    createdAt: Date;
    updatedAt: Date;

}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IUser[]>
) {
  const users: IUser[] = await getAllUser();
  return res.status(200).json(users);
}
