import React from 'react';
import { FaArrowRight, FaInstagram, FaTwitter, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-poppins">
      {/* Header Section */}
      <header className="relative bg-gradient-to-r from-amber-500 to-amber-700 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center mb-6">
            About <span className="text-amber-900">HomeStyler</span>
          </h1>
          <p className="text-xl text-amber-100 text-center max-w-3xl mx-auto">
            Transforming spaces into dream homes with innovative design solutions and professional expertise.
          </p>
        </div>
      </header>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
                  alt="Modern Kitchen Design" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-800/70 to-transparent"></div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-amber-500 text-white p-6 rounded-xl shadow-xl w-1/2">
                <h3 className="text-2xl font-bold mb-2">12+ Years</h3>
                <p className="text-sm">Industry Experience</p>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="mb-6">
                <span className="text-amber-600 font-semibold uppercase tracking-wider">Our Story</span>
                <h2 className="text-4xl font-bold mt-2 mb-4 text-gray-800">
                  Creative Solutions By Professional Designers
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  Your home is an expression of who you are, and its design should match your lifestyle. 
                  Whether you have traditional tastes or desire a modern feel, we can design your dream 
                  space to suit any purpose.
                </p>
                <p className="text-gray-600 mb-8">
                  Founded in 2012, HomeStyler has transformed over 3,000 homes with our innovative design 
                  approach. Our team of expert designers combines functionality with aesthetics to create 
                  spaces that reflect your personality while enhancing your quality of life.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <div className="bg-amber-500 w-12 h-12 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Innovative Design</h3>
                    <p className="text-gray-600 text-sm">Cutting-edge solutions tailored to your needs</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <div className="bg-amber-500 w-12 h-12 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Premium Quality</h3>
                    <p className="text-gray-600 text-sm">Materials and craftsmanship that last</p>
                  </div>
                </div>
              </div>
              
              <a 
                href="#" 
                className="inline-flex items-center bg-gradient-to-r from-amber-500 to-amber-700 text-white font-medium py-3 px-6 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/30"
              >
                Continue to Home <FaArrowRight className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-semibold uppercase tracking-wider">Our Experts</span>
            <h2 className="text-4xl font-bold mt-2 mb-4 text-gray-800">
              Creative Minds Always Think Something
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet our talented team of designers and architects who bring creativity and expertise to every project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Faiyyaz Ali",
                role: "Leader",
                bio: "Specializing in modern minimalist designs with 10+ years of experience.",
                social: {
                  instagram: "#",
                  twitter: "#",
                  linkedin: "#",
                  facebook: "#"
                }
              },
              {
                name: "Farhan Khan",
                role: "Leader",
                bio: "Capturing the essence of spaces through artistic photography.",
                social: {
                  instagram: "#",
                  twitter: "#",
                  linkedin: "#",
                  facebook: "#"
                }
              },
              {
                name: "h",
                role: "Project cordinator",
                bio: "Ensuring seamless execution from concept to completion.",
                social: {
                  instagram: "#",
                  twitter: "#",
                  linkedin: "#",
                  facebook: "#"
                }
              },
              {
                name: "a",
                role: "Chief Architect",
                bio: "Combining functionality with aesthetic excellence in every design.",
                social: {
                  instagram: "#",
                  twitter: "#",
                  linkedin: "#",
                  facebook: "#"
                }
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden h-80">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full flex items-center justify-center">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-700/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <p className="text-white mb-4">{member.bio}</p>
                    <div className="flex space-x-3">
                      <a href={member.social.instagram} className="bg-white/20 p-2 rounded-full hover:bg-amber-500 transition-colors">
                        <FaInstagram className="text-white" />
                      </a>
                      <a href={member.social.twitter} className="bg-white/20 p-2 rounded-full hover:bg-amber-500 transition-colors">
                        <FaTwitter className="text-white" />
                      </a>
                      <a href={member.social.linkedin} className="bg-white/20 p-2 rounded-full hover:bg-amber-500 transition-colors">
                        <FaLinkedinIn className="text-white" />
                      </a>
                      <a href={member.social.facebook} className="bg-white/20 p-2 rounded-full hover:bg-amber-500 transition-colors">
                        <FaFacebookF className="text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-amber-600 font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-amber-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2">12+</div>
              <div className="text-lg">Years Experience</div>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2">3K+</div>
              <div className="text-lg">Projects Completed</div>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-lg">Expert Team Members</div>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-lg">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-amber-500 to-amber-700 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1453&q=80')] bg-cover bg-center opacity-10"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Space?
              </h2>
              <p className="text-lg text-amber-100 mb-8">
                Schedule a free consultation with our design experts and start your journey to a beautiful home today.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="#" 
                  className="bg-white text-amber-700 font-medium py-3 px-8 rounded-full hover:bg-amber-50 transition-colors duration-300"
                >
                  Book a Consultation
                </a>
                <a 
                  href="#" 
                  className="bg-transparent border-2 border-white text-white font-medium py-3 px-8 rounded-full hover:bg-white/10 transition-colors duration-300"
                >
                  View Our Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Home<span className="text-amber-500">Styler</span>
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Transforming spaces into dream homes with innovative design solutions and professional expertise.
            </p>
            <div className="flex justify-center space-x-4 mb-8">
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-amber-500 transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-amber-500 transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-amber-500 transition-colors">
                <FaLinkedinIn />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-amber-500 transition-colors">
                <FaFacebookF />
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} HomeStyler. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;