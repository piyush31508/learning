import React, { useState } from 'react';
import { Bell, BookOpen, Calendar, CheckCircle, DollarSign, FileText, User } from 'lucide-react';

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const notifications = [
    { id: 1, message: "New scholarship opportunity available", date: "2024-09-01" },
    { id: 2, message: "Upcoming deadline for fall applications", date: "2024-09-15" },
    { id: 3, message: "Your application status has been updated", date: "2024-09-10" },
  ];

  const scholarships = [
    { id: 1, name: "Merit Scholarship", amount: "$5,000", deadline: "2024-10-01" },
    { id: 2, name: "STEM Excellence Award", amount: "$7,500", deadline: "2024-10-15" },
    { id: 3, name: "Community Service Grant", amount: "$3,000", deadline: "2024-09-30" },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Quick Stats</h3>
              <p>GPA: 3.8</p>
              <p>Completed Applications: 3</p>
              <p>Scholarships Won: 1</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Upcoming Deadlines</h3>
              <ul>
                <li>Research Paper - Sep 20</li>
                <li>Scholarship Application - Oct 1</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Recent Activity</h3>
              <ul>
                <li>Submitted Math Project - Aug 28</li>
                <li>Attended Career Fair - Aug 25</li>
              </ul>
            </div>
          </div>
        );
      case 'scholarships':
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Available Scholarships</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 text-left">Name</th>
                    <th className="px-4 py-2 text-left">Amount</th>
                    <th className="px-4 py-2 text-left">Deadline</th>
                    <th className="px-4 py-2 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {scholarships.map((scholarship) => (
                    <tr key={scholarship.id} className="border-b">
                      <td className="px-4 py-2">{scholarship.name}</td>
                      <td className="px-4 py-2">{scholarship.amount}</td>
                      <td className="px-4 py-2">{scholarship.deadline}</td>
                      <td className="px-4 py-2">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-3 rounded">
                          Apply
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'applications':
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">My Applications</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-semibold">Merit Scholarship</h4>
                  <p className="text-sm text-gray-600">Submitted on: Aug 15, 2024</p>
                </div>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Under Review</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-semibold">STEM Excellence Award</h4>
                  <p className="text-sm text-gray-600">Submitted on: Aug 20, 2024</p>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Approved</span>
              </div>
            </div>
          </div>
        );
      case 'profile':
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Student Profile</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold">Name: John Doe</p>
                <p>Student ID: 12345678</p>
                <p>Email: john.doe@example.com</p>
              </div>
              <div>
                <p>Major: Computer Science</p>
                <p>Year: Junior</p>
                <p>GPA: 3.8</p>
              </div>
            </div>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Edit Profile
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Student Dashboard</h1>
          <div className="relative">
            <Bell className="cursor-pointer" />
            <span className="absolute top-0 right-0 -mt-1 -mr-1 px-2 py-1 text-xs bg-red-500 text-white rounded-full">
              {notifications.length}
            </span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto p-6">
        <div className="flex flex-wrap mb-6 -mx-3">
          {['overview', 'scholarships', 'applications', 'profile'].map((tab) => (
            <div key={tab} className="px-3 mb-3">
              <button
                className={`px-4 py-2 font-semibold rounded-lg ${
                  activeTab === tab
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-blue-500 hover:bg-blue-100'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            </div>
          ))}
        </div>

        {renderTabContent()}

        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Recent Notifications</h3>
          <ul className="space-y-4">
            {notifications.map((notification) => (
              <li key={notification.id} className="flex items-start">
                <Bell className="mr-3 flex-shrink-0 text-blue-500" />
                <div>
                  <p>{notification.message}</p>
                  <p className="text-sm text-gray-500">{notification.date}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;