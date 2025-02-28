import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const activeUser = process.env.ACTIVE_USER || "USER1";

const MONGO_URI = process.env[`MONGODB_URI_${activeUser.toUpperCase()}`] || "mongodb://127.0.0.1:27017/LibraryApp"; 

if (!MONGO_URI) {
  console.error("❌ No MongoDB connection URI. Set MONGODB_URI environment variable.");
  process.exit(1); // Exit process with failure
}

const connectDB = async () => {
  try {
    console.log(`📡 Connecting to MongoDB at: ${MONGO_URI}`)
    await mongoose.connect(MONGO_URI);
    console.log(`✅ MongoDB Connected: ${mongoose.connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1); // Exit process with failure
  }
};      
 

// Start the connection

export default connectDB;