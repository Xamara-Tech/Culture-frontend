import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('/header_img.png')" }}
    >
      <div className="container mx-auto px-4 pl-12 text-left">
        <h1
          className="text-[48px] font-bold mb-4"
          style={{
            color: "#E6F7FF",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Transform Your Digital Presence
        </h1>
        <h2
          className="text-[15px] mb-4"
          style={{
            color: "#E6F7FF",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "400",
          }}
        >
          Creating stunning digital experiences with our expert team.
        </h2>
        <Button className="mt-4 w-60 bg-blue-600 text-white hover:bg-blue-700">
          View Project
        </Button>
      </div>
    </section>
  );
};

export default Hero;

