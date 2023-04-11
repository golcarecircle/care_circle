import mongoose,{Types, Schema, Model} from "mongoose";
export interface IHospital extends mongoose.Document {
    _id: string;
    name: string;
    description: string;
    location: string;
    doctors: string[];
    createdAt: Date;
    updatedAt: Date;
}
const HospitalSchema = new Schema<IHospital>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    doctors: [{ type: Schema.Types.ObjectId, required: true,ref: "Users" }],
},{timestamps: true});
let HospitalModel : Model<IHospital>;
try{
    HospitalModel = mongoose.model<IHospital>('Hospitals');
}catch(err){
    HospitalModel = mongoose.model<IHospital>("Hospitals", HospitalSchema);
}
export default HospitalModel;