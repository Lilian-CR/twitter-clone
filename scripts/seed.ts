import "dotenv/config";
import { makeSureDbIsReady } from "@/library/db";
import { Tweet } from "@/models/tweet";

async function seed() {
  await makeSureDbIsReady();
  await Tweet.deleteMany(); // Clear existing
  await Tweet.insertMany([
    {
      userId: 121,
      body: "This is a seeded tweet.",
      tags: ["nextjs", "mongodb"],
    },
    {
      userId: 91,
      body: "Another mock tweet from seed script",
      tags: ["seed", "mock", "data"],
    },
  ]);
  console.log("✅ Database seeded!");
}

seed();