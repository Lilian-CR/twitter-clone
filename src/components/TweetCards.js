export default function TweetCard({ tweet }) {
  return (
    <div className="w-full border border-gray-300 dark:border-gray-700 rounded-xl p-4 bg-white dark:bg-black shadow-sm hover:shadow-md transition">
      <h3 className="font-bold pb-2 text-black dark:text-white">{tweet.title}</h3>
      <p className="pb-3 text-gray-800 dark:text-gray-300">{tweet.body}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400 italic text-right">
        {tweet.tags.join(", ")}
      </p>
    </div>
  );
}