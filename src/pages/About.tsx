
import AboutSection from "@/components/sections/AboutSection";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Tabs";
// import Footer from "@/components/sections/Footer";
// import Hero from "@/components/sections/Hero";

export default function About() {
    return (
        <div className="min-h-screen flex flex-col">

            <main className="flex-grow">
                <Hero/>
                <AboutSection />
                <Services title="Cultures Covered"/>
                <Footer/>               
              
            </main>

        </div>
    );
}

