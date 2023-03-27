import mongoose,{Types, Schema} from "mongoose";
interface IReport extends mongoose.Document {
    _id: string;
    patientId: Types.ObjectId;
    name: string;
    description: string;
    startedDate: Date;
    currentCondition: string | null;
    createdAt: Date;
    updatedAt: Date;
    diagnosis: string;
    result: string[];
    dose: string;
}
const ReportSchema = new Schema<IReport>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    startedDate: { type: Date, required: true },
    currentCondition: { type: String, required: false },
    diagnosis: { type: String, required: false },
    result: [{ type: String, required: false }],
    dose: { type: String, required: true },
    patientId: { type: Schema.Types.ObjectId, required: true, ref: "User" },
},{timestamps: true});
export default mongoose.models.Report || mongoose.model<IReport>("Report", ReportSchema);