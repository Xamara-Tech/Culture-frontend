
import AboutSection from "@/components/sections/AboutSection";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Tabs";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
    
      <main className="flex-grow">
        <Hero />
        <Services title="Major Kenyan tribes"/>
        <AboutSection />
      </main>
     
    </div>
  );
}