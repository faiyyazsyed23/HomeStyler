import React from "react";
import Slider from "react-slick";
import {
  FaHome,
  FaRulerCombined,
  FaLightbulb,
  FaTools,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";

const heroSlides = [
  {
    img: "../assets/images/banner.jpg",  // leading slash jaruri hai
    title: "Design Your House",
    subtitle: "with the Experts",
    desc: "Transform your living space into the home of your dreams with the help of our seasoned professionals.",
    btnText: "View Gallery",
    btnLink: "/designstyles",
  },
  {
    img: "../assets/images/kitchen1.jpg",
    title: "Modern Interiors",
    subtitle: "for Your Living Space",
    desc:
      "Achieve style and comfort with modern designs that match your unique taste and lifestyle.",
    btnText: "Explore More",
    btnLink: "/livingroom",
  },
  {
    img: "../assets/images/furnitureproduct1.jpeg",
    title: "Elegant Designs",
    subtitle: "Crafted with Care",
    desc:
      "Stunning spaces, thoughtfully created to reflect beauty and comfort.",
    btnText: "Get Inspired",
    btnLink: "/elegantstyle",
  },
];

const services = [
  {
    icon: <FaHome size={28} />,
    title: "Complete Home Makeover",
  },
  {
    icon: <FaRulerCombined size={28} />,
    title: "Tailored Design Solutions",
  },
  {
    icon: <FaLightbulb size={28} />,
    title: "Expert Guidance",
  },
  {
    icon: <FaTools size={28} />,
    title: "Seamless Execution",
  },
];

const teamMembers = [
  {
    img: "/assets/images/person1.png", // leading slash add karo
    role: "Interior Designer",
    rating: 4,
    desc:
      "Specializing in creating functional and aesthetically pleasing spaces, our Interior Designers ensure that every detail reflects your personal style and meets your needs.",
    profileLink: "/profile1",
  },
  {
    img: "/assets/images/person2.png",
    role: "Landscape Architect",
    rating: 4.5,
    desc:
      "Our Landscape Architects design beautiful and functional outdoor spaces, incorporating sustainable practices to enhance the natural environment and your property’s value.",
    profileLink: "/profile2",
  },
  {
    img: "/assets/images/person3.png",
    role: "Home Stager",
    rating: 5,
    desc:
      "Our Home Stagers expertly prepare homes for sale, using design principles to highlight a property’s strengths and create an inviting atmosphere for potential buyers.",
    profileLink: "/profile3",
  },
];

function renderStars(rating) {
  const stars = [];
  let fullStars = Math.floor(rating);
  let halfStar = rating - fullStars >= 0.5;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={"star" + i} className="text-yellow-400" />);
  }
  if (halfStar) {
    stars.push(<FaStarHalfAlt key="halfstar" className="text-yellow-400" />);
  }
  return stars;
}

export default function Home() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    adaptiveHeight: true,
  };

  return (
    
    <main className="bg-gray-900 font-poppins text-white min-h-screen">
        <img src="../assets/images/banner.jpg" className="w-full h-full object-cover brightness-75"/>
      {/* Hero Section */}
      <section className="relative">
        <Slider {...sliderSettings}>
          {heroSlides.map(({  title, subtitle, desc, btnText, btnLink }, i) => (
            <div key={i} className="relative h-[70vh] md:h-[85vh]">
              <img
                src='../assets/images/banner.jpg'
                
                 
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center px-6 text-center max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-3 leading-tight">
                  <span className="text-yellow-400">{title}</span> <br />

                  {subtitle}

                  
                </h1>
                <p className="text-lg md:text-xl mb-6">{desc}</p>
                <a
                  href={btnLink}
                  className="inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded shadow-lg transition"
                >
                  {btnText} <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 text-center bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h6 className="uppercase text-yellow-400 tracking-widest mb-3 font-semibold">
            Why Choose Us
          </h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 max-w-3xl mx-auto">
            We work to an extremely high standard of customer satisfaction
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {services.map(({ icon, title }, i) => (
              <div
                key={i}
                className="bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-yellow-400/50 transition"
              >
                <div className="text-yellow-400 mb-4">{icon}</div>
                <h5 className="text-lg font-semibold">{title}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="uppercase text-yellow-400 text-4xl font-extrabold mb-3">
              Our Team
            </h1>
            <h6 className="text-gray-300 text-lg">
              Meet Our Styling Designers
            </h6>
          </div>

          <div className="space-y-12">
            {teamMembers.map(({ img, role, rating, desc, profileLink }, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row items-center md:items-start bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-yellow-400/50 transition"
              >
                <img
                  src={img}
                  alt={`Team member ${i + 1}`}
                  className="w-32 h-32 rounded-full object-cover flex-shrink-0"
                />
                <div className="md:ml-8 mt-6 md:mt-0 flex-1 text-center md:text-left">
                  <p className="text-gray-300 text-lg">{desc}</p>
                  <a
                    href={profileLink}
                    className="inline-block mt-4 px-5 py-2 bg-yellow-400 text-gray-900 font-semibold rounded hover:bg-yellow-500 transition"
                  >
                    View Profile
                  </a>
                </div>
                <div className="mt-6 md:mt-0 md:ml-8 text-center md:text-left flex flex-col items-center md:items-start">
                  <h5 className="text-yellow-400 font-semibold text-lg mb-2">
                    {role}
                  </h5>
                  <div className="flex space-x-1">{renderStars(rating)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
