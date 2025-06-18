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
      className="shadow-lg h-screen bg-cover bg-center flex items-center relative"
      style={{
      backgroundImage: "url('src/assets/Hero1.jpg')",
      }}
    >
      {/* Overlay for darkening the image */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1
        className="text-5xl font-extrabold mb-4"
        style={{
          color: "#FFFFFF",
          fontFamily: "Roboto, sans-serif",
        }}
        >
        Discover Kenya's Rich Cultural Heritage
        </h1>
        <p
        className="text-[20px] mb-6 max-w-lg mx-auto text-center"
        style={{
          color: "#FFFFFF",
          fontFamily: "Roboto, sans-serif",
          fontWeight: "400",
        }}
        >
        Explore the diverse traditions, customs, and stories of Kenya's vibrant ethnic communities.
        <br />
        Journey through time and experience the beauty of our cultural
        mosaic.
        </p>

       
       
      </div>
    </section>
  );
};

export default Hero;

 //Set-ExecutionPolicy
 //-Scope Process -ExecutionPolicy Bypass
