const About = () => {
    return (
        <section className="px-6 md:px-12 py-16 text-black bg-white">
            <div
                className="text-3xl text-center md:text-4xl font-bold mb-12 tracking-wide"
                style={{ fontFamily: "Merriweather, Playfair Display" }}
            >
                <span className="inline-block border-b-4 border-yellow-400 pb-2">
                    About Us
                </span>
            </div>
            <div
                className="max-w-5xl mx-auto text-left"
                style={{ fontFamily: "Merriweather, Playfair Display" }}
            >
                <p className="text-black text-base md:text-lg leading-relaxed tracking-wide mb-6">
                    <strong>Learn It</strong> is a cutting-edge AI-powered website designed to help users explore and understand the rich traditions of cultures from around the world. With its intuitive interface and advanced search capabilities, Learn It makes it easy to access accurate, well-organized information about cultural practices, rituals, festivals, clothing, cuisine, and more. Whether you're a student, traveler, or simply curious about global customs, the platform serves as a valuable educational tool for discovering how communities preserve their unique heritage.
                </p>

                <p className="text-black text-base md:text-lg leading-relaxed tracking-wide mb-6">
                    One of the standout features of Learn It is its AI-driven recommendation engine. As users search for information on a specific culture or tradition, the website suggests related customs, historical contexts, and cross-cultural comparisons to deepen their understanding. The AI also curates content from verified sources, ensuring that the information provided is both authentic and respectful of the cultures being represented. This makes Learn It not only informative but also a responsible platform for cultural exploration.
                </p>

                <p className="text-black text-base md:text-lg leading-relaxed tracking-wide">
                    Beyond individual learning, Learn It promotes intercultural awareness and appreciation. By highlighting both the diversity and commonalities among global traditions, it encourages users to see the value in cultural exchange and empathy. As the world becomes increasingly interconnected, Learn It plays a crucial role in educating people about traditions that shape identity and community, fostering a deeper sense of global citizenship and respect for cultural diversity.
                </p>
            </div>
        </section>
    );
};

export default About;
  