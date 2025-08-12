// src/components/PremiumFooter.jsx
import React from 'react';
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';

const PremiumFooter = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0a0a0a] to-black text-[#e0e0e0] pt-20 pb-10 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-[#ff6a00]/10 blur-3xl z-0"></div>
      <div className="absolute bottom-1/4 left-0 w-40 h-40 rounded-full bg-[#ff6a00]/10 blur-3xl z-0"></div>
      <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-[#ff9e00]/10 blur-xl z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-[#333333]">
          {/* Brand column */}
          <div className="lg:col-span-2 lg:pr-10">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#ff6a00] to-[#ff9e00] rounded-lg flex items-center justify-center mr-4">
                <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                  <div className="w-4 h-4 bg-gradient-to-br from-[#ff6a00] to-[#ff9e00] rounded-sm"></div>
                </div>
              </div>
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ff6a00] to-[#ff9e00]">
                Homer<span className="text-white">Styler</span>
              </h2>
            </div>
            <p className="mb-8 text-[#a0a0a0] leading-relaxed">
              Creating timeless interiors that blend luxury, comfort, and functionality. 
              We transform spaces into expressions of refined living.
            </p>
            
            <div className="flex items-center gap-4">
              {[FaFacebookF, FaInstagram, FaPinterestP, FaTwitter, FaYoutube].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="w-10 h-10 bg-[#1a1a1a] rounded-full flex items-center justify-center hover:bg-gradient-to-br from-[#ff6a00] to-[#ff9e00] transition-all duration-300 group"
                >
                  <Icon className="text-[#a0a0a0] group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 pb-2 border-b border-[#ff6a00]/30 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Portfolio', 'Testimonials', 'Contact'].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="flex items-center group text-[#a0a0a0] hover:text-white transition-colors"
                  >
                    <span className="w-2 h-2 bg-[#ff6a00] rounded-full mr-3 group-hover:animate-pulse"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 pb-2 border-b border-[#ff6a00]/30 inline-block">
              Our Services
            </h3>
            <ul className="space-y-4">
              {[
                'Residential Design',
                'Commercial Spaces',
                'Renovation',
                'Furniture Selection',
                'Lighting Design',
                'Color Consultation'
              ].map((service, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="flex items-center group text-[#a0a0a0] hover:text-white transition-colors"
                  >
                    <span className="w-2 h-2 bg-[#ff9e00] rounded-full mr-3 group-hover:animate-pulse"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 pb-2 border-b border-[#ff6a00]/30 inline-block">
              Contact Us
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start">
                <div className="bg-[#1a1a1a] p-2 rounded-lg mr-4 mt-1">
                  <MdLocationOn className="text-xl text-[#ff6a00]" />
                </div>
                <div>
                  <p className="font-medium text-white">Studio Address</p>
                  <p className="text-[#a0a0a0]">123 Design Avenue, Creative City, 10001</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-[#1a1a1a] p-2 rounded-lg mr-4 mt-1">
                  <MdPhone className="text-xl text-[#ff6a00]" />
                </div>
                <div>
                  <p className="font-medium text-white">Phone</p>
                  <p className="text-[#a0a0a0]">+1 (123) 456-7890</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-[#1a1a1a] p-2 rounded-lg mr-4 mt-1">
                  <MdEmail className="text-xl text-[#ff6a00]" />
                </div>
                <div>
                  <p className="font-medium text-white">Email</p>
                  <p className="text-[#a0a0a0]">hello@interiorstudio.com</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter & Bottom section */}
        <div className="pt-8 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex-1 max-w-xl">
            <h3 className="text-xl font-bold text-white mb-4">Subscribe to Our Newsletter</h3>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-[#1a1a1a] text-white px-6 py-3 w-full rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#ff6a00]"
              />
              <button className="bg-gradient-to-r from-[#ff6a00] to-[#ff9e00] text-white px-6 py-3 rounded-r-lg hover:opacity-90 transition-opacity font-medium">
                Subscribe
              </button>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {['Visa', 'Mastercard', 'PayPal', 'Apple Pay', 'Google Pay'].map((method, index) => (
              <div key={index} className="flex items-center">
                <div className="w-8 h-8 bg-[#1a1a1a] rounded-full flex items-center justify-center mr-2">
                  <div className="w-4 h-4 bg-gradient-to-r from-[#ff6a00] to-[#ff9e00] rounded-full"></div>
                </div>
                <span className="text-[#a0a0a0]">{method}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-[#333333] mt-8">
          <div className="text-[#777]">
            &copy; 2023 InteriorStudio. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {['Privacy Policy', 'Terms of Service', 'Sitemap', 'Careers'].map((item, index) => (
              <a 
                key={index}
                href="#" 
                className="text-[#a0a0a0] hover:text-[#ff6a00] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
      
      {/* Decorative border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ff6a00]/0 via-[#ff6a00] to-[#ff9e00]/0"></div>
    </footer>
  );
};

export default PremiumFooter;