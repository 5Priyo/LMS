import Navbar from '@/app/Navbar';
import Footer from '@/app/Footer';
import Link from 'next/link';
import {
  FaFilePdf,
  FaDownload,
  FaBookOpen,
  FaGraduationCap,
  FaTags,
  } from 'react-icons/fa';

export default async function BookDetail(context) {
  const { params } = context;
  const bookId = params.id;

  // Fetch current book
  const res = await fetch(`http://localhost:3000/api/books/${bookId}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    return (
      <div className="text-center mt-20 text-red-500">
        Book not found (Error {res.status})
      </div>
    );
  }

  const book = await res.json();

  // Fetch related books by category (excluding current one)
  const relatedRes = await fetch(
    `http://localhost:3000/api/books?category=${book.category}&excludeId=${book.id}`,
    { cache: 'no-store' }
  );
  const relatedBooks = relatedRes.ok ? await relatedRes.json() : [];

  return (
    <>
      <Navbar />
      <div
        className="p-10 min-h-screen text-white flex flex-col bg-cover bg-center"
        style={{ backgroundImage: "url('/bookbg.jpg')" }}
      >
        {/* Book Detail Card */}
        <div className="max-w-4xl mx-auto border border-teal-400 shadow-lg p-8 rounded bg-white flex flex-col md:flex-row gap-8">
          {/* Left: Image */}
          <div className="flex-shrink-0">
            <img
              src={book.imagePath || '/default-book.png'}
              alt={book.title}
              className="w-82 h-[400px] object-cover rounded"
            />
          </div>

          {/* Right: Book Details */}
          <div className="flex flex-col justify-center text-[black]">
            <h1 className="text-3xl font-bold mb-2 flex items-center gap-2 text-[#001248]">
            
              {book.title}
            </h1>
            <p className="italic text-lg mb-4 text-gray-800 flex items-center gap-2">
            
              by {book.author}
            </p>

            {book.description && (
              <p className="mb-3 text-[15px] leading-relaxed text-gray-900 flex items-start gap-2">
                <FaBookOpen className="mt-1 text-[#001248]" />
                {book.description}
              </p>
            )}

            {book.level && (
              <p className="mb-2 text-sm text-gray-800 flex items-center gap-2">
                <FaGraduationCap className="text-[#001248]" />
                <span className="font-semibold">Level:</span> {book.level}
              </p>
            )}

            {book.category && (
              <p className="mb-2 text-sm text-gray-800 flex items-center gap-2">
                <FaTags className="text-[#001248]" />
                <span className="font-semibold">Category:</span> {book.category}
              </p>
            )}

            {/* PDF Buttons */}
            {book.pdfPath && (
              <div className="mt-4 flex gap-4">
                <a
                  href={book.pdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white text-[#001248] px-4 py-2 rounded shadow hover:bg-gray-100 transition"
                >
                  <FaFilePdf className="text-red-600" />
                  Preview PDF
                </a>
                <a
                  href={book.pdfPath}
                  download
                  className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded shadow hover:bg-teal-700 transition"
                >
                  <FaDownload />
                  Download PDF
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Related Books */}
        {relatedBooks.length > 0 && (
          <div className="max-w-6xl mx-auto mt-12">
            <h2 className="text-2xl font-bold text-white mb-6">
               More in <span className="text-teal-300">{book.category}</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedBooks.map((related) => (
                <Link href={`/book/${related.id}`} key={related.id}>
                  <div className="bg-white text-black p-4 rounded shadow hover:shadow-md transition cursor-pointer">
                    <img
                      src={related.imagePath || '/default-book.png'}
                      alt={related.title}
                      className="w-full h-60 object-cover rounded mb-3"
                    />
                
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
