import { useState } from "react";
import { useParams } from "react-router-dom";

export default function SearchPage() {
  const { tribe } = useParams();
  const [activeTab, setActiveTab] = useState("history"); 

  
  const tabs = [
    { id: "birth", label: "Birth", content: `Learn about the birth ceremony of the ${tribe}.` },
    { id: "Adolescence", label: "Adolescence", content: `Explore the inititation practices in ${tribe}.` },
    { id: "marriage", label: "Marriage", content: `Learn about the marriage customs of the ${tribe}.` },
    { id: "Death", label: "Death", content: `Discover the burial practices in the ${tribe}.` },
    { id: "Food", label: "Food", content: `Learn about th cuisines in the  ${tribe} community.` },
    
  ];

  return (
    <div className="p-6 bg-black text-white min-h-screen">
      <button
      onClick={() => window.history.back()}
      className="mb-4 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
      >
      Back
      </button>
      <div className="flex items-center mb-2">
      <h1 className="text-3xl font-bold">Discover More About {tribe}</h1>
      </div>

       {/* Search Bar */}
       <div className="flex items-center bg-white rounded-full shadow-md overflow-hidden mb-6">
        <input
          type="text"
          placeholder={`Search about ${tribe} ${activeTab}...`}
          className="flex-grow px-4 py-2 text-gray-700 focus:outline-none"
        />
        <button className="bg-green-600 text-white px-6 py-2 hover:bg-green-700">
          Search
        </button>
      </div>


      {/* Tabs Navigation */}
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-6">
  {tabs.map((tab) => (
    <div
      key={tab.id}
      onClick={() => setActiveTab(tab.id)}
      className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
        activeTab === tab.id
          ? "bg-green-600 text-white shadow-lg"
          : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
      }`}
    >
      <h3 className="text-lg font-bold mb-2">{tab.label}</h3>
      <p className="text-sm">
        {tab.content.substring(0, 50)}... {/* Short preview of the content */}
      </p>
    </div>
  ))}
</div>

     

      {/* Tab Content */}
      <div className="text-lg">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
}