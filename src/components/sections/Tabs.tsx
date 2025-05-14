
import { useNavigate } from 'react-router-dom';
import { Card } from '../ui/card';
export default function Services() {
    const navigate = useNavigate();
//details that will be on the tab
    const features = [
        {
            title: 'Agikuyu',
            imageUrl: "src/assets/Agikuyu1.jpeg",
            searchPath: "/search/agikuyu",

        },
        {
          
            title: 'Meru',
            imageUrl: "src/assets/Ameru.jpeg",
            searchPath: "/search/Ameru",
        },
        {
            
            title: 'Luhya', 
            imageUrl: "src/assets/Luhya1.jpeg",
            searchPath: "/search/Aluhya",
        },
        {
           
            title: 'Mijikenda',
            imageUrl: "src/assets/Mijikenda1.jpeg",
            searchPath: "/search/Mijikenda",
        },
        {
            
            title: 'Taita', 
            imageUrl: "src/assets/Taita.jpg",
            searchPath: "/search/Taita",
        },
        {
          
            title: 'Somali',
            imageUrl: "src/assets/Somali1.jpeg",
            searchPath: "/search/Somali",
        },
        {
            
            title: 'Kalenjin',
            imageUrl: "src/assets/Kalenjin.jpeg",
            searchPath: "/search/Kalenjin",
        },
        {
          
            title: 'Luo',
            imageUrl: "src/assets/Luo1.jpeg",
            searchPath: "/search/Luo",
        },
    ];

    return(
        <>
            {/* Tabs Section */}
            <section id="tabs" className="px-6 py-6 md:px-12 ">
  <div className="mx-auto max-w-7xl">
    <h2 className="mb-20 text-center text-3xl font-bold md:text-4xl">Major Kenyan Tribes</h2>
    <div className="grid gap-8 grid-cols-2 md:grid-cols-4">
      {features.map((feature, index) => (
        <Card
          key={index}
          className="min-h-[250px] backdrop-blur-sm transition-transform duration-300 hover:scale-105" // Added hover effect
          onClick={() => {
            navigate(feature.searchPath);
          }}
        >
          <div
            className="h-full flex flex-col justify-center items-left text-left bg-white/10 p-6 rounded-lg"
            style={{
              backgroundImage: `url(${feature.imageUrl})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            <div className="relative h-full flex flex-col justify-end items-start text-left bg-cover bg-center p-6 rounded-lg">
              <h3 className="absolute bottom-0 left-0 text-white text-2xl font-bold m-4">{feature.title}</h3>
            </div>
          </div>
        </Card>
      ))}
    </div>
    
      </div>
</section>
        </>
    );
}