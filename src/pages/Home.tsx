
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
    
      <main className="flex-grow">
        <Hero />
        <Services/>
      </main>
     
    </div>
  );
}