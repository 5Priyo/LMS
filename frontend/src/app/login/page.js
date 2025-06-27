// app/login/page.js
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FiEye, FiEyeOff } from 'react-icons/fi'; // Eye icons

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300">
      <div className="flex w-[900px] shadow-lg rounded overflow-hidden">
        {/* Left side (image & LMS) */}
        <div className="w-1/2 bg-[#00c0c7] flex flex-col items-center justify-center p-8 text-white">
          <div className="text-4xl font-bold mb-2">LMS</div>
          <img src="/lms.png" alt="Library" className="w-[500px] h-[400px]" />
        </div>

        {/* Right side (Login form) */}
        <div className="w-1/2 bg-white p-10 flex flex-col justify-center relative">
          {/* Close button */}
          <button
            onClick={() => router.push('/home')}
            className="w-10 h-7 rounded bg-[#00c0c7] absolute top-4 right-4 text-2xl text-red hover:text-red-800"
          >
            ×
          </button>

          <h2 className="mt-[5px] text-3xl font-bold text-[#00c0c7] mb-6 text-center">Login</h2>

          {/* Username input */}
          <input
            type="text"
            placeholder="Enter Your User Name"
            className="mt-[15px] mb-4 px-4 py-3 rounded bg-gray-300 text-black placeholder-[#00c0c7] focus:ring-2 focus:ring-[#00c0c7] outline-none"
          />

          {/* Password input with show/hide */}
          <div className="relative mt-[15px] mb-4">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter Your Password"
              className="w-full px-4 py-3 rounded bg-gray-300 text-black placeholder-[#00c0c7] focus:ring-2 focus:ring-[#00c0c7] outline-none pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#00c0c7] text-xl"
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>

          {/* Forgot password link */}
          <a href="/forgotpw" className="mt-[10px] text-[#00c0c7] text-sm mb-6 hover:underline text-center">
            Forgot Password?
          </a>

          {/* Buttons */}
          <div className="flex flex-col items-center gap-4 mt-[5px]">
            <Link href="/home">
              <button className="px-6 py-2 rounded-full bg-[#00c0c7] text-white font-semibold">Login</button>
            </Link>

            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <Link href="/signup" className="text-[#00c0c7] font-semibold hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
