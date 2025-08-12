import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f9f7f2] to-[#eae6da] p-4">
      <div className="container max-w-6xl mx-auto">
        <div className="py-12 relative">
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-[#c5a47e]/10 animate-pulse z-0"></div>
          <div className="absolute bottom-40 right-10 w-16 h-16 rounded-full bg-[#9a7b5f]/20 animate-ping z-0"></div>
          <div className="absolute top-1/3 right-1/4 w-8 h-8 rounded-full bg-[#b08e6a]/20 animate-bounce z-0"></div>
          
          {/* Main content */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:shadow-2xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Contact Form Section */}
              <div className="p-8 lg:p-12">
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-px w-12 bg-[#c5a47e]"></div>
                    <span className="text-sm font-medium tracking-widest text-[#c5a47e]">GET IN TOUCH</span>
                  </div>
                  
                  <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#1a1a1a] mb-4">
                    Let's Design Your Dream Space
                  </h1>
                  
                  <p className="text-[#5a5a5a] mb-6 max-w-lg">
                    Our design team is ready to bring your vision to life. Fill out the form below and 
                    we'll get back to you within 24 hours to schedule your consultation.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-[#5a5a5a] mb-2">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        required
                        className="w-full px-6 py-3 bg-[#f9f7f2] rounded-lg border border-[#e3dcc9] focus:border-[#c5a47e] focus:ring-0 transition-all duration-300"
                      />
                    </div>
                    
                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-[#5a5a5a] mb-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="w-full px-6 py-3 bg-[#f9f7f2] rounded-lg border border-[#e3dcc9] focus:border-[#c5a47e] focus:ring-0 transition-all duration-300"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-[#5a5a5a] mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(123) 456-7890"
                        className="w-full px-6 py-3 bg-[#f9f7f2] rounded-lg border border-[#e3dcc9] focus:border-[#c5a47e] focus:ring-0 transition-all duration-300"
                      />
                    </div>
                    
                    {/* Subject */}
                    <div>
                      <label className="block text-sm font-medium text-[#5a5a5a] mb-2">Subject</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-3 bg-[#f9f7f2] rounded-lg border border-[#e3dcc9] focus:border-[#c5a47e] focus:ring-0 transition-all duration-300 appearance-none"
                      >
                        <option value="">Select a subject</option>
                        <option value="Residential Design">Residential Design</option>
                        <option value="Commercial Space">Commercial Space</option>
                        <option value="Renovation">Renovation</option>
                        <option value="Consultation">Consultation</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-[#5a5a5a] mb-2">Your Message</label>
                    <textarea
                      rows="5"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      required
                      className="w-full px-6 py-4 bg-[#f9f7f2] rounded-lg border border-[#e3dcc9] focus:border-[#c5a47e] focus:ring-0 transition-all duration-300"
                    ></textarea>
                  </div>
                  
                  {/* Submit Button */}
                  <button
                    type="submit"
                    className={`w-full py-4 rounded-lg font-bold text-white transition-all duration-500 transform hover:scale-[1.02] ${
                      submitted
                        ? "bg-green-600"
                        : "bg-[#1a1a1a] hover:bg-[#c5a47e]"
                    }`}
                  >
                    <div className="flex items-center justify-center gap-3">
                      {submitted ? (
                        <>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          Message Sent!
                        </>
                      ) : (
                        <>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                          </svg>
                          Send Message
                        </>
                      )}
                    </div>
                  </button>
                </form>
                
                <div className="mt-12">
                  <h3 className="font-serif text-xl font-bold text-[#1a1a1a] mb-4">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex items-start gap-3">
                      <div className="bg-[#f9f7f2] p-3 rounded-full">
                        <svg className="w-6 h-6 text-[#c5a47e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-[#1a1a1a]">Our Studio</p>
                        <p className="text-[#5a5a5a]">123 Design Avenue, Creative City</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-[#f9f7f2] p-3 rounded-full">
                        <svg className="w-6 h-6 text-[#c5a47e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-[#1a1a1a]">Call Us</p>
                        <p className="text-[#5a5a5a]">(123) 456-7890</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-[#f9f7f2] p-3 rounded-full">
                        <svg className="w-6 h-6 text-[#c5a47e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-[#1a1a1a]">Email Us</p>
                        <p className="text-[#5a5a5a]">hello@homestyler123.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image Section */}
              <div
                className="hidden lg:block relative overflow-hidden min-h-[700px]"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 to-transparent z-10 transition-opacity duration-700 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                ></div>

                <div
                  className={`absolute inset-0 bg-gradient-to-r from-[#c5a47e]/10 to-transparent z-20 transition-all duration-1000 ${
                    isHovered
                      ? "opacity-100 scale-110"
                      : "opacity-0 scale-100"
                  }`}
                ></div>

                <div className="absolute inset-0 flex items-center justify-center z-30">
                  <div
                    className={`text-center text-white p-8 transition-all duration-700 ${
                      isHovered
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                  >
                    <div className="w-16 h-16 bg-[#c5a47e] rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-serif font-bold mb-4">
                      Design Consultation Awaits
                    </h3>
                    <p className="max-w-xs mx-auto text-gray-200">
                      Our award-winning designers are ready to transform your space into a masterpiece.
                    </p>
                  </div>
                </div>

                <div
                  className={`h-full w-full bg-cover bg-center transition-transform duration-1000 ${
                    isHovered ? "scale-110" : "scale-100"
                  }`}
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1615529162924-f8605388461a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
                    height: "100%"
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;