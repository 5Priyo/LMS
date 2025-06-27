'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FiEye, FiEyeOff } from 'react-icons/fi';

export default function ForgotPasswordPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300">
      <div className="flex w-[900px] shadow-lg rounded overflow-hidden bg-white">
        
        {/* Left: Image + LMS */}
        <div className="w-1/2 bg-[#00c0c7] flex flex-col items-center justify-center p-8 text-white">
          <div className="text-4xl font-bold mb-2">LMS</div>
          <img src="/forgot.png" alt="Library" className="w-[500px] h-[400px]" />
        </div>

        {/* Right: Forgot Password Form */}
        <div className="w-1/2 p-10 flex flex-col justify-center relative">

                  {/* Close button */}
          <button
            onClick={() => router.push('/login')}
            className="w-10 h-7 rounded bg-[#00c0c7] absolute top-4 right-4 text-2xl text-red hover:text-red-800"
          >
            ×
          </button>
          <h2 className="text-3xl font-bold text-[#00c0c7] mb-6 text-center">Forgot Password</h2>

          {/* Email */}
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="mb-4 px-4 py-3 rounded bg-gray-200 text-black placeholder-[#00c0c7] focus:ring-2 focus:ring-[#00c0c7] outline-none"
          />

          {/* New Password */}
          <div className="relative mb-4">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter New Password"
              className="w-full px-4 py-3 rounded bg-gray-200 text-black placeholder-[#00c0c7] focus:ring-2 focus:ring-[#00c0c7] outline-none pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#00c0c7]"
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative mb-6">
            <input
              type={showConfirm ? 'text' : 'password'}
              placeholder="Confirm New Password"
              className="w-full px-4 py-3 rounded bg-gray-200 text-black placeholder-[#00c0c7] focus:ring-2 focus:ring-[#00c0c7] outline-none pr-10"
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#00c0c7]"
            >
              {showConfirm ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 justify-center">
            <button className="px-6 py-2 rounded-full bg-[#00c0c7] hover:bg-gray-300 text-white font-semibold hover:text-[#00c0c7] transition duration-300">
              Change Password
            </button>
            {/* <Link href="/login">
              <button className="px-6 py-2 rounded-full bg-[#00c0c7] hover:bg-gray-300 text-white font-semibold hover:text-[#00c0c7] transition duration-300">
                Login
              </button>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
