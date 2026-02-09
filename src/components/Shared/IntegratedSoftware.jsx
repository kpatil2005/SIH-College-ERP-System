import React from "react";
import {
  FaWhatsapp,
  FaFingerprint,
  FaVideo,
  FaTruckMoving,
  FaRegEdit,
  FaMobileAlt,
  FaBarcode,
  FaCalculator,
} from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  { icon: <FaWhatsapp size={30} />, title: "WhatsApp" },
  { icon: <FaFingerprint size={30} />, title: "Biometric" },
  { icon: <FaVideo size={30} />, title: "Virtual Class" },
  { icon: <FaTruckMoving size={30} />, title: "Vehicle Tracking" },
  { icon: <FaRegEdit size={30} />, title: "E-Exam" },
  { icon: <FaMobileAlt size={30} />, title: "Online Payment" },
  { icon: <FaBarcode size={30} />, title: "Barcode" },
  { icon: <FaCalculator size={30} />, title: "Tally Integration" },
];

const IntegratedSoftware = () => {
  return (
    <div className="bg-white py-16 px-6 md:px-20 text-center">
      {/* Header */}
      <h2 className="text-2xl md:text-3xl font-semibold text-[#ffc300] mb-2">
        We Provide
      </h2>
      <h3 className="text-3xl md:text-4xl font-extrabold text-[#003566] mb-6">
        Integrated School Management Software
      </h3>

      {/* Paragraph */}
      <p className="text-gray-700 max-w-4xl mx-auto text-md md:text-lg leading-relaxed mb-12">
        <span className="text-[#003566] font-semibold">
          Quick Campus
        </span>{" "}
        school management software is a <span className="text-[#ffc300] font-bold">complete solution</span> that
        empowers schools to manage admissions, academic processes, staff, attendance, and more.
        It integrates advanced features like <span className="text-[#ffc300] font-bold">biometric, e-exam, WhatsApp notifications, and vehicle tracking</span> 
        while keeping the interface <span className="text-[#003566] font-semibold">user-friendly</span> and efficient.
      </p>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((item, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-[#ffe8d6] to-[#fef3e7] p-6 rounded-xl shadow-sm flex flex-col items-center justify-center cursor-pointer hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="bg-white p-4 rounded-full shadow-md mb-4"
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="text-[#003566]">{item.icon}</span>
            </motion.div>
            <h4 className="text-md font-semibold text-[#003566]">{item.title}</h4>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default IntegratedSoftware;
