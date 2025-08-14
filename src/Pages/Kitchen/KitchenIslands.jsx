import React from "react";

const sofas = [
  {
    name: "Modern",
    price: "$1,200",
    img: "/assets/images/kitchenisland1.jpg",
  },
  {
    name: "Classic ",
    price: "$980",
    img: "/assets/images/kitchenisland2.jpg",
  },
  {
    name: "Minimalist ",
    price: "$1,050",
    img: "/assets/images/kitchenisland.jpg",
  },
  {
    name: "Luxury",
    price: "$1,500",
    img: "/assets/images/kitchenisland3.jpg",
  },
];

export default function Sofas() {
  return (
    <div className="bg-[#faf9f7]">
      {/* Hero Banner */}
      <div className="relative h-[500px] flex items-center justify-center text-center">
        <img
          src="/assets/images/kitchen3.jpg"
          alt="Sofas Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
          Elegant kitchen island and carts Collection
        </h1>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          Discover Our kitchen island and carts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {sofas.map((sofa, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={sofa.img}
                alt={sofa.name}
                className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {sofa.name}
                </h3>
                <p className="text-gray-600 mt-2">{sofa.price}</p>
                <button className="mt-4 px-5 py-2 bg-[#0f172a] text-white rounded-lg hover:bg-[#1e293b] transition-colors">
                 Interior Design kitchen island
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
