"use client";
import { X } from "lucide-react";
import { useState } from "react";

export default function Modal({ onClose }) {
  const [content, setContent] = useState("");

  const handlePost = () => {
    console.log("Posting tweet:", content);
    setContent("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-brightness-50">
      <div className="bg-black text-white rounded-xl p-6 w-full max-w-xl relative shadow-xl">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Header Content */}
        <header className="flex flex-col p-4 gap-4">
          <div className="flex items-start gap-4">
            <img
              src="/favicon.png"
              alt="App logo"
              className="w-6"
            />
            <textarea
              className="text-white bg-transparent w-full min-h-[56px] resize-none px-2 py-1 outline-none placeholder:text-gray-500"
              placeholder="What's happening?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>

          <button
            className="px-6 ml-auto mt-2 bg-white text-black font-semibold py-2 rounded-full hover:bg-gray-300 transition"
            onClick={handlePost}
            disabled={!content.trim()}
          >
            Post
          </button>
        </header>
      </div>
    </div>
  );
}