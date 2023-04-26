import AdminModel from "../models/doctor.model";
import { IAdmin } from "../models/doctor.model";
export const getAllDoctors = async () => {
  const doctors = await AdminModel.find();
  return doctors;
};
export const getADoctor = async (doctorId: string) => {
  const doctor = await AdminModel.findById(doctorId);
  return doctor;
};
export const getDoctorByStaffID = async (
  staffId: string
): Promise<IAdmin | null> => {
  const doctor = await AdminModel.find({
    staffId,
  });
  if (!doctor) {
    throw new Error("No Doctor found!!");
  }
  return doctor;
};
export const addADoctor = async (doctorDetails: IAdmin) => {
  const newDoctor = await AdminModel.create({ ...doctorDetails });
  return newDoctor;
};
