import React from "react";
import { FaGraduationCap, FaUsersCog, FaMoneyBillWave, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaGraduationCap size={30} />,
    title: "Online Admission Portal",
    description: "Apply for college admission remotely with DigiLocker document verification."
  },
  {
    icon: <FaUsersCog size={30} />,
    title: "Complete ERP System",
    description: "Manage students, faculty, admin, and parent dashboards in one platform."
  },
  {
    icon: <FaMoneyBillWave size={30} />,
    title: "Fee Management",
    description: "Online fee payment, hostel fees, transport fees with payment history tracking."
  },
  {
    icon: <FaShieldAlt size={30} />,
    title: "Smart Features",
    description: "AI analytics, emergency response, blockchain certificates, and IoT integration."
  },
];

const Information = () => {
  return (
    <section className="relative min-h-screen bg-gray-50 py-24 px-6 md:px-20 flex flex-col justify-center items-center overflow-hidden">

      {/* Floating Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#003566] rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#ffc300] rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-[#003566] rounded-full opacity-5 -translate-x-1/2 -translate-y-1/2"></div>

      {/* Gradient Heading */}
      <motion.h2
        className="text-5xl md:text-6xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#003566] to-[#ffc300]"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        What We Provide
      </motion.h2>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full max-w-7xl">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-transform duration-500"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            <div className="w-16 h-16 flex items-center justify-center mb-4 text-[#ffc300]">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-[#003566] mb-2">{feature.title}</h3>
            <p className="text-gray-700 text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Call-to-Action */}
      <motion.p
        className="mt-16 text-center text-[#003566] text-xl md:text-2xl font-semibold"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        Experience the future of education — where <span className="text-[#ffc300]">technology meets efficiency</span>!
      </motion.p>
    </section>
  );
};

export default Information;
