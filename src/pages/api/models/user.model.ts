import mongoose, { Document } from 'mongoose';
import { IReport } from './report.model';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    userType: {
      type: String,
      enum: ['PATIENT', 'DOCTOR'],
      default: 'PATIENT',
    },
    sex: {
      type: String,
      enum: ['MALE', 'FEMALE'],
    },
    age: {
      type: Number,
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
    },
    image: {
      type: String,
      required: true,
      unique: true
    },
    location: {
      type: String,
    },
    dob: {
      type: Date,
    },
    medicalRecords: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MedicalRecords',
        default: [],
      },
    ],
  },
  { timestamps: true }
);

userSchema.methods.addMedicalRecord = async function (medicalRecord: IReport): Promise<void> {
    this.medicalRecords.push(medicalRecord._id);
    await this.save();
};

export interface IUser extends Document {
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
    createdAt: Date;
    updatedAt: Date;
    medicalRecords: mongoose.Types.ObjectId[];
    addMedicalRecord(medicalRecord: IReport): Promise<void>;
}
let UserModel: mongoose.Model<IUser>;
try {
  // Try to get the existing model from mongoose
  UserModel = mongoose.model<IUser>('User');
} catch {
  // If the model doesn't exist, define it
  UserModel = mongoose.model<IUser>('User', userSchema);
}
export default UserModel;

// export const UserModel = mongoose.model<IUser>('User', userSchema);
