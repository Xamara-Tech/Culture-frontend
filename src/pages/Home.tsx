
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Tabs";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
    
      <main className="flex-grow">
        <Hero />
        <About />
        <Services/>
      </main>
     
    </div>
  );
}