"use client";
import { useState } from "react";

export default function PostArea() {
  const [content, setContent] = useState("");

  const handlePost = () => {
    console.log("New post:", content);
    setContent("");
  };

  return (
    <header className="flex flex-col border border-gray-300 dark:border-gray-600 p-4 bg-white dark:bg-black mb-4">
      <div className="flex items-start gap-4">
        <img
          src="/favicon.png"
          alt="App logo"
          className="w-6 h-6 rounded-full"
        />
        <textarea
          className="text-black dark:text-white bg-transparent w-full min-h-[40px] resize-none px-2 py-1 outline-none placeholder:text-gray-400"
          placeholder="Share your thoughts!"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <button
        onClick={handlePost}
        disabled={!content.trim()}
        className="px-4 py-2 mt-4 ml-auto font-semibold text-black bg-white hover:bg-gray-200 dark:text-black dark:bg-white transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Post
      </button>
    </header>
  );
}