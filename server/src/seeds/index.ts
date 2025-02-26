import mongoose from "mongoose";
import dotenv from "dotenv";
import { seedUsers, seedBooks } from "./userSeedData";
//import connectDB from "../config/connection";


dotenv.config(); // Load environment variables

const activeUser = process.env.ACTIVE_USER || "USER1";
const MONGO_URI = process.env[`MONGODB_URI_${activeUser.toUpperCase()}`] || "mongodb://127.0.0.1:27017/LibraryApp";

const seedDatabase = async () => {
  try {
    console.log("Connecting to database as ${activeUser}...");  
    await mongoose.connect(MONGO_URI);
    console.log("✅ Database connected!"); 

    // Run seed functions
    await seedUsers();
    console.log("✅ User data seeded!");

    await seedBooks();
    console.log("✅ Book data seeded!");

    console.log("🎉 All seed data inserted successfully!");
  } catch (error) {
    console.error("❌ Error seeding database:", error);
  } finally {
    await mongoose.disconnect();
    console.log("🔌 Database connection closed.");
    process.exit(0);
  }
};

seedDatabase();

