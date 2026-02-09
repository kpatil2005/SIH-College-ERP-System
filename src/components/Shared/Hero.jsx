import React from "react";
import bgImage from "../../assets/images/bg.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/25"></div>

      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold">
          Smart ERP for <span className="text-[#ffc300]">Smarter Institutions</span>
        </h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Admissions, Fees, Hostel & Academics – All in One Powerful Platform.
        </p>

        <div className="mt-6 flex justify-center space-x-4 flex-wrap gap-2">
          <button
            onClick={() => navigate("/admission")}
            className="bg-[#003566] px-6 py-3 rounded-md hover:bg-[#002147] transition"
          >
            Apply for Admission
          </button>

          <button
            onClick={() => navigate("/login")}
            className="bg-[#ffc300] text-black px-6 py-3 rounded-md hover:bg-yellow-400 transition"
          >
             Login
          </button>

         
        </div>
      </div>
    </section>
  );
};

export default Hero;
