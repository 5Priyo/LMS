'use client';

import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

const requestedBooks = [
  {
    id: 1,
    student: 'John Doe',
    book: 'Introduction to Algorithms',
    date: '2025-05-25',
    status: 'Pending',
  },
  {
    id: 2,
    student: 'Jane Smith',
    book: 'Clean Code',
    date: '2025-05-28',
    status: 'Pending',
  },
];

const RequestedBooksPage = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-cyan-500">Requested Books</h1>
        <p className="text-gray-600">Manage book requests from students</p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-teal-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-teal-800 uppercase tracking-wider">Student</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-teal-800 uppercase tracking-wider">Book</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-teal-800 uppercase tracking-wider">Requested On</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-teal-800 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-teal-800 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {requestedBooks.map((req) => (
              <tr key={req.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{req.student}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{req.book}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{req.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${req.status === 'Pending' ? 'bg-yellow-200 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
                    {req.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm flex gap-3">
                  <button className="text-green-600 hover:text-green-800" title="Approve">
                    <CheckCircle2 className="w-5 h-5" />
                  </button>
                  <button className="text-red-600 hover:text-red-800" title="Reject">
                    <XCircle className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestedBooksPage;
