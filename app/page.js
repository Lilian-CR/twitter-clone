'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [tweets, setTweets] = useState([]);
  const [newTweet, setNewTweet] = useState('');
  const [user, setUser] = useState('Anonymous');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status]);

  useEffect(() => {
    if (session?.user?.name) {
      setUser(session.user.name);
    }
  }, [session]);

  useEffect(() => {
    const fetchTweets = async () => {
      const res = await fetch('/api/tweets');
      const data = await res.json();
      setTweets(data.reverse());
    };
    fetchTweets();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newTweet.trim()) return;

    setLoading(true);
    const res = await fetch('/api/tweets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: newTweet, user }),
    });

    const created = await res.json();
    setTweets([created, ...tweets]);
    setNewTweet('');
    setLoading(false);
  };

  if (status === 'loading') {
    return <p className="p-6 text-gray-600">Loading...</p>;
  }

  return (
    <div className="flex min-h-screen bg-gray-100 text-sm text-gray-900">
      {/* Sidebar */}
      <aside className="w-1/5 p-6 border-r border-gray-300 bg-white min-h-screen">
        <img src="/favicon.png" alt="App logo" className="w-8 h-8 mb-6" />
        <nav className="space-y-4">
          <a href="#" className="font-medium text-black hover:text-[#598DCA]">Home</a>
          <a href="#" className="font-medium text-black hover:text-[#598DCA]">Explore</a>
          <a href="#" className="font-medium text-black hover:text-[#598DCA]">Settings</a>
        </nav>
      </aside>

      {/* Feed */}
      <main className="w-3/5 p-6">
        <h1 className="text-xl font-bold text-black mb-6">Explore</h1>

        <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6">
          <textarea
            rows="3"
            placeholder="What's happening?"
            value={newTweet}
            onChange={(e) => setNewTweet(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded resize-none focus:outline-none"
          />
          <input
            type="text"
            placeholder="Your name"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            className="mt-2 w-full p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            disabled={loading}
            className="mt-3 text-white px-4 py-2 rounded float-right"
            style={{ backgroundColor: '#598DCA' }}
          >
            {loading ? 'Tweeting...' : 'Tweet'}
          </button>
        </form>

        <ul className="space-y-4">
          {tweets.map((tweet) => (
            <li key={tweet._id} className="bg-white p-4 rounded shadow">
              <div className="flex items-start gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold uppercase text-white"
                  style={{ backgroundColor: '#598DCA' }}
                >
                  {tweet.user?.[0] || 'U'}
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{tweet.user}</p>
                  <p className="text-gray-700">{tweet.content}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </main>

      {/* Right Panel */}
      <aside className="w-1/5 p-6 hidden lg:block">
        <div className="bg-white p-4 rounded shadow mb-6">
          <h2 className="font-bold text-lg mb-2">Don’t miss what’s happening</h2>
          <p className="text-sm text-gray-600 mb-4">
            Log in with Google to post tweets!
          </p>
          <a href="/login">
            <button className="w-full bg-black text-white py-2 rounded mb-2">Sign Up</button>
          </a>
          <a href="/login">
            <button className="w-full border border-gray-400 py-2 rounded">Log In</button>
          </a>
        </div>
        <div className="text-xs text-gray-500 space-x-2">
          <span>Terms of Service</span>
          <span>Privacy</span>
        </div>
      </aside>
    </div>
  );
}
