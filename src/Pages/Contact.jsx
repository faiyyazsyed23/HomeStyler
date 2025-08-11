import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    feedback: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({ name: '', feedback: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-50 p-4">
      <div className="container max-w-6xl mx-auto">
        <div className="py-12">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Form Section */}
              <div className="p-8 lg:p-12">
                <div className="mb-8">
                  <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-500">
                    Share Your Feedback
                  </h1>
                  <p className="text-gray-600 mb-6">
                    How satisfied are you with HomeStyler?
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your Name"
                      required
                      className="w-full px-6 py-4 bg-gray-50 rounded-lg border-2 border-transparent focus:border-amber-300 focus:ring-0 transition-all duration-300 hover:shadow-md"
                    />
                    <div className="absolute top-0 right-0 h-full flex items-center pr-4">
                      <i className="fa-solid fa-user text-gray-400"></i>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <textarea
                      rows="5"
                      name="feedback"
                      value={formData.feedback}
                      onChange={handleChange}
                      placeholder="What do you like most?"
                      required
                      className="w-full px-6 py-4 bg-gray-50 rounded-lg border-2 border-transparent focus:border-amber-300 focus:ring-0 transition-all duration-300 hover:shadow-md"
                    ></textarea>
                    <div className="absolute top-4 right-0 flex items-center pr-4">
                      <i className="fa-solid fa-comment text-gray-400"></i>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className={`w-full py-4 rounded-lg font-bold text-white transition-all duration-500 transform hover:scale-105 ${
                      submitted 
                        ? 'bg-green-500 hover:bg-green-600' 
                        : 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600'
                    }`}
                  >
                    {submitted ? (
                      <div className="flex items-center justify-center">
                        <i className="fa-solid fa-check mr-2"></i>
                        Feedback Sent!
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <i className="fa-solid fa-paper-plane mr-2"></i>
                        Send Feedback
                      </div>
                    )}
                  </button>
                </form>
              </div>
              
              {/* Image Section */}
              <div 
                className="hidden lg:block relative overflow-hidden"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className={`absolute inset-0 bg-gradient-to-t from-amber-800/30 to-transparent z-10 transition-opacity duration-700 ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}></div>
                
                <div className={`absolute inset-0 bg-gradient-to-r from-amber-400/10 to-orange-400/10 z-20 transition-all duration-1000 ${
                  isHovered ? 'opacity-100 scale-110' : 'opacity-0 scale-100'
                }`}></div>
                
                <div className="absolute inset-0 flex items-center justify-center z-30">
                  <div className={`text-center text-white p-8 transition-all duration-700 ${
                    isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}>
                    <i className="fa-solid fa-comments text-5xl mb-4"></i>
                    <h3 className="text-2xl font-bold mb-2">Your Opinion Matters!</h3>
                    <p className="max-w-xs mx-auto">
                      We're constantly improving based on feedback from users like you
                    </p>
                  </div>
                </div>
                
                <div 
                  className={`h-full w-full bg-cover bg-center transition-transform duration-1000 ${
                    isHovered ? 'scale-110' : 'scale-100'
                  }`}
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=2940&auto=format&fit=crop')",
                    height: "100%",
                    minHeight: "500px"
                  }}
                ></div>
              </div>
            </div>
          </div>
          
          {/* Animated decorative elements */}
          <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-amber-200/30 animate-pulse"></div>
          <div className="absolute bottom-40 right-10 w-16 h-16 rounded-full bg-orange-300/30 animate-ping"></div>
          <div className="absolute top-1/3 right-1/4 w-8 h-8 rounded-full bg-amber-400/40 animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

