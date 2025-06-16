import connectDB from "../../../lib/db.js";
import { Tweet } from "../../../src/models/tweet.js";
import { NextResponse } from "next/server";

// GET /api/tweets - Return all tweets
export async function GET() {
  try {
    await connectDB();
    const tweets = await Tweet.find().sort({ createdAt: -1 });
    return NextResponse.json(tweets);
  } catch (error) {
    console.error("GET error:", error);
    return NextResponse.json({ error: "Failed to fetch tweets" }, { status: 500 });
  }
}

// POST /api/tweets - Create a new tweet
export async function POST(request) {
  try {
    await connectDB();
    const { user, content } = await request.json();

    const newTweet = await Tweet.create({ user, content });
    return NextResponse.json(newTweet, { status: 201 });
  } catch (error) {
    console.error("POST error:", error);
    return NextResponse.json({ error: "Failed to create tweet" }, { status: 500 });
  }
}