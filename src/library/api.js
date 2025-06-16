// src/library/api.ts
export async function getTweets() {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/tweets`, {
    next: { revalidate: 30 },
  });

  if (!res.ok) throw new Error("Failed to fetch tweets");

  return res.json();
}