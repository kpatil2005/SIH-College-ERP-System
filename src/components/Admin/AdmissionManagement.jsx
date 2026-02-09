import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaGraduationCap,
  FaUser,
  FaEye,
  FaCheck,
  FaTimes,
  FaClock,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFileAlt,
  FaDownload,
  FaFilter,
  FaSearch
} from 'react-icons/fa';

const AdmissionManagement = () => {
  const [applications, setApplications] = useState([]);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Load applications from localStorage (submitted by students)
    const savedApplications = JSON.parse(localStorage.getItem('admissionApplications') || '[]');
    
    // Mock admission applications data (for demo purposes)
    const mockApplications = [
      {
        id: 'ADM123456',
        fullName: 'Rahul Sharma',
        email: 'rahul.sharma@email.com',
        phone: '+91 9876543210',
        dob: '2005-03-15',
        gender: 'male',
        category: 'general',
        address: '123 Main Street, Delhi, India',
        selectedCourse: 1,
        courseName: 'Computer Science Engineering',
        status: 'pending',
        submittedAt: '2024-01-15T10:30:00Z',
        documents: {
          photo: 'uploaded',
          aadhar: 'uploaded',
          class10: 'uploaded',
          class12: 'uploaded',
          transfer: 'not_uploaded',
          income: 'uploaded'
        },
        paymentStatus: 'completed',
        marks: {
          class10: 85,
          class12: 78
        }
      },
      {
        id: 'ADM123457',
        fullName: 'Priya Patel',
        email: 'priya.patel@email.com',
        phone: '+91 9876543211',
        dob: '2005-07-22',
        gender: 'female',
        category: 'obc',
        address: '456 Park Avenue, Mumbai, India',
        selectedCourse: 2,
        courseName: 'Electronics & Communication',
        status: 'approved',
        submittedAt: '2024-01-14T14:20:00Z',
        documents: {
          photo: 'uploaded',
          aadhar: 'uploaded',
          class10: 'uploaded',
          class12: 'uploaded',
          transfer: 'uploaded',
          income: 'uploaded'
        },
        paymentStatus: 'completed',
        marks: {
          class10: 92,
          class12: 88
        }
      },
      {
        id: 'ADM123458',
        fullName: 'Amit Kumar',
        email: 'amit.kumar@email.com',
        phone: '+91 9876543212',
        dob: '2005-11-08',
        gender: 'male',
        category: 'sc',
        address: '789 Garden Road, Bangalore, India',
        selectedCourse: 5,
        courseName: 'MBA',
        status: 'rejected',
        submittedAt: '2024-01-13T09:15:00Z',
        documents: {
          photo: 'uploaded',
          aadhar: 'uploaded',
          class10: 'uploaded',
          class12: 'not_uploaded',
          transfer: 'not_uploaded',
          income: 'uploaded'
        },
        paymentStatus: 'completed',
        marks: {
          class10: 65,
          class12: 58
        }
      }
    ];

    // Combine saved applications with mock data
    const allApplications = [...savedApplications, ...mockApplications];
    setApplications(allApplications);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'approved': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending': return <FaClock />;
      case 'approved': return <FaCheck />;
      case 'rejected': return <FaTimes />;
      default: return <FaClock />;
    }
  };

  const updateApplicationStatus = (applicationId, newStatus) => {
    setApplications(prev => 
      prev.map(app => {
        if (app.id === applicationId) {
          const updatedApp = { ...app, status: newStatus };
          
          // If approved, generate student credentials
          if (newStatus === 'approved') {
            const studentId = `STU${Date.now().toString().slice(-6)}`;
            const password = `pass${Math.random().toString(36).slice(-4)}`;
            
            updatedApp.studentId = studentId;
            updatedApp.password = password;
            
            // Save approved student to students database
            const existingStudents = JSON.parse(localStorage.getItem('approvedStudents') || '[]');
            const studentData = {
              ...updatedApp,
              username: studentId,
              password: password,
              role: 'student',
              enrollmentDate: new Date().toISOString()
            };
            existingStudents.push(studentData);
            localStorage.setItem('approvedStudents', JSON.stringify(existingStudents));
            
            // Simulate sending email
            alert(`Application approved! \n\nStudent Credentials:\nUsername: ${studentId}\nPassword: ${password}\n\n(Email sent to ${updatedApp.email})`);
          } else {
            alert(`Application ${newStatus} successfully!`);
          }
          
          return updatedApp;
        }
        return app;
      })
    );
    
    // Update localStorage
    const updatedApplications = applications.map(app => 
      app.id === applicationId ? { ...app, status: newStatus } : app
    );
    localStorage.setItem('admissionApplications', JSON.stringify(updatedApplications));
  };

  const filteredApplications = applications.filter(app => {
    const matchesStatus = filterStatus === 'all' || app.status === filterStatus;
    const matchesSearch = app.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.email.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="p-6">
      <div className="flex items-center gap-3 mb-8">
        <FaGraduationCap className="text-3xl text-blue-600" />
        <h1 className="text-2xl font-bold text-gray-800">Admission Management</h1>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <FaFilter className="text-gray-600" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Applications</option>
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <FaSearch className="text-gray-600" />
            <input
              type="text"
              placeholder="Search by name, ID, or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border rounded-lg px-3 py-2 w-64 focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Applications List */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Application ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Student Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Course</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Submitted</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredApplications.map((application) => (
                <tr key={application.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {application.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{application.fullName}</div>
                      <div className="text-sm text-gray-500">{application.email}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {application.courseName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(application.status)}`}>
                      {getStatusIcon(application.status)}
                      {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(application.submittedAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSelectedApplication(application)}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        <FaEye />
                      </button>
                      {application.status === 'pending' && (
                        <>
                          <button
                            onClick={() => updateApplicationStatus(application.id, 'approved')}
                            className="text-green-600 hover:text-green-900"
                          >
                            <FaCheck />
                          </button>
                          <button
                            onClick={() => updateApplicationStatus(application.id, 'rejected')}
                            className="text-red-600 hover:text-red-900"
                          >
                            <FaTimes />
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Application Details Modal */}
      {selectedApplication && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-800">Application Details</h2>
                <button
                  onClick={() => setSelectedApplication(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FaTimes size={20} />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">Personal Information</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <FaUser className="text-gray-600" />
                      <span className="font-medium">Name:</span>
                      <span>{selectedApplication.fullName}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaEnvelope className="text-gray-600" />
                      <span className="font-medium">Email:</span>
                      <span>{selectedApplication.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaPhone className="text-gray-600" />
                      <span className="font-medium">Phone:</span>
                      <span>{selectedApplication.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-gray-600" />
                      <span className="font-medium">Address:</span>
                      <span>{selectedApplication.address}</span>
                    </div>
                  </div>
                </div>

                {/* Academic Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">Academic Information</h3>
                  <div className="space-y-2">
                    <div>
                      <span className="font-medium">Course:</span>
                      <span className="ml-2">{selectedApplication.courseName}</span>
                    </div>
                    <div>
                      <span className="font-medium">Class 10 Marks:</span>
                      <span className="ml-2">{selectedApplication.marks.class10}%</span>
                    </div>
                    <div>
                      <span className="font-medium">Class 12 Marks:</span>
                      <span className="ml-2">{selectedApplication.marks.class12}%</span>
                    </div>
                    <div>
                      <span className="font-medium">Category:</span>
                      <span className="ml-2 uppercase">{selectedApplication.category}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Documents Status */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Documents Status</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {Object.entries(selectedApplication.documents).map(([docType, status]) => (
                    <div key={docType} className="flex items-center gap-2">
                      <FaFileAlt className="text-gray-600" />
                      <span className="capitalize">{docType.replace(/([A-Z])/g, ' $1')}</span>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        status === 'uploaded' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {status === 'uploaded' ? 'Uploaded' : 'Missing'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              {selectedApplication.status === 'pending' && (
                <div className="mt-6 flex gap-4">
                  <button
                    onClick={() => {
                      updateApplicationStatus(selectedApplication.id, 'approved');
                      setSelectedApplication(null);
                    }}
                    className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Approve Application
                  </button>
                  <button
                    onClick={() => {
                      updateApplicationStatus(selectedApplication.id, 'rejected');
                      setSelectedApplication(null);
                    }}
                    className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Reject Application
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default AdmissionManagement;