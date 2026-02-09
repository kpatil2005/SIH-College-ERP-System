import React, { useState } from "react";
import { motion } from "framer-motion";
import classroomImage from "../../assets/images/bg1.png";

const BrochureForm = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Brochure Downloaded Successfully!");
    setForm({ name: "", phone: "", email: "" });
  };

  // Animation variants
  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="max-w-5xl mx-auto bg-[#d9d9d9] rounded-3xl p-10 flex flex-col md:flex-row items-center gap-10">
      {/* Left Image */}
      <motion.div
        className="flex-shrink-0"
        variants={fadeInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <img
          src={classroomImage}
          alt="Classroom"
          className="rounded-tl-3xl rounded-tr-3xl md:rounded-tr-none md:rounded-bl-3xl object-cover w-72 h-96 hover:scale-105 transition-transform duration-500"
          style={{ borderRadius: "150px 150px 30px 30px" }}
        />
      </motion.div>

      {/* Right Form and Text */}
      <motion.div
        className="flex-1 text-[#003566]"
        variants={fadeInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="font-semibold mb-1">e-Brochure</p>
        <h2 className="text-3xl font-extrabold mb-3 leading-tight">
          It's All That You Need For{" "}
          <span style={{ color: "#ff9900" }}>Efficient</span> School Management
        </h2>
        <p className="mb-8 text-sm max-w-xl">
          Want To Know More About Quickcampus School Management Software? Our High Quality, Informative Brochures Are Just A Click Away.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5 max-w-md">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block mb-1 font-semibold text-[#003566]">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="w-full px-4 py-3 rounded-xl border border-[#003566] text-[#003566] placeholder-[#003566] 
                focus:outline-none focus:ring-2 focus:ring-[#003566] transition"
              style={{ backgroundColor: "#fff" }}
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block mb-1 font-semibold text-[#003566]">Phone no. *</label>
            <div className="flex items-center border border-[#003566] rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-[#003566] transition" style={{ backgroundColor: "#fff" }}>
              <span className="px-3 py-3 bg-[#ffc300] text-[#003566] font-bold flex items-center">
                🇮🇳
              </span>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="081234 56789"
                required
                className="flex-grow px-4 py-3 rounded-r-xl border-none text-[#003566] placeholder-[#003566] focus:outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-1 font-semibold text-[#003566]">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email ID"
              required
              className="w-full px-4 py-3 rounded-xl border border-[#003566] text-[#003566] placeholder-[#003566] 
                focus:outline-none focus:ring-2 focus:ring-[#003566] transition"
              style={{ backgroundColor: "#fff" }}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="px-6 py-3 rounded-full font-semibold text-white text-lg"
            style={{
              background: "linear-gradient(90deg, #ffc300 0%, #ff6600 100%)",
              transition: "background 0.3s ease",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "linear-gradient(90deg, #ffd633 0%, #ff7f00 100%)"}
            onMouseLeave={e => e.currentTarget.style.background = "linear-gradient(90deg, #ffc300 0%, #ff6600 100%)"}
          >
            Download Now
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default BrochureForm;
