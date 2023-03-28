import UserModel from "../models/user.model"
import bcryptjs from 'bcryptjs'
import { User } from "../users";
export const getAllUser =async () => {
    const users = await UserModel.find({})
    return users;
}
export const getUserById = async (email: string) => {
    const user: User | null = await UserModel.findOne({
        email
    });
    if(!user) throw new Error("No User Found");
    return user;
}
export const createUser = async (user: User) => {
    const userAdded:User = {
        ...user,
        password: bcryptjs.hashSync(user.password, 10),
        userType: 'PATIENT',
    }
    console.log('Request to add user: ', userAdded);
    const finduser = await UserModel.findOne({
        email: userAdded.email
    });
    if(finduser) throw new Error("No User Found");
    const newUser = await UserModel.create(userAdded);
    return newUser;
}