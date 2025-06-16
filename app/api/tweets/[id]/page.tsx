'use client';

import MainLayout from "../../../../components/MainLayout";
import Link from "next/link";
import TweetCard from "../../../../components/TweetCard";
import PostArea from "../../../../components/PostArea";

export default function TweetDetailPage() {
  const tweets = {
    posts: [
      { id: "1", content: "Sample tweet #1" },
      { id: "2", content: "Sample tweet #2" },
    ],
  };

  return (
    <MainLayout>
      {/* Blue header banner */}
      <div className="bg-blue-500 h-40 w-full relative">
        <img
          src="/favicon.png"
          alt="Twitter logo"
          className="absolute bottom-[-20px] left-4 w-14 h-14 rounded-full border-4 border-white bg-white"
        />
      </div>

      {/* Sticky header below the banner (optional) */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-10 px-4 py-2">
        <h1 className="text-xl font-bold">Home</h1>
      </header>

      <PostArea />

      <ul className="flex flex-col gap-6">
        {tweets.posts.map((tweet) => (
          <li key={tweet.id}>
            <Link href={`/tweet/${tweet.id}`}>
              <TweetCard tweet={tweet} />
            </Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  );
}