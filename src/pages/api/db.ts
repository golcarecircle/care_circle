import mongoose from "mongoose";
//connect to mongodb
const connectionUrl = "mongodb://localhost:27017/care_circle";
const connectDB = async () => {
    console.log('Environment URI is: ', process.env.MONGODB_URI);
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI||connectionUrl);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.error('Error Encountered: ',err);
        process.exit(1);
    }
};
export default connectDB;