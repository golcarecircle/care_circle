import UserModel from '../models/user.model';
import bcryptjs from 'bcryptjs';
import { UserX } from '../users';
import connectDB from '../db';
import AdminModel from '../models/doctor.model';
export const getAllUser = async () => {
  await connectDB();
  const users = await UserModel.find({});
  return users;
};
export const getUserById = async (id: string) => {
  
  const user: UserX | null = await UserModel.findById(id).populate('appointments','medicalRecords');
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
  const finduser = await UserModel.findOne({
    email: user.email,
  });
  if (finduser) throw new Error('User Found, Change Email');
  let userType = user.userType?? 'PATIENT';
  if(userType==='DOCTOR'){
    console.log('We are adding a doctor');
    let userAdded: UserX = {
      ...user,
      password: bcryptjs.hashSync(user.password, 10),
      hospital:'KENYATTA HOSPITAL',
      appointments:[],
    };
    const res = UserModel.create({...userAdded})
    return res;
  }else{
    let userAdded = {
      ...user,
      password: bcryptjs.hashSync(user.password, 10),
      medicalRecords:[],
      age:0,
      dob: new Date(),
      location:'',
      sex: '',
      appointments:[]
    };
    console.log('Request to add Patient: ', userAdded);
    const newUser = await UserModel.create(userAdded);
    return newUser;
  }
};
export const updateUser = async (id: string, user: UserX) => {
  const userUpdated = await UserModel.findByIdAndUpdate(id, user, {
    new: true,
  });
  return userUpdated;
};
