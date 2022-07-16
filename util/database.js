import mongoose from 'mongoose';

const connectDB = async (MONGO_URI) => {
  await mongoose.connect(MONGO_URI)
}

export default connectDB;