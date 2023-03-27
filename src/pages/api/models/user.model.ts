import mongoose from 'mongoose';
const Schema = mongoose.Schema;
console.log('process.env.MONGODB_URI', process.env.MONGODB_URI)
mongoose.connect(process.env.MONGODB_URI|| 'mongodb://localhost:27017/care_circle', {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
.catch(err => console.log('Could not connect to MongoDB', err));
export interface IUser{
    _id: string;
    name: string;
    userType: string;
    sex: string;
    age: number;
    email: string;
    password: string;
    phone: string;
    location: string;
    dob: Date;
    createdAt: Date;
    updatedAt: Date;

}
const userSchema = new Schema<IUser>({
    name:{
        type: String,
        required: true
    },
    userType:{
        type: String,
        enum: ['PATIENT', 'DOCTOR'],
        default: 'PATIENT'
    },
    sex:{
        type: String,
        required: true,
        enum: ['MALE','FEMALE'],
    },
    age:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    dob:{
        type: Date,
        required: true
    },
}, {timestamps: true});
export default mongoose.models.User || mongoose.model('User', userSchema);