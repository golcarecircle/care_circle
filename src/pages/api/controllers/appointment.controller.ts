import AppointmentModel, { Appointment } from "../models/appointment.model";
export const getAllAppointments =async (): Promise<Appointment[]> => {
    const appointments: Appointment[] = await AppointmentModel.find().populate('patient');
    return appointments;
}
export const getAppointmentById =async (id:string): Promise<Appointment> => {
    const appointment: Appointment| null = await AppointmentModel.findById(id).populate('patient');
    if (!appointment) {
        throw new Error('No appointment found')
    }
    return appointment;
}
export const createAppointment =async (appointment:Appointment):  Promise<Appointment> => {
    if (!appointment) {
        throw new Error('Enter appointment Data')
    }
    try {
        const newAppointment = await AppointmentModel.create({...appointment});
        return newAppointment;
    } catch (error) {
        console.log('Error', error);
        throw new Error('Error Eoncountered')
    }
}