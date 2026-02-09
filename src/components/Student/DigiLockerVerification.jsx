import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaShieldAlt,
  FaCheckCircle,
  FaTimes,
  FaFileAlt,
  FaIdCard,
  FaCertificate,
  FaGraduationCap,
  FaSync,
  FaExternalLinkAlt,
  FaDownload,
  FaEye,
  FaClock
} from 'react-icons/fa';

const DigiLockerVerification = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [verifiedDocuments, setVerifiedDocuments] = useState([]);
  const [availableDocuments, setAvailableDocuments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check if DigiLocker is already connected
    const digiLockerStatus = localStorage.getItem('digiLockerConnected');
    if (digiLockerStatus === 'true') {
      setIsConnected(true);
      loadVerifiedDocuments();
    }

    // Mock available documents from DigiLocker
    setAvailableDocuments([
      {
        id: 'aadhaar',
        name: 'Aadhaar Card',
        type: 'Identity',
        icon: <FaIdCard />,
        issuer: 'UIDAI',
        status: 'available',
        verified: false
      },
      {
        id: 'class10',
        name: 'Class 10 Certificate',
        type: 'Education',
        icon: <FaCertificate />,
        issuer: 'CBSE',
        status: 'available',
        verified: false
      },
      {
        id: 'class12',
        name: 'Class 12 Certificate',
        type: 'Education',
        icon: <FaCertificate />,
        issuer: 'CBSE',
        status: 'available',
        verified: false
      },
      {
        id: 'income',
        name: 'Income Certificate',
        type: 'Government',
        icon: <FaFileAlt />,
        issuer: 'District Collector',
        status: 'available',
        verified: false
      },
      {
        id: 'domicile',
        name: 'Domicile Certificate',
        type: 'Government',
        icon: <FaFileAlt />,
        issuer: 'State Government',
        status: 'available',
        verified: false
      }
    ]);
  }, []);

  const loadVerifiedDocuments = () => {
    const verified = JSON.parse(localStorage.getItem('verifiedDocuments') || '[]');
    setVerifiedDocuments(verified);
  };

  const connectToDigiLocker = () => {
    setLoading(true);
    // Simulate DigiLocker OAuth connection
    setTimeout(() => {
      setIsConnected(true);
      localStorage.setItem('digiLockerConnected', 'true');
      setLoading(false);
      alert('Successfully connected to DigiLocker!');
    }, 2000);
  };

  const verifyDocument = (docId) => {
    setLoading(true);
    // Simulate document verification
    setTimeout(() => {
      const doc = availableDocuments.find(d => d.id === docId);
      if (doc) {
        const verifiedDoc = {
          ...doc,
          verified: true,
          verifiedAt: new Date().toISOString(),
          verificationId: `DL${Date.now()}`,
          digitalSignature: true
        };

        const updatedVerified = [...verifiedDocuments, verifiedDoc];
        setVerifiedDocuments(updatedVerified);
        localStorage.setItem('verifiedDocuments', JSON.stringify(updatedVerified));

        // Update available documents
        setAvailableDocuments(prev => 
          prev.map(d => d.id === docId ? { ...d, verified: true } : d)
        );
      }
      setLoading(false);
      alert(`${doc.name} verified successfully!`);
    }, 1500);
  };

  const downloadDocument = (doc) => {
    // Simulate document download
    alert(`Downloading ${doc.name} from DigiLocker...`);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'verified': return 'text-green-600 bg-green-50';
      case 'pending': return 'text-yellow-600 bg-yellow-50';
      case 'available': return 'text-blue-600 bg-blue-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <FaShieldAlt className="text-3xl text-blue-600" />
        <div>
          <h2 className="text-2xl font-bold text-gray-800">DigiLocker Verification</h2>
          <p className="text-gray-600">Verify your documents securely with DigiLocker</p>
        </div>
      </div>

      {/* Connection Status */}
      <div className={`p-6 rounded-lg border-2 ${
        isConnected ? 'border-green-200 bg-green-50' : 'border-blue-200 bg-blue-50'
      }`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
              isConnected ? 'bg-green-600' : 'bg-blue-600'
            } text-white`}>
              {isConnected ? <FaCheckCircle /> : <FaShieldAlt />}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {isConnected ? 'Connected to DigiLocker' : 'Connect to DigiLocker'}
              </h3>
              <p className="text-sm text-gray-600">
                {isConnected 
                  ? 'Your DigiLocker account is connected and ready to use'
                  : 'Connect your DigiLocker account to verify documents'
                }
              </p>
            </div>
          </div>
          {!isConnected && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={connectToDigiLocker}
              disabled={loading}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <FaSync className="animate-spin" />
                  Connecting...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <FaExternalLinkAlt />
                  Connect DigiLocker
                </div>
              )}
            </motion.button>
          )}
        </div>
      </div>

      {isConnected && (
        <>
          {/* Verified Documents */}
          {verifiedDocuments.length > 0 && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <FaCheckCircle className="text-green-600" />
                Verified Documents ({verifiedDocuments.length})
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {verifiedDocuments.map((doc) => (
                  <motion.div
                    key={doc.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="border border-green-200 rounded-lg p-4 bg-green-50"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="text-green-600 text-xl">{doc.icon}</div>
                        <div>
                          <h4 className="font-medium text-gray-800">{doc.name}</h4>
                          <p className="text-sm text-gray-600">Issued by: {doc.issuer}</p>
                        </div>
                      </div>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                        Verified
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>ID: {doc.verificationId}</span>
                      <span>{new Date(doc.verifiedAt).toLocaleDateString()}</span>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <button
                        onClick={() => downloadDocument(doc)}
                        className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm"
                      >
                        <FaDownload />
                        Download
                      </button>
                      <button className="flex items-center gap-1 text-gray-600 hover:text-gray-800 text-sm">
                        <FaEye />
                        View
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Available Documents */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <FaFileAlt className="text-blue-600" />
              Available Documents
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {availableDocuments.map((doc) => (
                <motion.div
                  key={doc.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`border rounded-lg p-4 ${
                    doc.verified ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-white'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`text-xl ${doc.verified ? 'text-green-600' : 'text-gray-600'}`}>
                        {doc.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">{doc.name}</h4>
                        <p className="text-sm text-gray-600">Type: {doc.type}</p>
                        <p className="text-sm text-gray-600">Issuer: {doc.issuer}</p>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      doc.verified ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {doc.verified ? 'Verified' : 'Available'}
                    </span>
                  </div>
                  {!doc.verified && (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => verifyDocument(doc.id)}
                      disabled={loading}
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 text-sm"
                    >
                      {loading ? (
                        <div className="flex items-center justify-center gap-2">
                          <FaSync className="animate-spin" />
                          Verifying...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center gap-2">
                          <FaCheckCircle />
                          Verify Document
                        </div>
                      )}
                    </motion.button>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Benefits of DigiLocker Verification</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-600" />
                <span>Instant document verification</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-600" />
                <span>Government-issued authenticity</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-600" />
                <span>Digital signature validation</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-600" />
                <span>Paperless document storage</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-600" />
                <span>Secure cloud storage</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-600" />
                <span>Easy document sharing</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DigiLockerVerification;