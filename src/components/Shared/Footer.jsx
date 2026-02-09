import React from 'react';
import {
  FaFacebookF,
  FaSkype,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';
import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-[#003566] text-[#ffffff] py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo & About */}
        <div className="md:col-span-1">
          <div className="mb-4">
            <div className="text-2xl font-bold">QuickCampus</div>
            <p className="text-sm mt-2">
              QuickCampus is a modern ERP platform for schools and colleges,
              offering complete digital transformation through smart features
              like online fee payment, attendance, messaging, and more.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 mt-4 text-[#003566]">
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaSkype /></a>
            <a href="#" className="hover:text-white"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaYoutube /></a>
          </div>
        </div>

        {/* About */}
        <div>
          <h4 className="font-semibold mb-2">About</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#">Company Overview</a></li>
            <li><a href="#">Why QuickCampus?</a></li>
            <li><a href="#">Our Benefits</a></li>
            <li><a href="#">Mission & Vision</a></li>
            <li><a href="#">Leadership</a></li>
          </ul>
        </div>

        {/* Product & Services */}
        <div>
          <h4 className="font-semibold mb-2">Product & Services</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#">ERP Modules</a></li>
            <li><a href="#">School Software</a></li>
            <li><a href="#">College Software</a></li>
            <li><a href="#">Integrations</a></li>
            <li><a href="#">Mobile App</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold mb-2">Resources</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#">Download Brochure</a></li>
            <li><a href="#">Presentations</a></li>
            <li><a href="#">Case Studies</a></li>
            <li><a href="#">Knowledge Base</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-2">Contact Us</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <MdLocationOn className="mt-1" />
              <span>
                202, Orion Tech Park, Near Galaxy Mall, TechCity - 102020, India
              </span>
            </li>
            <li className="flex items-center gap-2">
              <MdPhone />
              <span>+91 98765 43210 / +91 91234 56789</span>
            </li>
            <li className="flex items-center gap-2">
              <MdEmail />
              <span>support@quickcampus.com</span>
            </li>
          </ul>

          {/* Buttons */}
          <div className="mt-4 flex gap-2">
            <button className="border border-[#003566] text-[#003566] text-sm px-3 py-1 rounded-full hover:bg-[#003566] hover:text-white transition">
              Request Demo
            </button>
            <button className="border border-[#003566] text-[#003566] text-sm px-3 py-1 rounded-full hover:bg-[#003566] hover:text-white transition">
              Watch Video
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#003566] mt-8 pt-4 px-4 text-sm text-center text-[#003566]">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
          <p>© QuickCampus 2025. All rights reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
