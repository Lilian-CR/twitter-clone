import connectDB from "../../../lib/db.js"; // ✅ relative path
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    return NextResponse.json({ success: true, message: "Connected to MongoDB!" });
  } catch (error) {
    console.error("MongoDB connection error:", error);
    return NextResponse.json({ success: false, message: "Connection failed" }, { status: 500 });
  }
}