import React from "react";

import Navbar from "./components/Shared/Navbar";
import Hero from "./components/Shared/Hero";
import Information from "./components/Shared/Information";
import IntegratedSoftware from "./components/Shared/IntegratedSoftware";
import Features from "./components/Shared/Features";
import AdminFeatures from "./components/Admin/AdminFeatures";
import ParentPortal from "./components/Parent/ParentDashboard";
import StudentPortal from "./components/Student/StudentPortal";
import StaffPortal from "./components/Staff/StaffPortal";
import VideoThumb from "./components/Shared/VideoThumb";
import TestimonialCarousel from "./components/Shared/TestimonialCarousel";
import DemoForm from "./components/Shared/DemoForm";
import Footer from "./components/Shared/Footer";

const HomePage = () => {
  return (
    <div className="font-sans bg-[#d9d9d9] text-gray-900">
      <Navbar />
      <Hero />

      {/* Information Section */}
      <section id="information" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <Information />
        </div>
      </section>

      {/* Integrated Software Section */}
      <section id="integrated-software" className="py-16 bg-[#f3f3f3]">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <IntegratedSoftware />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <Features />
        </div>
      </section>

      {/* Admin Features */}
      <section id="admin" className="py-16 bg-[#f3f3f3]">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#003566] mb-12">
            Admin Dashboard Highlights
          </h2>
          <AdminFeatures />
        </div>
      </section>

      {/* Parent Portal */}
      <section id="parents" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#003566] mb-12">
            Parent Portal for Smarter Communication
          </h2>
          <ParentPortal />
        </div>
      </section>

      {/* Student Portal */}
      <section id="students" className="py-16 bg-[#f3f3f3]">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#003566] mb-12">
            Student Dashboard for Smart Learning
          </h2>
          <StudentPortal />
        </div>
      </section>

      {/* Staff Portal
      <section id="staff" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#003566] mb-12">
            Staff Dashboard for Efficient Management
          </h2>
          <StaffPortal />
        </div>
      </section> */}

      {/* Video Experience */}
      <section id="video-experience" className="py-16 bg-[#e6f0ff]">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#003566] mb-12">
            Live Video Experience
          </h2>
          <VideoThumb />
        </div>
      </section>

      {/* Testimonials
      <section id="testimonials" className="py-16 bg-[#f3f3f3]">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <TestimonialCarousel />
        </div>
      </section> */}

      {/* Demo Form */}
      <section id="demo" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003566] mb-8">
            Request a Free Demo 🚀
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Fill in the form below and our team will reach out to you shortly.
          </p>
          <DemoForm />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
