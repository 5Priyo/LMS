'use client';
import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';

const initialBooks = [
  {
    id: 1,
    title: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford',
    status: 'Available',
    image: 'https://covers.openlibrary.org/b/id/8231991-L.jpg',
    active: true,
  },
  {
    id: 2,
    title: 'Clean Code',
    author: 'Robert C. Martin',
    status: 'Issued',
    image: 'https://covers.openlibrary.org/b/id/7222246-L.jpg',
    active: true,
  },
  {
    id: 3,
    title: 'Data Structures in C',
    author: 'Seymour Lipschutz',
    status: 'Available',
    image: 'https://covers.openlibrary.org/b/id/7772062-L.jpg',
    active: false,
  },
  {
    id: 4,
    title: 'You Don’t Know JS',
    author: 'Kyle Simpson',
    status: 'Requested',
    image: 'https://covers.openlibrary.org/b/id/8101342-L.jpg',
    active: true,
  },
  {
    id: 5,
    title: 'Introduction to Algorithms',
    author: 'CLRS',
    status: 'Issued',
    image: 'https://covers.openlibrary.org/b/id/7984916-L.jpg',
    active: true,
  },
];

const IssuedBooks = () => {
  const [books] = useState(initialBooks);

  const issuedBooks = books.filter(
    (book) => book.status === 'Issued' && book.active
  );

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header */}
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-orange-600 flex items-center gap-2">
          <BookOpen className="w-8 h-8" /> Issued Books
        </h1>
      </header>

      {/* Issued Books Table */}
      <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-orange-100">
        <table className="min-w-full text-sm">
          <thead className="bg-orange-500 text-white">
            <tr>
              <th className="px-6 py-3 text-left font-semibold">Cover</th>
              <th className="px-6 py-3 text-left font-semibold">Title</th>
              <th className="px-6 py-3 text-left font-semibold">Author</th>
              <th className="px-6 py-3 text-left font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {issuedBooks.map((book) => (
              <tr key={book.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-12 h-16 object-cover rounded shadow-sm"
                  />
                </td>
                <td className="px-6 py-4 font-medium text-gray-800">
                  {book.title}
                </td>
                <td className="px-6 py-4 text-gray-700">{book.author}</td>
                <td className="px-6 py-4 text-orange-600 font-semibold">
                  {book.status}
                </td>
              </tr>
            ))}
            {issuedBooks.length === 0 && (
              <tr>
                <td colSpan="4" className="px-6 py-6 text-center text-gray-500">
                  No issued books found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IssuedBooks;
