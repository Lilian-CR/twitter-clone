'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  const handleSkip = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      <h1 className="text-3xl font-bold mb-6">Welcome to Twitter Clone</h1>
      <p className="mb-4">Sign in to get started or skip for now</p>

      <button
        onClick={() => signIn('google')}
        className="mb-4 px-6 py-2 bg-[#598DCA] text-white rounded-full hover:bg-blue-600 transition"
      >
        Sign in with Google
      </button>

      <button
        onClick={handleSkip}
        className="text-sm text-gray-500 underline hover:text-gray-800"
      >
        Skip login
      </button>
    </div>
  );
}