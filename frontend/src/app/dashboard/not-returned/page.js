'use client';

import React from 'react';
import { formatDistanceToNow, parseISO } from 'date-fns';

const notReturnedBooks = [
  {
    id: 1,
    student: 'Kavitha M.',
    book: 'Clean Code',
    issueDate: '2025-05-15',
  },
  {
    id: 2,
    student: 'Suren A.',
    book: 'Atomic Habits',
    issueDate: '2025-05-10',
  },
];

const NotReturnedBooksPage = () => {
  // Removed ': string' here to fix syntax error
  const calculateOverdueDays = (issueDate) => {
    const issue = parseISO(issueDate);
    const now = new Date();
    const days = Math.floor((now.getTime() - issue.getTime()) / (1000 * 60 * 60 * 24));
    return days > 14 ? days - 14 : 0; // assuming 14-day borrowing period
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-red-600">Not Returned Books</h1>
        <p className="text-gray-600">These books are overdue and haven't been returned yet.</p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-red-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-red-800 uppercase">Student</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-red-800 uppercase">Book</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-red-800 uppercase">Issue Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-red-800 uppercase">Days Overdue</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {notReturnedBooks.map((entry) => {
              const overdueDays = calculateOverdueDays(entry.issueDate);
              return (
                <tr key={entry.id} className={overdueDays > 0 ? 'bg-red-100' : ''}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{entry.student}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{entry.book}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{entry.issueDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-red-700">
                    {overdueDays > 0 ? `${overdueDays} days` : 'Not overdue'}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NotReturnedBooksPage;
