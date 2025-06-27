"use client";

//shadow-lg

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for menu
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu state

  const handleLogin = () => {
    setIsLoggedIn(true);
    setUsername("John Doe");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="w-full bg-[#001248] text-white font-bold p-3  relative">   
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex flex-col items-center gap-1">
          <Image src="/liblogo.png" alt="Logo" width={60} height={30} />
          <span className="text-white text-xl">Library</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-12 items-center text-xl">
          {["home", "about", "book", "contact"].map((route) => (
            <Link
              key={route}
              href={`/${route}`}
              className={`hover:text-cyan-300 ${
                pathname === `/${route}`
                  ? "text-cyan-300 border-b-2 border-cyan-300"
                  : ""
              }`}
            >
              {route.toUpperCase()}
            </Link>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Auth Buttons - Desktop */}
        <div className="hidden md:flex gap-4 items-center text-white">
          {!isLoggedIn ? (
            <>
              <Link href="/login">
                <button
                  onClick={handleLogin}
                  className="w-20 p-2 rounded bg-cyan-300 text-[#001248] hover:scale-90 transition-all duration-300 hover:bg-white hover:text-blue-600"
                >
                  Login
                </button>
              </Link>
              <Link href="/signup">
                <button className="w-20 p-2 rounded bg-cyan-300 text-[#001248] hover:scale-90 transition-all duration-300 hover:bg-white hover:text-blue-600">
                  Signup
                </button>
              </Link>
            </>
          ) : (
            <div className="flex items-center gap-4">
              <span className="text-lg">Welcome, {username}!</span>
              <button
                className="p-2 rounded hover:bg-red-600 transition"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-4 flex flex-col items-center bg-[#001248] py-4 rounded shadow-lg z-50">
          {["home", "about", "services", "contact"].map((route) => (
            <Link
              key={route}
              href={`/${route}`}
              className={`text-white hover:text-cyan-300 ${
                pathname === `/${route}`
                  ? "text-cyan-300 border-b-2 border-cyan-300"
                  : ""
              }`}
              onClick={() => setIsMenuOpen(false)} // Close on click
            >
              {route.toUpperCase()}
            </Link>
          ))}

          {/* Auth Buttons - Mobile */}
          {!isLoggedIn ? (
            <>
              <Link href="/login">
                <button
                  onClick={handleLogin}
                  className="w-32 p-2 rounded bg-cyan-300 text-[#001248] hover:bg-white hover:text-blue-600"
                >
                  Login
                </button>
              </Link>
              <Link href="/signup">
                <button className="w-32 p-2 rounded bg-cyan-300 text-[#001248] hover:bg-white hover:text-blue-600">
                  Signup
                </button>
              </Link>
            </>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <span>Welcome, {username}!</span>
              <button
                className="p-2 rounded bg-red-600 text-white"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
