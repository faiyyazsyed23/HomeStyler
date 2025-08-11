import React, { useState } from 'react';
import { FaHome, FaPalette, FaBox, FaUsers, FaInfoCircle, FaEnvelope, FaComments, FaSitemap } from 'react-icons/fa';

const SitemapPage = () => {
  const [hoveredPage, setHoveredPage] = useState(null);
  
  const pages = [
    {
      title: "Home Page",
      link: "index.html",
      icon: <FaHome className="text-blue-500" />,
      color: "from-blue-100 to-blue-50",
      subpages: []
    },
    {
      title: "Design Styles Page",
      link: "designstyles.html",
      icon: <FaPalette className="text-purple-500" />,
      color: "from-purple-100 to-purple-50",
      subpages: [
        { title: "Living Room", link: "livingroom.html" },
        { title: "Kitchen", link: "kitchen.html" },
        { title: "Bedroom", link: "bedroom.html" },
        { title: "Bathroom", link: "bathroom.html" },
        { title: "Contemporary Styles", link: "contemporarystyle.html" },
        { title: "Elegant Look Styles", link: "elegantstyle.html" }
      ]
    },
    {
      title: "Products Page",
      link: "product.html",
      icon: <FaBox className="text-amber-500" />,
      color: "from-amber-100 to-amber-50",
      subpages: [
        { title: "Furniture", link: "#" },
        { title: "Kitchen", link: "#" },
        { title: "Lightening", link: "#" },
        { title: "Decor", link: "#" },
        { title: "Bathroom", link: "#" }
      ]
    },
    {
      title: "Our Designers",
      link: "#gallery",
      icon: <FaUsers className="text-green-500" />,
      color: "from-green-100 to-green-50",
      subpages: []
    },
    {
      title: "About Us Page",
      link: "about.html",
      icon: <FaInfoCircle className="text-teal-500" />,
      color: "from-teal-100 to-teal-50",
      subpages: []
    },
    {
      title: "Contact Us Page",
      link: "Contactus.html",
      icon: <FaEnvelope className="text-red-500" />,
      color: "from-red-100 to-red-50",
      subpages: []
    },
    {
      title: "Feedback Page",
      link: "feedback.html",
      icon: <FaComments className="text-indigo-500" />,
      color: "from-indigo-100 to-indigo-50",
      subpages: []
    },
    {
      title: "Site Map Page",
      link: "sitemap.html",
      icon: <FaSitemap className="text-gray-600" />,
      color: "from-gray-100 to-gray-50",
      subpages: []
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="relative inline-block">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 relative z-10">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Site Map
              </span>
            </h1>
            <div className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full"></div>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our website structure and easily navigate through all our pages
          </p>
        </div>

        {/* Visual sitemap representation */}
        <div className="mb-16 bg-white rounded-2xl shadow-xl p-6 overflow-hidden">
          <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">Website Structure Overview</h2>
          <div className="relative h-64 md:h-80 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center z-10 border-4 border-blue-500">
              <FaHome className="text-blue-500 text-2xl" />
              <span className="absolute -bottom-8 text-sm font-medium">Home</span>
            </div>
            
            {/* Design Styles */}
            <div 
              className={`absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full shadow flex items-center justify-center border-4 border-purple-500 transition-all duration-500 ${
                hoveredPage === 1 ? 'scale-110 shadow-lg' : ''
              }`}
              onMouseEnter={() => setHoveredPage(1)}
              onMouseLeave={() => setHoveredPage(null)}
            >
              <FaPalette className="text-purple-500" />
              <div className="absolute -bottom-8 text-sm">Design</div>
            </div>
            
            {/* Products */}
            <div 
              className={`absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full shadow flex items-center justify-center border-4 border-amber-500 transition-all duration-500 ${
                hoveredPage === 2 ? 'scale-110 shadow-lg' : ''
              }`}
              onMouseEnter={() => setHoveredPage(2)}
              onMouseLeave={() => setHoveredPage(null)}
            >
              <FaBox className="text-amber-500" />
              <div className="absolute -bottom-8 text-sm">Products</div>
            </div>
            
            {/* Designers */}
            <div 
              className={`absolute bottom-1/4 left-1/4 transform -translate-x-1/2 translate-y-1/2 w-20 h-20 bg-white rounded-full shadow flex items-center justify-center border-4 border-green-500 transition-all duration-500 ${
                hoveredPage === 3 ? 'scale-110 shadow-lg' : ''
              }`}
              onMouseEnter={() => setHoveredPage(3)}
              onMouseLeave={() => setHoveredPage(null)}
            >
              <FaUsers className="text-green-500" />
              <div className="absolute -bottom-8 text-sm">Designers</div>
            </div>
            
            {/* About */}
            <div 
              className={`absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 w-20 h-20 bg-white rounded-full shadow flex items-center justify-center border-4 border-teal-500 transition-all duration-500 ${
                hoveredPage === 4 ? 'scale-110 shadow-lg' : ''
              }`}
              onMouseEnter={() => setHoveredPage(4)}
              onMouseLeave={() => setHoveredPage(null)}
            >
              <FaInfoCircle className="text-teal-500" />
              <div className="absolute -bottom-8 text-sm">About</div>
            </div>
            
            {/* Connecting lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <line 
                x1="50%" y1="50%" 
                x2="25%" y2="25%" 
                stroke="#818cf8" 
                strokeWidth="2" 
                strokeDasharray="5,5"
              />
              <line 
                x1="50%" y1="50%" 
                x2="75%" y2="25%" 
                stroke="#f59e0b" 
                strokeWidth="2" 
                strokeDasharray="5,5"
              />
              <line 
                x1="50%" y1="50%" 
                x2="25%" y2="75%" 
                stroke="#10b981" 
                strokeWidth="2" 
                strokeDasharray="5,5"
              />
              <line 
                x1="50%" y1="50%" 
                x2="75%" y2="75%" 
                stroke="#0d9488" 
                strokeWidth="2" 
                strokeDasharray="5,5"
              />
            </svg>
          </div>
        </div>

        {/* Detailed sitemap */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="hidden md:grid grid-cols-12 bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-200">
            <div className="col-span-4 py-4 px-6 font-semibold text-gray-700">Page</div>
            <div className="col-span-8 py-4 px-6 font-semibold text-gray-700">Subpages</div>
          </div>
          
          {pages.map((page, index) => (
            <div 
              key={index}
              className={`group relative grid grid-cols-1 md:grid-cols-12 border-b border-gray-100 last:border-0 transition-all duration-300 ${
                hoveredPage === index ? 'bg-gradient-to-r from-blue-50/50 to-purple-50/50' : ''
              }`}
              onMouseEnter={() => setHoveredPage(index)}
              onMouseLeave={() => setHoveredPage(null)}
            >
              {/* Page Link */}
              <div className="col-span-4 py-5 px-6 flex items-center">
                <div className="mr-4 text-xl transform group-hover:scale-110 transition-transform">
                  {page.icon}
                </div>
                <a 
                  href={page.link} 
                  className="font-medium text-gray-800 hover:text-blue-600 transition-colors relative inline-block"
                >
                  {page.title}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-500"></span>
                </a>
              </div>
              
              {/* Subpages */}
              <div className="col-span-8 py-5 px-6 border-t md:border-t-0 border-gray-100 md:border-l border-gray-100">
                {page.subpages.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {page.subpages.map((subpage, subIndex) => (
                      <a 
                        key={subIndex}
                        href={subpage.link}
                        className="py-2 px-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-all duration-300 group-hover:shadow-sm hover:shadow-md flex items-center"
                      >
                        <div className="mr-2 w-2 h-2 rounded-full bg-blue-400 group-hover:animate-pulse"></div>
                        <span className="text-gray-700 hover:text-purple-600 transition-colors">
                          {subpage.title}
                        </span>
                      </a>
                    ))}
                  </div>
                ) : (
                  <div className="text-gray-400 italic">No subpages</div>
                )}
              </div>
              
              {/* Hover effect */}
              <div className={`absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl transition-opacity duration-500 ${
                hoveredPage === index ? 'opacity-100' : 'opacity-0'
              }`}></div>
            </div>
          ))}
        </div>
        
        {/* Floating decorative elements */}
        <div className="fixed top-20 left-10 w-24 h-24 rounded-full bg-blue-200/30 animate-pulse -z-10"></div>
        <div className="fixed bottom-40 right-10 w-16 h-16 rounded-full bg-purple-300/30 animate-ping-slow -z-10"></div>
        <div className="fixed top-1/3 right-1/4 w-8 h-8 rounded-full bg-amber-400/40 animate-bounce -z-10"></div>
      </div>
    </div>
  );
};

export default SitemapPage;