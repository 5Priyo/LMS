"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Link from "next/link";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [magazines, setMagazines] = useState([]);
  const [magLoading, setMagLoading] = useState(true);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const res = await fetch("http://localhost:3000/api/books");
        if (!res.ok) throw new Error("Failed to fetch books");
        const data = await res.json();
        setBooks(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchBooks();
  }, []);

  useEffect(() => {
    async function fetchMagazines() {
      try {
        const res = await fetch("http://localhost:3000/api/magazines");
        if (!res.ok) throw new Error("Failed to fetch magazines");
        const data = await res.json();
        setMagazines(data);
      } catch (error) {
        console.error(error);
      } finally {
        setMagLoading(false);
      }
    }
    fetchMagazines();
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-[#001248] text-white min-h-screen">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-8">
          <div className="text-center md:text-left mb-8 md:mb-0 w-full md:w-1/2 md:ml-[350px]">
            <h1 className="text-4xl font-bold leading-tight">
              <span className="text-teal-400 mt-[400px]">Welcome to</span> Our Library
            </h1>
            <div className="mt-6 flex justify-center md:justify-start">
              <Link href="/book">
                <button className="bg-teal-400 text-[#001248] px-6 py-2 rounded-full text-lg hover:bg-teal-500 transition ml-[200px] mt-[50px]">
                  Explore
                </button>
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/home.png"
              alt="Library Illustration"
              className="w-[300px] sm:w-[400px] md:w-[900px] lg:w-[1050px]"
            />
          </div>
        </section>

        {/* Category Section */}
        <section className="bg-white text-[#001248] py-10 px-4 text-center mt-[140px]">
          <h2 className="text-2xl font-bold mb-10">“Greenfield Public Library”</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-15">
            <div className="flex flex-col w-full sm:w-1/2 px-4">
              <img src="/Ebooks.png" alt="EBooks" className="w-full max-w-md mx-auto" />
              <p className="mt-4 text-lg font-medium">EBooks</p>
            </div>
            <div className="flex flex-col w-full sm:w-1/2 px-4">
              <img src="/magazine.png" alt="Magazine" className="w-full max-w-md mx-auto" />
              <p className="mt-4 text-lg font-medium">Magazine</p>
            </div>
          </div>
        </section>

        {/* Book Section */}
        <section className="py-10 px-4">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            <span className="text-teal-400">Popular</span> Books
          </h2>
          {loading ? (
            <p className="text-center text-white">Loading books...</p>
          ) : books.length === 0 ? (
            <p className="text-center text-white">No books found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 py-6">
              {books.slice(0, 8).map((book) => (
                <Link href={`/book/${book.id}`} key={book.id}>
                  <div className="cursor-pointer border border-[teal] shadow-md p-6 flex flex-col items-center hover:shadow-lg transition">
                    <img
                      src={book.imagePath || "/default-book.png"}
                      alt={book.title}
                      className="w-60 h-80 object-cover mb-4"
                    />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* Magazine Section */}
        <section className="py-10 px-4 mt-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            <span className="text-teal-400">Popular</span> Magazines
          </h2>
          {magLoading ? (
            <p className="text-center text-white">Loading magazines...</p>
          ) : magazines.length === 0 ? (
            <p className="text-center text-white">No magazines found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 py-6">
              {magazines.slice(0, 4).map((mag) => (
                <Link href={`/magazine/${mag.id}`} key={mag.id}>
                  <div className="cursor-pointer border border-[teal] shadow-md p-6 flex flex-col items-center hover:shadow-lg transition">
                    <img
                      src={mag.imagePath || "/default-magazine.png"}
                      alt={mag.title}
                      className="w-60 h-80 object-cover mb-4"
                    />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </div>
      <Footer />
    </>
  );
}
