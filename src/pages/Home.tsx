
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Tabs";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
    
      <main className="flex-grow">
        <Hero />
        <Services title="Major Kenyan tribes"/>
        <Footer />
      </main>
     
    </div>
  );
}