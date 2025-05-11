import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('/75cd9027-cb01-4684-87b8-6c261a91c0be.jpeg')" }} // Corrected path
    >
      <div className="container mx-auto px-4 text-center">
        <h1
          className="text-[48px] font-extrabold mb-4"
          style={{
            color: "#FFFFFF",
            fontFamily: "Roboto, sans-serif", // Updated font
          }}
        >
          Discover Kenya's Rich Cultural Heritage
        </h1>
        <p
          className="text-[15px] mb-6 max-w-lg mx-auto text-center"
          style={{
            color: "#FFFFFF",
            fontFamily: "Roboto, sans-serif", // Updated font
            fontWeight: "400",
          }}
        >
          Explore the diverse traditions, customs, and stories of Kenya's vibrant ethnic communities.
          <br />
          Journey through time and experience the beauty of our cultural mosaic.
        </p>
        <div className="bg-white p-4 rounded-2xl shadow-lg w-full max-w-2xl mx-auto">
          <h2
            className="text-[18px] font-semibold mb-4"
            style={{
              fontFamily: "Roboto, sans-serif", // Updated font
              color: "#333333",
            }}
          >
            AI Powered Kenyan Cultural Discovery
          </h2>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Ask anything about Kenyan cultures..."
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button className="px-6 py-3 bg-green-600 text-white text-lg font-semibold hover:bg-green-700 rounded-full">
              Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

