import UserModel from "./user.model";
import mongoose from "mongoose";
export interface IAdmin extends mongoose.Document {
    role: boolean;
    staffId: string;
    hospital: string;
    appointments: mongoose.Types.ObjectId[];
}
const AdminSchema = new mongoose.Schema<IAdmin>({
    role: {
        type: Boolean,
        required:true
    },
    staffId:{
        type: String,
        required: true,
        unique: true
    },
    hospital:{
        type: String,
        required: true,
        enum:['KENYATTA HOSPITAL','NAIROBI HOSPITAL']
    },
    appointments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Appointment'
    }]
},{minimize: false})
AdminSchema.set('toJSON', {
    transform: (doc, ret, options) => {
      delete ret.age;
      delete ret.location;
      delete ret.dob;
      delete ret.medicalRecords;
      return ret;
    }
});
const AdminModel = UserModel.discriminator('Admin', AdminSchema)
export default AdminModel;