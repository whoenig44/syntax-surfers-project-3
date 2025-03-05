import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/LibraryApp";  

//testing my branch
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      // Optional: Suppress deprecation warnings (not always needed in newer versions)
      // useFindAndModify: false, Removed to prevent connection error
    } as mongoose.ConnectOptions);
    
    console.log(`📡 MongoDB Connected: ${mongoose.connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1); // Exit process with failure
  }
};



// Start the connection
export { connectDB };

export default mongoose.connection;