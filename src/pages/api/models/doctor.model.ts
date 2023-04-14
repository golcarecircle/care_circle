import mongoose from 'mongoose';
import UserModel from './user.model';
export interface IAdmin extends mongoose.Document {
  _id: string
  role: boolean;
  fullName: string;
  email: string;
  password: string;
  staffId: string;
  phone: string;
  image: string;
  hospital: string;
  appointments: mongoose.Types.ObjectId[];
}
const adminSchema = new mongoose.Schema<IAdmin>(
  {
    fullName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: Boolean,
    },
    staffId: {
      type: String,
      unique: true,
      required: false
    },
    hospital: {
      type: String,
      enum: ['KENYATTA HOSPITAL', 'NAIROBI HOSPITAL'],
    },
    appointments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Appointment',
      },
    ],
  },
  // { minimize: false },
);
let AdminModel: mongoose.Model<IAdmin>;
try {
  // Try to get the existing model from mongoose
  AdminModel = mongoose.model<IAdmin>('Users');
} catch {
  // If the model doesn't exist, define it
  AdminModel = UserModel.discriminator('Users', adminSchema);
}
export default AdminModel;
