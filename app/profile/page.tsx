import MainLayout from "@/components/MainLayout";

export default function ProfilePage() {
  return (
    <MainLayout>
      {/* Cover Banner */}
      <div className="bg-blue-500 h-40 w-full relative">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg"
          alt="Profile avatar"
          className="absolute bottom-[-32px] left-4 w-20 h-20 rounded-full border-4 border-white bg-white"
        />
      </div>

      {/* Profile Info */}
      <div className="pt-12 px-4 pb-4 border-b border-gray-200">
        <h2 className="text-xl font-bold">Twitter</h2>
        <p className="text-gray-500">@twitter</p>
        <p className="text-sm text-gray-600 mt-2">Joined February 2007</p>

        <div className="flex gap-4 mt-2 text-sm text-gray-600">
          <span><strong className="text-black">140</strong> Following</span>
          <span><strong className="text-black">56.4M</strong> Followers</span>
        </div>
      </div>

      {/* Tabs (Tweets, Media, Likes) */}
      <nav className="flex justify-around border-b border-gray-200 text-sm text-gray-500">
        <button className="py-3 font-semibold text-black border-b-2 border-blue-500">Tweets</button>
        <button className="py-3 hover:text-black">Replies</button>
        <button className="py-3 hover:text-black">Media</button>
        <button className="py-3 hover:text-black">Likes</button>
      </nav>

      {/* Dummy Tweet */}
      <div className="p-4">
        <p>This is what a tweet would look like here.</p>
      </div>
    </MainLayout>
  );
}
