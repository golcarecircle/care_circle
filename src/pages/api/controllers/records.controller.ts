import RecordsModel from "../models/report.model";
import { IReport } from "../models/report.model";
export const getAllRecords =async () => {
    const getAllRecords = await RecordsModel.find();
    return getAllRecords;
}
export const getRecordById =async (userId: string): Promise<IReport> => {
    const record: IReport | null = await RecordsModel.findById(userId);
    if (!record) {
        throw new Error('No Record of this id');
    }
    return record;
}
export const createRecord =async (record:IReport): Promise<IReport> => {
    const newRecord = await RecordsModel.create({...record})
    return newRecord;
}