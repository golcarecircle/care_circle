import UserModel from "../models/user.model"
export const getAllUser =async () => {
    const users = await UserModel.find({})
    return users;
}
export const getUserById = async (id: string) => {
    const user = await UserModel.findById(id);
    return user;
}