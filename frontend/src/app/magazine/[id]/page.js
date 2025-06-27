import Navbar from "@/app/Navbar";
import Footer from "@/app/Footer";
import Link from "next/link";

export default async function MagazineDetail({ params }) {
  const magId = params.id;

  const res = await fetch(`http://localhost:3000/api/magazines/${magId}`, {
    cache: "no-store", // SSR fresh data
  });

  if (!res.ok) {
    return (
      <div className="text-center mt-20 text-red-500">
        Magazine not found (Error {res.status})
      </div>
    );
  }

  const magazine = await res.json();

  return (
    <>
      <Navbar />
      <div className="p-10 bg-white min-h-screen text-white flex flex-col">
    
        <div className="max-w-4xl mx-auto border border-teal-400 shadow-lg p-8 rounded bg-[#001f4d] flex flex-col md:flex-row gap-8">
          {/* Left: Magazine Image */}
          <div className="flex-shrink-0">
            <img
              src={magazine.imagePath || "/default-magazine.png"}
              alt={magazine.title}
              className="w-72 h-[400px] object-cover rounded"
            />
          </div>

          {/* Right: Magazine Details */}
          <div className="flex flex-col justify-center text-white">
            <h1 className="text-3xl font-bold mb-2">{magazine.title}</h1>
            <p className="italic text-teal-300 mb-4">by {magazine.author}</p>
            {magazine.summary && (
              <p className="mb-2">📰 {magazine.summary}</p>
            )}
            {magazine.category && (
              <p className="mb-2">🏷️ Category: {magazine.category}</p>
            )}
            {magazine.publisher && (
              <p className="mb-2">🏢 Publisher: {magazine.publisher}</p>
            )}
            {magazine.issue && (
              <p className="mb-2">📅 Issue: {magazine.issue}</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
