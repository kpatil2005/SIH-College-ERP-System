import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaShieldAlt,
  FaCertificate,
  FaQrcode,
  FaDownload,
  FaCheck,
  FaLink,
  FaEye,
  FaShare,
  FaCopy
} from 'react-icons/fa';

const BlockchainCertificates = () => {
  const [certificates, setCertificates] = useState([]);
  const [selectedCert, setSelectedCert] = useState(null);
  const [verificationStatus, setVerificationStatus] = useState('');
  const [showQR, setShowQR] = useState(false);

  useEffect(() => {
    // Simulate blockchain certificates
    setCertificates([
      {
        id: 'CERT_001',
        title: 'B.Tech Computer Science Degree',
        issueDate: '2024-06-15',
        blockchainHash: '0x1a2b3c4d5e6f7890abcdef1234567890',
        status: 'Verified',
        ipfsHash: 'QmX7Y8Z9A0B1C2D3E4F5G6H7I8J9K0L1M2N3O4P5Q6R7S8T9U0V1W2X3Y4Z5',
        issuer: 'XYZ Engineering College',
        recipient: 'Patil Pranay Prashant',
        grade: 'First Class with Distinction',
        cgpa: '8.7'
      },
      {
        id: 'CERT_002',
        title: 'Data Structures Certification',
        issueDate: '2024-01-20',
        blockchainHash: '0x9876543210fedcba0987654321fedcba',
        status: 'Verified',
        ipfsHash: 'QmA1B2C3D4E5F6G7H8I9J0K1L2M3N4O5P6Q7R8S9T0U1V2W3X4Y5Z6A7B8C9D0E1F2',
        issuer: 'XYZ Engineering College',
        recipient: 'Patil Pranay Prashant',
        grade: 'A+',
        credits: '4'
      },
      {
        id: 'CERT_003',
        title: 'Hackathon Winner Certificate',
        issueDate: '2024-03-10',
        blockchainHash: '0xabcdef1234567890abcdef1234567890',
        status: 'Pending Verification',
        ipfsHash: 'QmZ9Y8X7W6V5U4T3S2R1Q0P9O8N7M6L5K4J3I2H1G0F9E8D7C6B5A4Z3Y2X1W0V9U8T7',
        issuer: 'Smart India Hackathon',
        recipient: 'Patil Pranay Prashant',
        position: '1st Place',
        category: 'EdTech Solutions'
      }
    ]);
  }, []);

  const generateQRCode = (certId) => {
    // In real implementation, this would generate actual QR code
    return `https://verify.blockchain.edu/certificate/${certId}`;
  };

  const verifyCertificate = async (cert) => {
    setVerificationStatus('Verifying...');
    
    // Simulate blockchain verification
    setTimeout(() => {
      setVerificationStatus('✅ Certificate verified on blockchain');
    }, 2000);
  };

  const downloadCertificate = (cert) => {
    // Simulate PDF download
    const link = document.createElement('a');
    link.href = '#';
    link.download = `${cert.title.replace(/\s+/g, '_')}_${cert.id}.pdf`;
    link.click();
  };

  const shareCertificate = (cert) => {
    const shareUrl = `https://verify.blockchain.edu/certificate/${cert.id}`;
    if (navigator.share) {
      navigator.share({
        title: cert.title,
        text: `Check out my verified certificate: ${cert.title}`,
        url: shareUrl
      });
    } else {
      navigator.clipboard.writeText(shareUrl);
      alert('Certificate link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaShieldAlt className="text-4xl text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-800">Blockchain Certificates</h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your certificates are secured on blockchain technology, ensuring authenticity and preventing fraud. 
            Each certificate has a unique hash and can be verified globally.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="flex items-start justify-between mb-4">
                <FaCertificate className="text-3xl text-yellow-500" />
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  cert.status === 'Verified' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {cert.status}
                </span>
              </div>
              
              <h3 className="font-bold text-lg text-gray-800 mb-2">{cert.title}</h3>
              <p className="text-gray-600 text-sm mb-2">Issued by: {cert.issuer}</p>
              <p className="text-gray-600 text-sm mb-4">Date: {cert.issueDate}</p>
              
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                <FaLink />
                <span className="font-mono">{cert.blockchainHash.substring(0, 20)}...</span>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    verifyCertificate(cert);
                  }}
                  className="flex-1 bg-blue-600 text-white py-2 px-3 rounded-lg text-sm hover:bg-blue-700 transition-colors"
                >
                  <FaCheck className="inline mr-1" /> Verify
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowQR(cert.id);
                  }}
                  className="bg-gray-200 text-gray-700 py-2 px-3 rounded-lg text-sm hover:bg-gray-300 transition-colors"
                >
                  <FaQrcode />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Verification Status */}
        {verificationStatus && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 text-center"
          >
            <p className="text-green-800 font-medium">{verificationStatus}</p>
          </motion.div>
        )}

        {/* Certificate Details Modal */}
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Certificate Details</h2>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-2">{selectedCert.title}</h3>
                  <p className="opacity-90">Recipient: {selectedCert.recipient}</p>
                  <p className="opacity-90">Issued by: {selectedCert.issuer}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Issue Date</h4>
                    <p className="text-gray-600">{selectedCert.issueDate}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Status</h4>
                    <p className={`font-medium ${
                      selectedCert.status === 'Verified' ? 'text-green-600' : 'text-yellow-600'
                    }`}>
                      {selectedCert.status}
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Blockchain Hash</h4>
                  <p className="font-mono text-sm text-gray-600 break-all">{selectedCert.blockchainHash}</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">IPFS Hash</h4>
                  <p className="font-mono text-sm text-gray-600 break-all">{selectedCert.ipfsHash}</p>
                </div>

                {selectedCert.grade && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Grade</h4>
                    <p className="text-gray-600">{selectedCert.grade}</p>
                  </div>
                )}

                <div className="flex gap-3 pt-4">
                  <button
                    onClick={() => downloadCertificate(selectedCert)}
                    className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <FaDownload /> Download PDF
                  </button>
                  <button
                    onClick={() => shareCertificate(selectedCert)}
                    className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <FaShare /> Share
                  </button>
                  <button
                    onClick={() => setShowQR(selectedCert.id)}
                    className="bg-gray-200 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    <FaQrcode />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* QR Code Modal */}
        {showQR && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowQR(false)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="bg-white rounded-2xl p-8 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-bold mb-4">Verification QR Code</h3>
              <div className="w-64 h-64 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <FaQrcode className="text-6xl text-gray-400 mb-2" />
                  <p className="text-sm text-gray-600">QR Code would appear here</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Scan this QR code to verify the certificate on blockchain
              </p>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(generateQRCode(showQR));
                  alert('Verification link copied!');
                }}
                className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 mx-auto"
              >
                <FaCopy /> Copy Link
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default BlockchainCertificates;