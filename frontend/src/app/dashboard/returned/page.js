'use client';

import React from 'react';

const returnedBooks = [
  {
    id: 1,
    student: 'John Doe',
    book: 'Deep Learning with Python',
    returnDate: '2025-05-28',
    condition: 'Good',
    fine: 0,
  },
  {
    id: 2,
    student: 'Jane Smith',
    book: 'You Don’t Know JS',
    returnDate: '2025-05-27',
    condition: 'Damaged',
    fine: 150,
  },
];

const ReturnedBooksPage = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-cyan-500">Returned Books</h1>
        <p className="text-gray-600">List of books returned by students</p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-teal-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-teal-800 uppercase tracking-wider">Student</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-teal-800 uppercase tracking-wider">Book</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-teal-800 uppercase tracking-wider">Return Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-teal-800 uppercase tracking-wider">Condition</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-teal-800 uppercase tracking-wider">Fine (Rs)</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {returnedBooks.map((entry) => (
              <tr key={entry.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{entry.student}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{entry.book}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{entry.returnDate}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${entry.condition === 'Good' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {entry.condition}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {entry.fine > 0 ? `Rs. ${entry.fine}` : 'None'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReturnedBooksPage;
