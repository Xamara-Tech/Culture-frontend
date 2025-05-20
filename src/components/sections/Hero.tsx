/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Button } from "../ui/button";


import apiClient from "../../services/apiClient";



const Hero = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]); // you can type this if needed


  const handleSearch = async () => {
    try {
      const response = await apiClient.post(
        `/query/`,
        { query_text: query }, // Send query_text in the request body
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`, // Include the access token
          },
        }
      );
      setResults(response.data);
    } catch (error: any) {
      console.error("Search failed:", error.response?.data || error.message);
    }
  };


  return (
    <section
      className="h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('src/assets/Hero.jpeg')" }}
    >
      <div className="container mx-auto px-4 text-center">
        <div className="bg-black bg-opacity-50 p-8 rounded-lg max-w-lg">
          <h1
            className="text-4xl font-extrabold mb-4"
            style={{
              color: "#FFFFFF",
              fontFamily: "Roboto, sans-serif",
            }}
          >
            Discover Kenya's Rich Cultural Heritage
          </h1>
          <p
            className="text-[15px] mb-6 max-w-lg mx-auto text-center"
            style={{
              color: "#FFFFFF",
              fontFamily: "Roboto, sans-serif",
              fontWeight: "400",
            }}
          >
            Explore the diverse traditions, customs, and stories of Kenya's
            vibrant ethnic communities.
            <br />
            Journey through time and experience the beauty of our cultural
            mosaic.
          </p>

          <div className="bg-white p-4 rounded-2xl shadow-lg w-full max-w-2xl mx-auto">
            <h2
              className="text-[18px] font-semibold mb-4"
              style={{
                fontFamily: "Roboto, sans-serif",
                color: "#333333",
              }}
            >
              AI Powered Kenyan Cultural Discovery
            </h2>
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Ask anything about Kenyan cultures..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button
                className="px-6 py-3 bg-green-600 text-white text-lg font-semibold hover:bg-green-700 rounded-full"
                onClick={handleSearch}
              >
                Search
              </Button>
            </div>
          </div>

          {/* Display results */}
          {results.length > 0 && (
            <div className="bg-white mt-6 p-4 rounded-lg text-left">
              <h3 className="text-lg font-semibold mb-2">Search Results:</h3>
              <ul className="list-disc list-inside space-y-1">
                {results.map((item, index) => (
                  <li key={index}>{item.name || item.title}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
