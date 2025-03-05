import mongoose from "mongoose";
import dotenv from "dotenv";
import { seedUsers, seedBooks } from "./userSeedData.js";


dotenv.config(); // Load environment variables

const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/LibraryApp"; // Ensure you have this in `.env`
console.log(MONGO_URI);

const seedDatabase = async () => {
  try {
    console.log("Connecting to database...");
    await mongoose.connect(MONGO_URI);
    console.log("Database connected!");

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

