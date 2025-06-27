'use client';
import React from 'react';
import { 
  Users, 
  BookOpen, 
  FileText, 
  RotateCcw, 
  XCircle, 
  Download 
} from 'lucide-react';

const stats = [
  { title: 'Students', value: '250', icon: Users, color: 'text-cyan-600' },
  { title: 'Total Books', value: '1000', icon: BookOpen, color: 'text-cyan-600'  },
  { title: 'Requested', value: '08', icon: FileText, color: 'text-cyan-600' },
  { title: 'Returned Books', value: '08', icon: RotateCcw, color: 'text-cyan-600'  },
  { title: 'Not Returned Books', value: '12', icon: XCircle, color: 'text-cyan-600'  },
  { title: 'Issued Books', value: '15', icon: Download, color: 'text-cyan-600' }
];

const Dashboard = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 shadow-sm border-2 border-indigo-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-indigo-800 mb-2">
                    {stat.title}
                  </h3>
                  <p className="text-3xl font-bold text-indigo-900">
                    {stat.value}
                  </p>
                </div>
                <div className="bg-cyan-100 p-4 rounded-2xl">
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Additional Dashboard Features */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
              <span className="text-gray-700">New book request from Student #201</span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-gray-700">Book returned: "Data Structures"</span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span className="text-gray-700">Overdue reminder sent to 3 students</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            <button className="bg-teal-500 text-white px-4 py-3 rounded-lg hover:bg-teal-600 transition-colors">
              Add Book
            </button>
            <button className="bg-indigo-500 text-white px-4 py-3 rounded-lg hover:bg-indigo-600 transition-colors">
              New Student
            </button>
            <button className="bg-green-500 text-white px-4 py-3 rounded-lg hover:bg-green-600 transition-colors">
              Issue Book
            </button>
            <button className="bg-orange-500 text-white px-4 py-3 rounded-lg hover:bg-orange-600 transition-colors">
              Generate Report
            </button>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Dashboard;
