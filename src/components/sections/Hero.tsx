import React from "react";

const Hero = () => {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('src/assets/Kalenjin.jpeg')" }}
    >
      <div className="container mx-auto px-4 text-left">
        <div className="bg-black bg-opacity-50 p-8 rounded-lg max-w-lg">
          <h1 className="text-4xl font-bold text-white mb-4">
            Discover Kenya's Rich Cultural Heritage
          </h1>
          <p className="text-lg text-gray-200 mb-6">
            Explore the diverse traditions, customs, and stories of Kenya's
            vibrant ethnic communities. Journey through time and experience the
            beauty of our cultural mosaic.
          </p>
          <h2 className="text-xl font-semibold text-white mb-4">
            AI-Powered Cultural Discovery
          </h2>
          <div className="flex items-center bg-white rounded-full shadow-md overflow-hidden">
            <input
              type="text"
              placeholder="Ask anything about Kenyan cultures..."
              className="flex-grow px-4 py-2 text-gray-700 focus:outline-none"
            />
            <button className="bg-green-600 text-white px-6 py-2 hover:bg-green-700">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;