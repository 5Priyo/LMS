'use client';

import React, { useState } from 'react';
import { PlusCircle, Edit, Trash2, X } from 'lucide-react';

const initialStudents = [
  { id: 1, name: 'John Doe', email: 'john@example.com', grade: 'Grade 10', joined: '2022-06-15' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', grade: 'Grade 11', joined: '2023-01-10' },
  { id: 3, name: 'Arjun R', email: 'arjun@example.com', grade: 'Grade 9', joined: '2021-09-12' },
];

const StudentsPage = () => {
  const [students, setStudents] = useState(initialStudents);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const [form, setForm] = useState({
    name: '',
    email: '',
    grade: '',
    joined: '',
  });

  const openAddModal = () => {
    setIsEditing(false);
    setForm({ name: '', email: '', grade: '', joined: '' });
    setShowModal(true);
  };

  const openEditModal = (student) => {
    setIsEditing(true);
    setCurrentId(student.id);
    setForm({ ...student });
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setStudents((prev) =>
        prev.map((s) => (s.id === currentId ? { ...s, ...form } : s))
      );
    } else {
      const newId = students.length > 0 ? students[students.length - 1].id + 1 : 1;
      setStudents([...students, { id: newId, ...form }]);
    }
    setShowModal(false);
    setForm({ name: '', email: '', grade: '', joined: '' });
    setCurrentId(null);
  };

  const handleDelete = (id) => {
    const confirm = window.confirm('Are you sure you want to delete this student?');
    if (confirm) {
      setStudents(students.filter((s) => s.id !== id));
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-cyan-500">Students</h1>
          <p className="text-gray-600">Manage student information and records</p>
        </div>
        <button
          onClick={openAddModal}
          className="bg-cyan-500 hover:bg-teal-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition"
        >
          <PlusCircle className="w-5 h-5" />
          <span>Add Student</span>
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-teal-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-teal-800 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-teal-800 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-teal-800 uppercase tracking-wider">Grade</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-teal-800 uppercase tracking-wider">Joined On</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-teal-800 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {students.map((student) => (
              <tr key={student.id}>
                <td className="px-6 py-4 text-sm text-gray-900">{student.name}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{student.email}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{student.grade}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{student.joined}</td>
                <td className="px-6 py-4 text-sm flex gap-3">
                  <button
                    onClick={() => openEditModal(student)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <Edit className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(student.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add/Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={() => setShowModal(false)}
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-2xl font-bold text-cyan-600 mb-4">
              {isEditing ? 'Edit Student' : 'Add New Student'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Grade (e.g., Grade 10)"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                value={form.grade}
                onChange={(e) => setForm({ ...form, grade: e.target.value })}
                required
              />
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                value={form.joined}
                onChange={(e) => setForm({ ...form, joined: e.target.value })}
                required
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-cyan-500 text-white hover:bg-cyan-600"
                >
                  {isEditing ? 'Update' : 'Add'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentsPage;
