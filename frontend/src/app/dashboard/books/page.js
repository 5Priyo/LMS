'use client';
import React, { useState } from 'react';
import { BookOpen, Plus, Search } from 'lucide-react';

const initialBooks = [
  {
    id: 1,
    title: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford',
    status: 'Available',
    image: 'https://covers.openlibrary.org/b/id/8231991-L.jpg',
    active: true,
    isbn: '9780596517748',
    availableCount: 5,
    description: 'A deep dive into the good parts of JavaScript.',
  },
  {
    id: 2,
    title: 'Clean Code',
    author: 'Robert C. Martin',
    status: 'Issued',
    image: 'https://covers.openlibrary.org/b/id/7222246-L.jpg',
    active: true,
    isbn: '9780132350884',
    availableCount: 2,
    description: 'Guide to writing cleaner, maintainable code.',
  },
  {
    id: 3,
    title: 'Data Structures in C',
    author: 'Seymour Lipschutz',
    status: 'Available',
    image: 'https://covers.openlibrary.org/b/id/7772062-L.jpg',
    active: false,
    isbn: '9780070396576',
    availableCount: 0,
    description: 'Comprehensive coverage of data structures in C.',
  },
  {
    id: 4,
    title: 'You Don’t Know JS',
    author: 'Kyle Simpson',
    status: 'Requested',
    image: 'https://covers.openlibrary.org/b/id/8101342-L.jpg',
    active: true,
    isbn: '9781491904244',
    availableCount: 1,
    description: 'In-depth series about JavaScript mechanics.',
  },
  {
    id: 5,
    title: 'Introduction to Algorithms',
    author: 'CLRS',
    status: 'Available',
    image: 'https://covers.openlibrary.org/b/id/7984916-L.jpg',
    active: true,
    isbn: '9780262033848',
    availableCount: 3,
    description: 'Classic textbook on algorithms.',
  },
];

const Books = () => {
  const [books, setBooks] = useState(initialBooks);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    status: '',
    image: '',
    isbn: '',
    availableCount: '',
    description: '',
  });

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddBook = (e) => {
    e.preventDefault();
    const newId = books.length + 1;
    const bookToAdd = {
      id: newId,
      ...newBook,
      active: true,
      availableCount: Number(newBook.availableCount),
    };
    setBooks([...books, bookToAdd]);
    setNewBook({
      title: '',
      author: '',
      status: '',
      image: '',
      isbn: '',
      availableCount: '',
      description: '',
    });
    setShowAddModal(false);
  };

  const toggleBookActive = (id) => {
    setBooks(books.map(book =>
      book.id === id ? { ...book, active: !book.active } : book
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header */}
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-[#001248] flex items-center gap-2">
          <BookOpen className="w-8 h-8" /> Books
        </h1>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center bg-cyan-500 text-[#001248] px-4 py-2 rounded-lg hover:bg-[#001248] hover:text-white transition"
        >
          <Plus className="w-5 h-5 mr-2" /> Add Book
        </button>
      </header>

      {/* Search */}
      <div className="flex items-center mb-4">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-2.5 text-white w-5 h-5" />
          <input
            type="text"
            placeholder="Search books..."
            className="text-white w-full border bg-[#001248] border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-indigo-100">
        <table className="min-w-full text-sm">
          <thead className="bg-cyan-500 text-[#001248]">
            <tr>
              <th className="px-6 py-3 text-left font-semibold">Cover</th>
              <th className="px-6 py-3 text-left font-semibold">Title</th>
              <th className="px-6 py-3 text-left font-semibold">Author</th>
              <th className="px-6 py-3 text-left font-semibold">ISBN</th>
              <th className="px-6 py-3 text-left font-semibold">Status</th>
              <th className="px-6 py-3 text-left font-semibold">Available</th>
              <th className="px-6 py-3 text-left font-semibold">Active</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.map((book) => (
              <tr key={book.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-12 h-16 object-cover rounded shadow-sm"
                  />
                </td>
                <td className="px-6 py-4 font-medium text-gray-800">{book.title}</td>
                <td className="px-6 py-4 text-gray-700">{book.author}</td>
                <td className="px-6 py-4 text-gray-700">{book.isbn}</td>
                <td
                  className={`px-6 py-4 font-semibold ${
                    !book.active
                      ? 'text-gray-400 italic'
                      : book.status === 'Available'
                      ? 'text-green-600'
                      : book.status === 'Issued'
                      ? 'text-orange-600'
                      : 'text-blue-600'
                  }`}
                >
                  {book.active ? book.status : 'Unavailable'}
                </td>
                <td className="px-6 py-4 text-gray-700">{book.availableCount}</td>
                <td className="px-6 py-4">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={book.active}
                      onChange={() => toggleBookActive(book.id)}
                    />
                    <div className="w-10 h-5 bg-gray-300 rounded-full shadow-inner relative">
                      <div
                        className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-200 ease-in-out ${
                          book.active ? 'translate-x-5' : ''
                        }`}
                      ></div>
                    </div>
                  </label>
                </td>
              </tr>
            ))}
            {filteredBooks.length === 0 && (
              <tr>
                <td colSpan="7" className="px-6 py-6 text-center text-gray-500">
                  No books found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add Book Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-xl p-6 w-full max-w-lg shadow-lg overflow-auto max-h-[90vh]">
            <button
              onClick={() => setShowAddModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl font-bold focus:outline-none"
              aria-label="Close"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold mb-4 text-cyan-600">Add New Book</h2>
            <form onSubmit={handleAddBook} className="space-y-4">
              <input
                type="text"
                placeholder="Title"
                value={newBook.title}
                onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
              <input
                type="text"
                placeholder="Author"
                value={newBook.author}
                onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
              <input
                type="text"
                placeholder="ISBN"
                value={newBook.isbn}
                onChange={(e) => setNewBook({ ...newBook, isbn: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
              <select
                value={newBook.status}
                onChange={(e) => setNewBook({ ...newBook, status: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              >
                <option value="">Select Status</option>
                <option value="Available">Available</option>
                <option value="Issued">Issued</option>
                <option value="Requested">Requested</option>
              </select>
              <input
                type="number"
                placeholder="Available Book Count"
                min="0"
                value={newBook.availableCount}
                onChange={(e) => setNewBook({ ...newBook, availableCount: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
              <input
                type="url"
                placeholder="Cover Image URL"
                value={newBook.image}
                onChange={(e) => setNewBook({ ...newBook, image: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
              <textarea
                placeholder="Description"
                value={newBook.description}
                onChange={(e) => setNewBook({ ...newBook, description: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                rows={3}
                required
              />
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-cyan-500 text-white hover:bg-cyan-600"
                >
                  Add Book
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Books;
