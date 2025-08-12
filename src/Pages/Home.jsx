// src/Home.jsx
import { TbArrowUpRight, TbArrowNarrowRight } from "react-icons/tb";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Home() {
  const items = [
    {
      id: "01",
      catagory: "BEDROOM SETUP",
      title: "Luxury Bedroom Retreat",
      image: "../assets/images/Bedroom setup.png",
      description:
        "Elegant master suite with custom-designed furniture and premium textiles",
    },
    {
      id: "02",
      catagory: "KITCHEN SETUP",
      title: "Gourmet Chef's Kitchen",
      image: "../assets/images/KITCHEN SETUP.png",
      description:
        "State-of-the-art kitchen with marble countertops and premium appliances",
    },
    {
      id: "03",
      catagory: "DRAWING SETUP",
      title: "Elegant Drawing Room",
      image: "../assets/images/drowing.jpg",
     
      description:
        "Sophisticated formal living space with curated art and bespoke furniture",
    },
    {
      id: "04",
      catagory: "LIVING SETUP",
      title: "Modern Family Room",
      image: "../assets/images/LIVING SETUP.png",
      description:
        "Contemporary living space designed for comfort and social gatherings",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Homeowner, New York",
      quote: "Digimax transformed our penthouse into a masterpiece. Their attention to detail and creative vision exceeded all expectations.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Restaurant Owner, Miami",
      quote: "The interior design for our flagship restaurant has received countless compliments. Digimax captured our brand identity perfectly.",
      rating: 5,
    },
    {
      id: 3,
      name: "Elena Chen",
      role: "Corporate Client, San Francisco",
      quote: "Our office redesign has boosted employee morale and productivity. The team at Digimax are true professionals.",
      rating: 5,
    },
  ];

  

  return (
    <div className="bg-[#faf9f7]">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/90 via-[#0f172a]/70 to-transparent z-10"></div>
        <div className="absolute inset-0">
          <img 
            src="../assets/images/homebanner.png" 
            alt="Luxury Interior" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 py-32 lg:flex lg:items-center lg:gap-12">
          <div className="lg:w-1/2">
            <p className="tracking-[0.3em] text-xs text-amber-500 uppercase">Redefining Luxury Interiors</p>
            <h1 className="mt-6 text-4xl font-light leading-tight text-white sm:text-5xl lg:text-6xl">
              <span className="block font-serif italic">Elegance</span>
              <span className="block font-bold mt-2">Reimagined</span>
            </h1>
            <p className="mt-6 text-gray-200 max-w-lg">
              Crafting extraordinary spaces that blend timeless sophistication with modern sensibility.
              We transform environments into expressions of refined living.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center px-8 py-4 text-white bg-amber-600 rounded-full shadow-lg hover:bg-amber-700 transition-all duration-300 group">
                <span className="font-medium">Design Your Lifestyle</span>
              
              </button>
              <button className="inline-flex items-center px-8 py-4 text-white border border-white/30 rounded-full hover:bg-white/10 transition-colors">
              
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 text-amber-600 mb-4">
              <div className="h-px w-8 bg-amber-600"></div>
              <span className="text-sm font-medium tracking-widest">OUR EXPERTISE</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Curated Design Services
            </h2>
            <p className="mt-4 text-gray-600">
              We specialize in transforming spaces into personalized sanctuaries that reflect 
              your unique style and elevate your living experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Residential Design", 
                description: "Custom homes, apartments, and private residences tailored to your lifestyle",
                icon: "🏠"
              },
              { 
                title: "Commercial Spaces", 
                description: "Office, retail, and hospitality environments designed for impact",
                icon: "🏢"
              },
              { 
                title: "Renovation & Restoration", 
                description: "Breathing new life into existing spaces while preserving character",
                icon: "🔨"
              },
              { 
                title: "Luxury Staging", 
                description: "Premium staging solutions that showcase properties at their best",
                icon: "✨"
              }
            ].map((service, index) => (
              <div key={index} className="bg-[#faf9f7] p-8 rounded-xl group hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <div className="mt-6">
                  <a href="#" className="inline-flex items-center text-amber-600 font-medium group-hover:underline">
                    Explore Service
                    
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Catalogue Section */}
      <div className="py-20 bg-[#faf9f7]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-8 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 text-amber-600 mb-4">
                <div className="h-px w-8 bg-amber-600"></div>
                <span className="text-sm font-medium tracking-widest">RECENT WORK</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                Signature Projects
              </h2>
            </div>
           
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item) => (
              <div key={item.id} className="relative group overflow-hidden rounded-xl">
                <div className="overflow-hidden rounded-xl">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent text-white">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-xs font-medium text-amber-400 uppercase tracking-widest">
                        {item.catagory}
                      </span>
                      <h3 className="mt-1 text-xl font-bold">{item.title}</h3>
                    </div>
                    <span className="text-2xl font-serif text-amber-400">{item.id}</span>
                  </div>
                  <p className="mt-3 text-sm text-gray-200">{item.description}</p>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
            <div className="lg:w-1/2 relative">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="../assets/images/Homeabout.png"
                  alt="About" 
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-amber-600 text-white py-4 px-8 rounded-lg shadow-lg">
                <span className="block text-4xl font-bold">12+</span>
                <span className="text-sm">Years of Excellence</span>
              </div>
            </div>
            
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 text-amber-600">
                <div className="h-px w-8 bg-amber-600"></div>
                <span className="text-sm font-medium tracking-widest">OUR STORY</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                Crafting Timeless Interiors Since 2011
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Digimax Classica emerged from a passion for creating spaces that transcend trends 
                and embody enduring elegance. Our team of visionary designers, architects, and 
                craftsmen collaborate to transform environments into expressions of refined living.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With over a decade of excellence, we've curated interiors for discerning clients 
                worldwide, earning numerous accolades for our innovative approach and meticulous 
                attention to detail.
              </p>
              
              <div className="flex gap-8 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">27+</div>
                  <div className="text-gray-600 mt-1">Industry Awards</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">850+</div>
                  <div className="text-gray-600 mt-1">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">50+</div>
                  <div className="text-gray-600 mt-1">Team Members</div>
                </div>
              </div>
              
              <button className="mt-10 inline-flex items-center px-8 py-4 text-white bg-gray-900 rounded-full shadow-lg hover:bg-amber-600 transition-colors duration-300 group">
                <span className="font-medium">Discover Our Process</span>
                <TbArrowUpRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:rotate-45" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-24 bg-[#0f172a] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 text-amber-400 mb-4">
              <div className="h-px w-8 bg-amber-400"></div>
              <span className="text-sm font-medium tracking-widest">CLIENT TESTIMONIALS</span>
            </div>
            <h2 className="text-3xl font-bold md:text-4xl">
              Voices of Satisfaction
            </h2>
            <p className="mt-4 text-gray-300">
              Discover why our clients trust us to transform their spaces into extraordinary environments.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-[#1e293b] p-8 rounded-xl">
                <div className="flex text-amber-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-lg italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-24 bg-[#faf9f7]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-8 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 text-amber-600 mb-4">
                <div className="h-px w-8 bg-amber-600"></div>
                <span className="text-sm font-medium tracking-widest">DESIGN GALLERY</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                Modern Classic Inspirations
              </h2>
            </div>
           
          </div>
          
          <Swiper
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            modules={[Autoplay]}
            className="rounded-xl overflow-hidden"
          >
            {[
              "../assets/images/project1.png",
              "../assets/images/project 2.png",
              "../assets/images/livingroom4.jpg",
              "../assets/images/luxorlivingroom.jpg ",
              "../assets/images/project5.png" 
            ].map((img, index) => (
              <SwiperSlide key={index}>
                <div className="relative group overflow-hidden rounded-xl">
                  <img 
                    src={img} 
                    alt="Design" 
                    className="w-full h-[500px] object-cover rounded-xl transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-xl font-bold">Project {index + 1}</h3>
                      <p className="text-gray-200 mt-1">Modern Classic Design</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="../assets/images/lastbanner.png" 
            alt="Luxury Interior" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 text-amber-400 mb-4">
            <div className="h-px w-8 bg-amber-400"></div>
            <span className="text-sm font-medium tracking-widest">GET STARTED</span>
          </div>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Ready to Transform Your Space?
          </h2>
          <p className="mt-6 text-gray-200 max-w-2xl mx-auto">
            Schedule a complimentary consultation with our design team to discuss your vision 
            and discover how we can create an extraordinary environment tailored to your lifestyle.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
           
            
          </div>
        </div>
      </div>
    </div>
  );
}