import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connect Mongo ${conn.connection.host}`);
  } catch (error) {
    console.log("Connect Mongo Db", error.message);
    process.exit(1);
  }
};
