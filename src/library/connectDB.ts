// src/library/connectDB.ts
import mongoose from "mongoose";

const MONGODB_URI = "mongodb://localhost:27017/twitter-clone";

export async function connectDB() {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(MONGODB_URI, {
        dbName: "twitter-clone",
      });
      console.log("✅ Connected to MongoDB");
    }
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
  }
}