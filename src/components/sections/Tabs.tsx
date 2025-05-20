import { useNavigate } from 'react-router-dom';
import { Card } from '../ui/card';

export default function Services() {
  const navigate = useNavigate();

  const features = [
    { title: 'Agikuyu', imageUrl: "src/assets/Agikuyu1.jpeg", searchPath: "/search/agikuyu" },
    { title: 'Meru', imageUrl: "src/assets/Ameru.jpeg", searchPath: "/search/Ameru" },
    { title: 'Luhya', imageUrl: "src/assets/Luhya1.jpeg", searchPath: "/search/Aluhya" },
    { title: 'Mijikenda', imageUrl: "src/assets/Mijikenda1.jpeg", searchPath: "/search/Mijikenda" },
    { title: 'Taita', imageUrl: "src/assets/Taita.jpg", searchPath: "/search/Taita" },
    { title: 'Somali', imageUrl: "src/assets/Somali1.jpeg", searchPath: "/search/Somali" },
    { title: 'Kalenjin', imageUrl: "src/assets/Kalenjin.jpeg", searchPath: "/search/Kalenjin" },
    { title: 'Luo', imageUrl: "src/assets/Luo1.jpeg", searchPath: "/search/Luo" },
  ];

  return (
    <section
      id="tabs"
      className="md:px-12 bg-[url('/tribal4.jpg')] bg-repeat bg-center bg-cover py-12 px-6"
    >
      <div className="mx-auto max-w-7xl ">
        <h2
          className="mb-20 text-center text-3xl font-bold md:text-4xl"
          style={{
            color: "#FFFFFF",
            fontFamily: "Merriweather, Playfair Display",
          }}
        >
          <span className="inline-block border-b-[3px] border-yellow-400 pb-2 px-4">
            Major Kenyan Tribes
          </span>
        </h2>

        <div className="grid gap-8 grid-cols-2 md:grid-cols-4">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="min-h-[250px] transition-transform duration-300 transform hover:scale-105 cursor-pointer shadow-md shadow-black/30 rounded-xl overflow-hidden"
              onClick={() => navigate(feature.searchPath)}
            >
              <div
                className="relative h-full flex items-end bg-cover bg-center"
                style={{ backgroundImage: `url(${feature.imageUrl})` }}
              >
                <div className="absolute inset-0"></div>
                <h3 className="relative z-10 text-white text-2xl font-bold p-4" style={{ fontFamily: "Merriweather, Playfair Display" }}>
                  {feature.title}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
