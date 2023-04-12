import mongoose from 'mongoose';
export interface IAdmin extends mongoose.Document {
  role: boolean;
  fullName: string;
  email: string;
  password: string;
  staffId: string;
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
    },
    hospital: {
      type: String,
      required: true,
      enum: ['KENYATTA HOSPITAL', 'NAIROBI HOSPITAL'],
    },
    appointments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Appointment',
      },
    ],
  },
  { minimize: false },
);
let AdminModel: mongoose.Model<IAdmin>;
try {
  // Try to get the existing model from mongoose
  AdminModel = mongoose.model<IAdmin>('Admins');
} catch {
  // If the model doesn't exist, define it
  AdminModel = mongoose.model<IAdmin>('Admins', adminSchema);
}
export default AdminModel;
