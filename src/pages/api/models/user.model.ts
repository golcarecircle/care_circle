import mongoose, { Document, get } from 'mongoose';
import { IReport } from './report.model';
interface IAdmin extends mongoose.Document {
  _id: string
  role: boolean;
  fullName: string;
  sex?: 'MALE'| 'FEMALE'
  age?: number
  userType: 'PATIENT' | 'DOCTOR'
  email: string;
  password: string;
  staffId?: string;
  phone?: string;
  image?: string;
  location?: string;
  dob?: Date
  appointments?: mongoose.Types.ObjectId[];
  medicalRecords?: string[]
}
const userSchema = new mongoose.Schema<IAdmin>(
  {
    fullName: {
      type: String,
      required: true,
    },
    userType: {
      type: String,
      enum: ['PATIENT', 'DOCTOR'],
      default: 'PATIENT',
      required: true,
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
    phone: {
      type: String,
      unique: true,
      required: false
    },
    image: {
      type: String,
      required: false
    },
  },
  { timestamps: true, strict: false },
);

userSchema.methods.addMedicalRecord = async function (
  medicalRecord: IReport,
): Promise<void> {
  this.medicalRecords.push(medicalRecord._id);
  await this.save();
};

export interface IUser extends Document {
  name: string;
  userType: string;
  sex: string;
  age?: number;
  email: string;
  password: string;
  phone: string;
  location?: string;
  dob: Date;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  medicalRecords: mongoose.Types.ObjectId[];
  addMedicalRecord(medicalRecord: IReport): Promise<void>;
}
let UserModel: mongoose.Model<IAdmin>;
try {
  // Try to get the existing model from mongoose
  UserModel = mongoose.model<IAdmin>('Users');
} catch {
  // If the model doesn't exist, define it
  UserModel = mongoose.model<IAdmin>('Users', userSchema);
}
export default UserModel;
