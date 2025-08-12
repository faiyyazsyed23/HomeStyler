import React, { useState } from "react";

const BedroomCollection = () => {
  const [search, setSearch] = useState("");

  const bedroomData = [
    {
      img: "/assets/images/bedroom1.jpg",
      title: "Modern Elegance",
      description: "A sleek design that combines luxury with comfort.",
      products: ["Luxury Bed Frame", "Soft Mattress", "Stylish Nightstands"],
      style: "Modern",
    },
    {
      img: "/assets/images/bedroom2.jpg",
      title: "Rustic Charm",
      description: "Embrace a warm, cozy atmosphere with rustic decor.",
      products: ["Wooden Bed Frame", "Plush Throw Blanket", "Vintage Table Lamps"],
      style: "Rustic",
    },
    {
      img: "/assets/images/bedroom3.jpg",
      title: "Timeless Comfort",
      description: "A design that never goes out of style, perfect for relaxation.",
      products: ["Classic Bed Frame", "Down Comforter", "Elegant Bedside Rugs"],
      style: "Timeless",
    },
    {
      img: "/assets/images/bedroom4.jpg",
      title: "Contemporary Style",
      description: "Clean lines and modern furnishings create a stylish retreat.",
      products: ["Sleek Bed Frame", "Minimalist Nightstands", "Geometric Wall Art"],
      style: "Contemporary",
    },
    {
      img: "/assets/images/bedroom5.jpg",
      title: "Vintage Aesthetic",
      description: "Add a touch of nostalgia with vintage decor elements.",
      products: ["Antique Bed Frame", "Floral Bedspread", "Retro Wall Mirrors"],
      style: "Vintage",
    },
    {
      img: "/assets/images/bedroom6.jpg",
      title: "Minimalist Design",
      description: "Focus on simplicity and functionality for a clean look.",
      products: ["Simple Bed Frame", "Neutral Bedding", "Functional Storage Solutions"],
      style: "Minimalist",
    },
  ];

  const filteredBedrooms = bedroomData.filter((bedroom) =>
    bedroom.title.toLowerCase().includes(search.toLowerCase()) ||
    bedroom.style.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Heading */}
      <h1 className="text-center text-3xl font-bold text-gray-800">
        Discover Your Bedroom Style
      </h1>
      <p className="text-center text-gray-600 mt-2 max-w-2xl mx-auto">
        Dive into our collection of stunning bedroom designs. Whether you're looking
        for modern elegance, rustic charm, or timeless comfort, explore our diverse
        styles and find the perfect inspiration for your space.
      </p>

      {/* Search Bar */}
      <div className="mt-6 flex flex-col items-center">
        <input
          type="text"
          placeholder="Search Bedroom Styles..."
          className="w-full sm:w-1/2 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="mt-3 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Search
        </button>
      </div>

      {/* Collection Heading */}
      <h1 className="text-center text-3xl font-bold text-gray-800 mt-10">
        Bedroom Collection
      </h1>
      <p className="text-center text-gray-600 mt-2 max-w-2xl mx-auto">
        Explore our beautifully crafted country-style designs, perfect for adding a
        touch of rustic charm to any space. From kitchens to living rooms, our
        collection offers a wide range of styles that embody comfort and elegance.
      </p>

      {/* Bedroom Cards */}
      {filteredBedrooms.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {filteredBedrooms.map((bedroom, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={bedroom.img}
                alt={bedroom.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h5 className="text-lg font-semibold">{bedroom.title}</h5>
                <p className="text-gray-600 text-sm mt-1">{bedroom.description}</p>
                <p className="mt-3 font-semibold text-gray-700">Products Used:</p>
                <ul className="list-disc list-inside text-gray-600 text-sm">
                  {bedroom.products.map((product, i) => (
                    <li key={i}>{product}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-6">No products found.</p>
      )}
    </div>
  );
};

export default BedroomCollection;

