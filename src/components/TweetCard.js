export default function TweetCard({ tweet }) {
  return (
    <div className="bg-white border border-gray-200 px-4 py-3 shadow-sm hover:bg-gray-50 transition">
      {/* User */}
      <div className="flex items-center gap-2 mb-2">
        <div className="w-10 h-10 bg-blue-100 flex items-center justify-center font-bold text-blue-600 text-sm">
          @{tweet.userId}
        </div>
        <span className="text-sm text-gray-500">· just now</span>
      </div>

      {/* Content */}
      <p className="text-gray-800 text-base leading-snug">{tweet.body}</p>

      {/* Tags */}
      {tweet.tags && tweet.tags.length > 0 && (
        <p className="text-sm text-blue-500 mt-2">
          {tweet.tags.map((tag) => `#${tag}`).join(" ")}
        </p>
      )}
    </div>
  );
}