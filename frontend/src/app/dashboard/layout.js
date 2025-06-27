'use client';
import React, { useState } from 'react';
import Image from 'next/image'; // Make sure this import is at the top

import {
  BookOpen,
  Users,
  FileText,
  RotateCcw,
  XCircle,
  Download,
  BarChart3,
  Bell,
  User,
  ChevronDown,
  Menu
} from 'lucide-react';
import Link from 'next/link';

const menuItems = [
  { name: 'Overview', icon: BarChart3, path: '/dashboard' },
  { name: 'Books', icon: BookOpen, path: '/dashboard/books' },
  { name: 'Students', icon: Users, path: '/dashboard/students' },
  { name: 'Requested', icon: FileText, path: '/dashboard/requested' },
  { name: 'Returned', icon: RotateCcw, path: '/dashboard/returned' },
  { name: 'Not Returned', icon: XCircle, path: '/dashboard/not-returned' },
  { name: 'Issued', icon: Download, path: '/dashboard/issued' }
];

const DashboardLayout = ({ children }) => {
  const [activeSection, setActiveSection] = useState('Overview');

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-80 bg-[#001248] text-white">
        {/* Logo Section */}
        <div className="p-6 border-b border-cyan-500">
          <div className="flex items-center space-x-3">



            <div className="flex items-center space-x-3">
              <Image src="/liblogo.png" alt="Logo" width={60} height={30} />
              <h1 className="text-2xl font-bold">Library</h1>
            </div>

          </div>
        </div>

        {/* Menu Items */}
        <nav className="mt-6">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.name === activeSection;
            return (

              <Link
                href={item.path}
                key={item.name}
                onClick={() => setActiveSection(item.name)}
                className={`ml-1  w-full flex items-center space-x-9 px-6 py-4 text-left transition-colors 
    ${isActive
                    ? 'bg-cyan-500 border-r-4 border-white'
                    : ' hover:text-cyan-500'
                  }`}
              >
                <Icon className="w-6 h-6" />
                <span className="text-lg">{item.name}</span>
              </Link>

            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-cyan-500 shadow-sm ">
          <div className="flex items-center justify-between px-8 py-4">
            <div className="flex items-center space-x-4">
              {/* <Menu className="w-6 h-6 text-gray-600" /> */}
              <h1 className="text-3xl font-bold text-[#001248]">LMS</h1>
            </div>

            <div className="flex items-center space-x-6">
              <h2 className="text-2xl font-semibold text-[#001248]">Welcome ! Admin</h2>
              <div className="relative">
                <Bell className="w-6 h-6 text-gray-600" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  5
                </span>
              </div>
              <button
                onClick={() => {
                  // Add logout logic here, e.g., clearing tokens, redirecting, etc.
                  console.log('Logging out...');
                }}
                className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white rounded-full px-4 py-2 transition-colors"
              >
                <User className="w-6 h-6" />
                <span className="text-sm font-medium">Logout</span>
              </button>

            </div>
          </div>
        </header>

        <main className="p-8">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
