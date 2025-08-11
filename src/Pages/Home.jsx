import React, { useState, useEffect } from "react";
import { FaHome, FaRulerCombined, FaLightbulb, FaTools, FaArrowRight, FaStar, FaStarHalfAlt } from "react-icons/fa";

const slides = [
  {
    id: 1,
    img: "/FrontPage/assets/images/bathroom1.jpg",
    title: "Design Your House",
    subtitle: "with the Experts",
    desc: "Transform your living space into the home of your dreams with the help of our seasoned professionals.",
    btnText: "View Gallery",
    btnLink: "/designstyles"
  },
  {
    id: 2,
    img: "/FrontPage/assets/images/kitchen1.jpg",
    title: "Modern Interiors",
    subtitle: "for Your Living Space",
    desc: "Achieve style and comfort with modern designs that match your unique taste and lifestyle.",
    btnText: "Explore More",
    btnLink: "/livingroom"
  },
  {
    id: 3,
    img: "/FrontPage/assets/images/furnitureproduct1.jpeg",
    title: "Elegant Designs",
    subtitle: "Crafted with Care",
    desc: "Stunning spaces, thoughtfully created to reflect beauty and comfort.",
    btnText: "Get Inspired",
    btnLink: "/elegantstyle"
  }
];

const team = [
  {
    id: 1,
    img: "/FrontPage/assets/images/person1.png",
    role: "Interior Designer",
    desc: "Specializing in creating functional and aesthetically pleasing spaces, our Interior Designers ensure that every detail reflects your personal style and meets your needs.",
    profileLink: "/profile1",
    stars: 4
  },
  {
    id: 2,
    img: "/FrontPage/assets/images/person2.png",
    role: "Landscape Architect",
    desc: "Our Landscape Architects design beautiful and functional outdoor spaces, incorporating sustainable practices to enhance the natural environment and your property’s value.",
    profileLink: "/profile2",
    stars: 4.5
  },
  {
    id: 3,
    img: "/FrontPage/assets/images/person3.png",
    role: "Home Stager",
    desc: "Our Home Stagers expertly prepare homes for sale, using design principles to highlight a property’s strengths and create an inviting atmosphere for potential buyers.",
    profileLink: "/profile3",
    stars: 5
  }
];

function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="text-yellow-400 flex justify-center md:justify-start">
      {[...Array(fullStars)].map((_, i) => <FaStar key={i} />)}
      {halfStar && <FaStarHalfAlt />}
      {[...Array(emptyStars)].map((_, i) => <FaStar key={i + fullStars + 1} className="opacity-40" />)}
    </div>
  );
}

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide every 5 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-900 font-poppins text-white min-h-screen">

      {/* Hero Carousel */}
      <section className="relative overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}`}
          >
            <img
              src={slide.img}
              alt={`Slide ${slide.id}`}
              className="w-full h-[500px] object-cover brightness-75"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-0">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                <span className="text-yellow-400">{slide.title}</span><br />{slide.subtitle}
              </h1>
              <p className="max-w-xl mb-6 text-lg md:text-xl">{slide.desc}</p>
              <a href={slide.btnLink} className="inline-flex items-center bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 transition">
                {slide.btnText} <FaArrowRight className="ml-2" />
              </a>
            </div>
          </div>
        ))}

        {/* Indicators */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-4 h-4 rounded-full ${idx === currentSlide ? "bg-yellow-400" : "bg-gray-500"}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 text-center bg-gray-800">
        <div className="container mx-auto px-6">
          <h6 className="uppercase text-yellow-400 mb-3 tracking-widest font-semibold">Why Choose Us</h6>
          <h2 className="text-white mb-12 text-3xl md:text-4xl font-bold max-w-4xl mx-auto">We work to an extremely high standard of customer satisfaction</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto">
            <div className="space-y-3">
              <div className="text-yellow-400 text-5xl"><FaHome /></div>
              <h5 className="text-white text-xl font-semibold">Complete Home Makeover</h5>
            </div>
            <div className="space-y-3">
              <div className="text-yellow-400 text-5xl"><FaRulerCombined /></div>
              <h5 className="text-white text-xl font-semibold">Tailored Design Solutions</h5>
            </div>
            <div className="space-y-3">
              <div className="text-yellow-400 text-5xl"><FaLightbulb /></div>
              <h5 className="text-white text-xl font-semibold">Expert Guidance</h5>
            </div>
            <div className="space-y-3">
              <div className="text-yellow-400 text-5xl"><FaTools /></div>
              <h5 className="text-white text-xl font-semibold">Seamless Execution</h5>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 bg-gray-100 text-gray-900">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="uppercase text-yellow-600 text-4xl font-extrabold mb-2">Our Team</h1>
            <h6 className="text-gray-600">Meet Our Styling Designers</h6>
          </div>

          {team.map(member => (
            <div key={member.id} className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg p-6 mb-8">
              <div
                className="w-28 h-28 rounded-full bg-center bg-cover mx-auto md:mx-0"
                style={{ backgroundImage: `url(${member.img})` }}
                alt={`${member.role} photo`}
              />
              <div className="md:ml-8 text-center md:text-left flex-1">
                <p className="mb-4 text-gray-700">{member.desc}</p>
                <a href={member.profileLink} className="inline-block bg-yellow-400 text-gray-900 font-semibold px-5 py-2 rounded hover:bg-yellow-500 transition">
                  View Profile
                </a>
              </div>
              <div className="mt-4 md:mt-0 text-center md:text-left md:w-32">
                <h5 className="font-semibold text-lg mb-1">{member.role}</h5>
                <StarRating rating={member.stars} />
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default HomePage;
