'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FiEye, FiEyeOff } from 'react-icons/fi';

export default function SignupPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async () => {
    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || 'Signup failed');
      } else {
        alert('Signup successful!');
        router.push('/login');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300">
      <div className="flex w-[900px] shadow-lg rounded overflow-hidden">
        {/* Left side */}
        <div className="w-1/2 bg-[#00c0c7] flex flex-col items-center justify-center p-8 text-white">
          <div className="text-4xl font-bold mb-2">LMS</div>
          <img src="/lms.png" alt="Library" className="w-[500px] h-[400px]" />
        </div>

        {/* Right side (form) */}
        <div className="w-1/2 bg-white p-10 flex flex-col justify-center relative">
          {/* Close Button */}
          <button
            onClick={() => router.push('/home')}
            className="w-10 h-7 rounded bg-[#00c0c7] absolute top-4 right-4 text-2xl text-red hover:text-red-800"
          >
            ×
          </button>

          <h2 className="mt-[5px] text-3xl font-bold text-[#00c0c7] mb-6 text-center">Sign Up</h2>

          {/* Error */}
          {error && <p className="text-red-600 mb-4">{error}</p>}

          {/* Email */}
          <input
            type="email"
            placeholder="Enter Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-[15px] mb-4 px-4 py-3 rounded bg-gray-300 text-black placeholder-[#00c0c7] focus:ring-2 focus:ring-[#00c0c7] outline-none"
          />

          {/* Username */}
          <input
            type="text"
            placeholder="Enter Your User Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mb-4 px-4 py-3 rounded bg-gray-300 text-black placeholder-[#00c0c7] focus:ring-2 focus:ring-[#00c0c7] outline-none"
          />

          {/* Password */}
          <div className="relative mb-4">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

          {/* Sign Up Button */}
          <div className="flex flex-col items-center gap-4 mt-[5px]">
            <button
              onClick={handleSignup}
              className="px-6 py-2 rounded-full bg-[#00c0c7] hover:bg-gray-300 text-white font-semibold hover:text-black transition duration-300"
            >
              Sign Up
            </button>

            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <a href="/login" className="text-[#00c0c7] font-semibold hover:underline">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
