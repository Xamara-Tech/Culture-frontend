
import AboutUs from "@/components/sections/AboutUs";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Tabs";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
    
      <main className="flex-grow">
        <Hero />
        <Services/>
        <AboutUs />
      </main>
     
    </div>
  );
}