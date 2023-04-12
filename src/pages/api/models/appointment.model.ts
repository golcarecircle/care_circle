import { ObjectId } from 'mongodb';
import mongoose, { Model, Types } from 'mongoose';
const Schema = mongoose.Schema;
export interface Appointment extends mongoose.Document {
  patient: Types.ObjectId;
  date: Date;
  symptoms: string[];
  doctor: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}
const appointmentSchema = new Schema<Appointment>(
  {
    _id: {
      type: Types.ObjectId,
    },
    patient: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    date: {
      type: Date,
      required: true,
    },
    doctor: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    symptoms: [
      {
        type: String,
        required: true,
      },
    ],
  },
  { timestamps: true },
);
const AppointmentModel: Model<Appointment> = mongoose.model<Appointment>(
  'Appointments',
  appointmentSchema,
);
export default AppointmentModel;
