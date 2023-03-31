import UserModel from "./user.model";
import mongoose from "mongoose";
export interface IAdmin extends mongoose.Document {
    role: string;
    appointments: mongoose.Types.ObjectId[];
}

const AdminSchema = new mongoose.Schema<IAdmin>({
    role: {
        type: String,
        default: 'admin'
    },
    appointments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Appointment'
    }]

},{minimize: false})
// .omit(['password','sex','age','location','dob','medicalRecords'])
AdminSchema.set('toJSON', {
    transform: (doc, ret, options) => {
      delete ret.password;
      delete ret.sex;
      delete ret.age;
      delete ret.location;
      delete ret.dob;
      delete ret.medicalRecords;
      return ret;
    }
});
const AdminModel = UserModel.discriminator('Admin', AdminSchema)
export default AdminModel;