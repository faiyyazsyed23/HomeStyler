import React, { useState, useEffect } from 'react';
import { FaHeart, FaChevronDown, FaChevronUp, FaSearch, FaUser } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const PremiumNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);
  const [activeNav, setActiveNav] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
    setActiveNav(name);
    setOpenSubDropdown(null);
  };

  const toggleSubDropdown = (name) => {
    setOpenSubDropdown(openSubDropdown === name ? null : name);
  };

  // navItems with nested Furniture
  const navItems = [
    { name: 'Home', to: '/' },
    {
      name: 'Design Styles',
      to: '/designstyles',
      children: [
        { name: 'Living Room', to: '/livingroom' },
        { name: 'Kitchen', to: '/kitchen' },
        { name: 'Bedroom', to: '/bedroom' },
        { name: 'Bathroom', to: '/bathroom' },
        { name: 'Contemporary Styles', to: '/contemporarystyle' },
        { name: 'Elegant Look Styles', to: '/elegantstyle' },
      ],
    },
    {
      name: "Products",
    to: "/product",
    children: [
      {
        name: "Furniture",
        to: "/product/furniture",
        children: [
          { name: "Sofas", to: "/product/furniture/sofas" },
          { name: "Tables", to: "/product/furniture/tables" },
          { name: "Chairs", to: "/product/furniture/chairs" }
        ]
      },
      {
        name: "Kitchen",
        to: "/product/kitchen",
        children: [
          { name: "Cabinets", to: "/product/kitchen/cabinets" },
          { name: "Cookware", to: "/product/kitchen/cookware" },
          { name: "Appliances", to: "/product/kitchen/appliances" }
        ]
      },
      {
        name: "Lighting",
        to: "/product/lighting",
        children: [
          { name: "Ceiling Lights", to: "/product/lighting/ceiling" },
          { name: "Lamps", to: "/product/lighting/lamps" },
          { name: "Wall Lights", to: "/product/lighting/wall" }
        ]
      },
      {
        name: "Decor",
        to: "/product/decor",
        children: [
          { name: "Wall Art", to: "/product/decor/wall-art" },
          { name: "Mirrors", to: "/product/decor/mirrors" },
          { name: "Rugs", to: "/product/decor/rugs" }
        ]
      },
      {
        name: "Bathroom",
        to: "/product/bathroom",
        children: [
          { name: "Showers", to: "/product/bathroom/showers" },
          { name: "Bathtubs", to: "/product/bathroom/bathtubs" },
          { name: "Sinks", to: "/product/bathroom/sinks" }
        ]
      }
    ]
    },
   
    { name: 'About', to: '/about' },
    { name: 'Contact', to: '/Contact' },
    { name: 'Feedback', to: '/feedback' },
    { name: 'Site Map', to: '/sitemap' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-gray-900/90 backdrop-blur-md shadow-xl py-0 border-b border-gray-700'
          : 'bg-transparent py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center space-x-2 py-3"
            onClick={() => setActiveNav('Home')}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-700 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative w-10 h-10 bg-gradient-to-r from-amber-500 to-amber-700 rounded-full flex items-center justify-center">
                <span className="font-bold text-white text-lg">H</span>
              </div>
            </div>
            <span className="text-2xl font-bold tracking-wide transition-all duration-300 group-hover:text-amber-400">
              Home<span className="text-amber-500">Styler</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.children ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className={`relative px-4 py-3 flex items-center transition-all duration-300 ${
                        activeNav === item.name
                          ? 'text-amber-400'
                          : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      <span className="relative z-10">{item.name}</span>
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 bg-amber-500 transition-all duration-500 ${
                          activeNav === item.name ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                      ></span>
                      <span className="ml-1.5">
                        {openDropdown === item.name ? (
                          <FaChevronUp size={12} className="text-amber-400" />
                        ) : (
                          <FaChevronDown
                            size={12}
                            className="group-hover:text-amber-400 transition-colors"
                          />
                        )}
                      </span>
                    </button>

                    {/* First Level Dropdown */}
                    <div
                      className={`absolute top-full left-0 mt-1 w-56 bg-gray-800/95 backdrop-blur-xl rounded-xl shadow-2xl overflow-hidden transition-all duration-300 origin-top transform ${
                        openDropdown === item.name
                          ? 'opacity-100 scale-100 translate-y-0'
                          : 'opacity-0 scale-95 translate-y-2 pointer-events-none'
                      }`}
                    >
                      {item.children.map((child) => (
                        <div key={child.name} className="relative">
                          {child.children ? (
                            <>
                              <button
                                onClick={() => toggleSubDropdown(child.name)}
                                className="w-full flex justify-between items-center px-5 py-3.5 text-sm text-gray-300 hover:text-white hover:bg-amber-500/30"
                              >
                                {child.name}
                                <FaChevronDown
                                  size={10}
                                  className={`transition-transform ${
                                    openSubDropdown === child.name ? 'rotate-180' : ''
                                  }`}
                                />
                              </button>
                              {openSubDropdown === child.name && (
                                <div className="pl-5 bg-gray-700">
                                  {child.children.map((sub) => (
                                    <NavLink
                                      key={sub.name}
                                      to={sub.to}
                                      className="block px-4 py-2 text-xs text-gray-300 hover:text-white hover:bg-amber-500/30"
                                      onClick={() => {
                                        setActiveNav(sub.name);
                                        setOpenDropdown(null);
                                        setOpenSubDropdown(null);
                                      }}
                                    >
                                      {sub.name}
                                    </NavLink>
                                  ))}
                                </div>
                              )}
                            </>
                          ) : (
                            <NavLink
                              to={child.to}
                              className={({ isActive }) =>
                                `block px-5 py-3.5 text-sm ${
                                  isActive ? 'text-white font-semibold' : 'text-gray-300'
                                } hover:text-white hover:bg-amber-500/30`
                              }
                              onClick={() => {
                                setActiveNav(child.name);
                                setOpenDropdown(null);
                              }}
                            >
                              {child.name}
                            </NavLink>
                          )}
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `relative px-4 py-3 block transition-all duration-300 ${
                        isActive ? 'text-amber-400' : 'text-gray-300 hover:text-white'
                      }`
                    }
                    onClick={() => setActiveNav(item.name)}
                  >
                    <span className="relative z-10">{item.name}</span>
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-amber-500 transition-all duration-500 ${
                        activeNav === item.name ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    ></span>
                  </NavLink>
                )}
              </div>
            ))}
          </div>

          {/* Icons Section */}
          {/* ... keep your existing icon section here ... */}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden bg-gray-900/95 backdrop-blur-xl overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-screen py-4' : 'max-h-0 py-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          {navItems.map((item) => (
            <div key={item.name} className="mb-2">
              {item.children ? (
                <>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="w-full flex justify-between items-center p-4 rounded-xl hover:bg-gray-800/50 transition-colors duration-300 group"
                  >
                    <span
                      className={`transition-colors ${
                        activeNav === item.name ? 'text-amber-400' : 'text-white'
                      }`}
                    >
                      {item.name}
                    </span>
                    <FaChevronDown
                      size={14}
                      className={`transition-transform duration-300 text-gray-400 group-hover:text-amber-400 ${
                        openDropdown === item.name ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {openDropdown === item.name && (
                    <div className="pl-6 mt-1 border-l-2 border-amber-500 ml-4">
                      {item.children.map((child) => (
                        <div key={child.name}>
                          {child.children ? (
                            <>
                              <button
                                onClick={() => toggleSubDropdown(child.name)}
                                className="w-full flex justify-between items-center py-3 px-4 rounded-lg hover:bg-amber-500/30 transition-colors duration-300 text-gray-300"
                              >
                                {child.name}
                                <FaChevronDown
                                  size={10}
                                  className={`transition-transform ${
                                    openSubDropdown === child.name ? 'rotate-180' : ''
                                  }`}
                                />
                              </button>
                              {openSubDropdown === child.name && (
                                <div className="pl-5 border-l border-gray-600">
                                  {child.children.map((sub) => (
                                    <NavLink
                                      key={sub.name}
                                      to={sub.to}
                                      className="block py-2 px-4 text-sm text-gray-300 hover:text-white hover:bg-amber-500/30"
                                      onClick={() => {
                                        setActiveNav(sub.name);
                                        setOpenDropdown(null);
                                        setOpenSubDropdown(null);
                                        setIsOpen(false);
                                      }}
                                    >
                                      {sub.name}
                                    </NavLink>
                                  ))}
                                </div>
                              )}
                            </>
                          ) : (
                            <NavLink
                              to={child.to}
                              className={({ isActive }) =>
                                `block py-3 px-4 rounded-lg hover:bg-amber-500/30 transition-colors duration-300 ${
                                  isActive ? 'text-white font-semibold' : 'text-gray-300'
                                }`
                              }
                              onClick={() => {
                                setActiveNav(child.name);
                                setOpenDropdown(null);
                                setIsOpen(false);
                              }}
                            >
                              {child.name}
                            </NavLink>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-xl hover:bg-gray-800/50 transition-colors duration-300 ${
                      isActive ? 'text-amber-400 font-semibold' : 'text-white'
                    }`
                  }
                  onClick={() => {
                    setActiveNav(item.name);
                    setIsOpen(false);
                  }}
                >
                  {item.name}
                </NavLink>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default PremiumNavbar;
