import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaShieldAlt,
  FaGraduationCap,
  FaUser,
  FaUpload,
  FaCheck,
  FaClock,
  FaFileAlt,
  FaCamera,
  FaIdCard,
  FaCertificate,
  FaMoneyBillWave,
  FaCalendarAlt,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaEdit,
  FaEye,
  FaDownload,
  FaExternalLinkAlt,
  FaSync
} from 'react-icons/fa';

const OnlineAdmissionPortal = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [applicationData, setApplicationData] = useState({});
  const [uploadedDocs, setUploadedDocs] = useState({});
  const [digiLockerConnected, setDigiLockerConnected] = useState(false);
  const [digiLockerDocs, setDigiLockerDocs] = useState({});
  const [applicationStatus, setApplicationStatus] = useState('draft');
  const [courses, setCourses] = useState([]);
  const [applicationId, setApplicationId] = useState('');

  useEffect(() => {
    // Initialize courses
    setCourses([
      { id: 1, name: 'Computer Science Engineering', duration: '4 years', fees: '₹2,50,000', seats: 120 },
      { id: 2, name: 'Electronics & Communication', duration: '4 years', fees: '₹2,30,000', seats: 90 },
      { id: 3, name: 'Mechanical Engineering', duration: '4 years', fees: '₹2,20,000', seats: 100 },
      { id: 4, name: 'Civil Engineering', duration: '4 years', fees: '₹2,10,000', seats: 80 },
      { id: 5, name: 'MBA', duration: '2 years', fees: '₹3,50,000', seats: 60 },
      { id: 6, name: 'MCA', duration: '3 years', fees: '₹1,80,000', seats: 40 }
    ]);

    // Generate application ID
    setApplicationId('ADM' + Date.now().toString().slice(-6));
  }, []);

  const steps = [
    { id: 1, title: 'Personal Info', icon: <FaUser /> },
    { id: 2, title: 'Course Selection', icon: <FaGraduationCap /> },
    { id: 3, title: 'Documents', icon: <FaFileAlt /> },
    { id: 4, title: 'Payment', icon: <FaMoneyBillWave /> },
    { id: 5, title: 'Review', icon: <FaCheck /> }
  ];

  const requiredDocuments = [
    { id: 'photo', name: 'Passport Photo', icon: <FaCamera />, required: true, digiLocker: false },
    { id: 'aadhar', name: 'Aadhar Card', icon: <FaIdCard />, required: true, digiLocker: true },
    { id: 'class10', name: '10th Marksheet', icon: <FaCertificate />, required: true, digiLocker: true },
    { id: 'class12', name: '12th Marksheet', icon: <FaCertificate />, required: true, digiLocker: true },
    { id: 'transfer', name: 'Transfer Certificate', icon: <FaFileAlt />, required: false, digiLocker: false },
    { id: 'income', name: 'Income Certificate', icon: <FaFileAlt />, required: false, digiLocker: true }
  ];

  const handleInputChange = (field, value) => {
    setApplicationData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (docId, file) => {
    setUploadedDocs(prev => ({ ...prev, [docId]: file }));
  };

  const connectDigiLocker = () => {
    setTimeout(() => {
      setDigiLockerConnected(true);
      alert('Connected to DigiLocker successfully!');
    }, 1500);
  };

  const fetchFromDigiLocker = (docId) => {
    setTimeout(() => {
      setDigiLockerDocs(prev => ({ ...prev, [docId]: {
        verified: true,
        fetchedAt: new Date().toISOString(),
        verificationId: `DL${Date.now()}`
      }}));
      alert('Document fetched from DigiLocker successfully!');
    }, 1000);
  };

  const nextStep = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const submitApplication = () => {
    // Create application object
    const application = {
      id: applicationId,
      ...applicationData,
      courseName: courses.find(c => c.id === applicationData.selectedCourse)?.name || 'Not selected',
      status: 'pending',
      submittedAt: new Date().toISOString(),
      documents: uploadedDocs,
      digiLockerDocs: digiLockerDocs,
      paymentStatus: 'completed'
    };

    // Save to localStorage for admin to see
    const existingApplications = JSON.parse(localStorage.getItem('admissionApplications') || '[]');
    existingApplications.push(application);
    localStorage.setItem('admissionApplications', JSON.stringify(existingApplications));

    setApplicationStatus('submitted');
    alert('Application submitted successfully! You will receive confirmation via email.');
  };

  const renderPersonalInfo = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Personal Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          onChange={(e) => handleInputChange('fullName', e.target.value)}
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          onChange={(e) => handleInputChange('email', e.target.value)}
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          onChange={(e) => handleInputChange('phone', e.target.value)}
        />
        <input
          type="date"
          placeholder="Date of Birth"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          onChange={(e) => handleInputChange('dob', e.target.value)}
        />
        <select
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          onChange={(e) => handleInputChange('gender', e.target.value)}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <select
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          onChange={(e) => handleInputChange('category', e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="general">General</option>
          <option value="obc">OBC</option>
          <option value="sc">SC</option>
          <option value="st">ST</option>
        </select>
      </div>
      <textarea
        placeholder="Address"
        rows="3"
        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
        onChange={(e) => handleInputChange('address', e.target.value)}
      />
    </div>
  );

  const renderCourseSelection = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Select Course</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {courses.map((course) => (
          <div
            key={course.id}
            className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
              applicationData.selectedCourse === course.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-blue-300'
            }`}
            onClick={() => handleInputChange('selectedCourse', course.id)}
          >
            <h4 className="font-bold text-gray-800">{course.name}</h4>
            <p className="text-sm text-gray-600">Duration: {course.duration}</p>
            <p className="text-sm text-gray-600">Fees: {course.fees}</p>
            <p className="text-sm text-gray-600">Available Seats: {course.seats}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderDocuments = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Upload Documents</h3>
      
      {/* DigiLocker Connection */}
      <div className={`p-4 rounded-lg border-2 ${digiLockerConnected ? 'border-green-200 bg-green-50' : 'border-blue-200 bg-blue-50'}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${digiLockerConnected ? 'bg-green-600' : 'bg-blue-600'} text-white`}>
              <FaShieldAlt />
            </div>
            <div>
              <h4 className="font-medium text-gray-800">
                {digiLockerConnected ? 'DigiLocker Connected' : 'Connect DigiLocker'}
              </h4>
              <p className="text-sm text-gray-600">
                {digiLockerConnected ? 'Fetch verified documents instantly' : 'Connect to fetch government-verified documents'}
              </p>
            </div>
          </div>
          {!digiLockerConnected && (
            <button
              onClick={connectDigiLocker}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <FaExternalLinkAlt />
              Connect
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {requiredDocuments.map((doc) => (
          <div key={doc.id} className="border rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-blue-600">{doc.icon}</div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-800">{doc.name}</h4>
                <p className="text-sm text-gray-600">
                  {doc.required ? 'Required' : 'Optional'}
                  {doc.digiLocker && ' • Available in DigiLocker'}
                </p>
              </div>
            </div>
            
            {/* Document Status */}
            {(uploadedDocs[doc.id] || digiLockerDocs[doc.id]) && (
              <div className="mb-3 p-2 bg-green-50 rounded-lg">
                <div className="flex items-center gap-2 text-green-600">
                  <FaCheck />
                  <span className="text-sm font-medium">
                    {digiLockerDocs[doc.id] ? 'Fetched from DigiLocker' : 'Uploaded'}
                  </span>
                </div>
                {digiLockerDocs[doc.id] && (
                  <p className="text-xs text-gray-600 mt-1">
                    Verification ID: {digiLockerDocs[doc.id].verificationId}
                  </p>
                )}
              </div>
            )}
            
            {/* Upload Options */}
            <div className="space-y-2">
              {/* DigiLocker Option */}
              {doc.digiLocker && digiLockerConnected && !digiLockerDocs[doc.id] && (
                <button
                  onClick={() => fetchFromDigiLocker(doc.id)}
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                >
                  <FaShieldAlt />
                  Fetch from DigiLocker
                </button>
              )}
              
              {/* Manual Upload Option */}
              {!digiLockerDocs[doc.id] && (
                <div className="flex items-center gap-2">
                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => handleFileUpload(doc.id, e.target.files[0])}
                    className="hidden"
                    id={`file-${doc.id}`}
                  />
                  <label
                    htmlFor={`file-${doc.id}`}
                    className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors text-center"
                  >
                    <FaUpload className="inline mr-2" />
                    {uploadedDocs[doc.id] ? 'Change File' : 'Upload Manually'}
                  </label>
                  {uploadedDocs[doc.id] && (
                    <div className="text-green-600">
                      <FaCheck />
                    </div>
                  )}
                </div>
              )}
            </div>
            
            {uploadedDocs[doc.id] && !digiLockerDocs[doc.id] && (
              <p className="text-sm text-green-600 mt-2">
                {uploadedDocs[doc.id].name}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderPayment = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Application Fee Payment</h3>
      <div className="bg-blue-50 p-6 rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <span className="text-lg font-medium">Application Fee</span>
          <span className="text-2xl font-bold text-blue-600">₹1,500</span>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <input type="radio" name="payment" id="online" defaultChecked />
            <label htmlFor="online" className="font-medium">Online Payment</label>
          </div>
          <div className="flex items-center gap-3">
            <input type="radio" name="payment" id="offline" />
            <label htmlFor="offline" className="font-medium">Offline Payment (Bank Transfer)</label>
          </div>
        </div>
        <button className="w-full bg-green-600 text-white py-3 px-4 rounded-lg mt-6 hover:bg-green-700 transition-colors">
          <FaMoneyBillWave className="inline mr-2" />
          Pay Now
        </button>
      </div>
    </div>
  );

  const renderReview = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Review Application</h3>
      <div className="bg-gray-50 p-6 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <h4 className="font-medium text-gray-800">Application ID</h4>
            <p className="text-gray-600">{applicationId}</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-800">Full Name</h4>
            <p className="text-gray-600">{applicationData.fullName || 'Not provided'}</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-800">Email</h4>
            <p className="text-gray-600">{applicationData.email || 'Not provided'}</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-800">Phone</h4>
            <p className="text-gray-600">{applicationData.phone || 'Not provided'}</p>
          </div>
        </div>
        <div className="border-t pt-4">
          <h4 className="font-medium text-gray-800 mb-2">Selected Course</h4>
          <p className="text-gray-600">
            {courses.find(c => c.id === applicationData.selectedCourse)?.name || 'Not selected'}
          </p>
        </div>
        <div className="border-t pt-4 mt-4">
          <h4 className="font-medium text-gray-800 mb-2">Documents Status</h4>
          <div className="space-y-2">
            {/* DigiLocker Documents */}
            {Object.keys(digiLockerDocs).length > 0 && (
              <div>
                <p className="text-sm font-medium text-green-600 mb-1">DigiLocker Verified:</p>
                <div className="flex flex-wrap gap-2">
                  {Object.keys(digiLockerDocs).map(docId => (
                    <span key={docId} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                      <FaShieldAlt className="text-xs" />
                      {requiredDocuments.find(d => d.id === docId)?.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {/* Uploaded Documents */}
            {Object.keys(uploadedDocs).length > 0 && (
              <div>
                <p className="text-sm font-medium text-blue-600 mb-1">Manually Uploaded:</p>
                <div className="flex flex-wrap gap-2">
                  {Object.keys(uploadedDocs).map(docId => (
                    <span key={docId} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {requiredDocuments.find(d => d.id === docId)?.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaGraduationCap className="text-4xl text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-800">Online Admission Portal</h1>
          </div>
          <p className="text-gray-600">Apply for college admission from anywhere, anytime</p>
          {applicationId && (
            <p className="text-sm text-blue-600 mt-2">Application ID: {applicationId}</p>
          )}
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    currentStep >= step.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {step.icon}
                </div>
                <div className="ml-3 hidden md:block">
                  <p className={`text-sm font-medium ${
                    currentStep >= step.id ? 'text-blue-600' : 'text-gray-600'
                  }`}>
                    {step.title}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-1 mx-4 ${
                    currentStep > step.id ? 'bg-blue-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {currentStep === 1 && renderPersonalInfo()}
              {currentStep === 2 && renderCourseSelection()}
              {currentStep === 3 && renderDocuments()}
              {currentStep === 4 && renderPayment()}
              {currentStep === 5 && renderReview()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <button
            onClick={prevStep}
            disabled={currentStep === 1}
            className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          
          {currentStep < 5 ? (
            <button
              onClick={nextStep}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Next
            </button>
          ) : (
            <button
              onClick={submitApplication}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Submit Application
            </button>
          )}
        </div>

        {/* Status Indicator */}
        {applicationStatus === 'submitted' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6 text-center"
          >
            <FaCheck className="text-4xl text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-green-800 mb-2">Application Submitted!</h3>
            <p className="text-green-700">
              Your application has been submitted successfully. You will receive updates via email and SMS.
            </p>
            <div className="mt-4 flex justify-center gap-4">
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                <FaDownload className="inline mr-2" />
                Download Receipt
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <FaEye className="inline mr-2" />
                Track Status
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default OnlineAdmissionPortal;