import mongoose from "mongoose";

const TweetSchema = new mongoose.Schema({
  content: { type: String, required: true },
  user: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const Tweet = mongoose.models.Tweet || mongoose.model("Tweet", TweetSchema);