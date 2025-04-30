import { Globe, Smartphone, ChartLine } from 'lucide-react';
import {Card} from '@/components/ui/rotate-card';

export default function Services() {

    const features = [
        {
            icon: <Globe className="h-16 w-16" />,
            title: 'Agikuyu',
            description: 'Central highland farmers, entrepreneurs, resilient culture',
          
            rotateInfo: (
                <>
                    <p className="text-sm text-muted-foreground"> Learn about Kenya's largest ethnic group</p>
                    <p className="text-sm text-muted-foreground"> Their role in the Mau Mau rebellion</p>
                    <p className="text-sm text-muted-foreground"> Their influence on modern politics and economy</p>
                </>
            )
        },
        {
            icon: <Globe className="h-16 w-16" />,
            title: 'Meru',
            description: ' Eastern Mount Kenya, unity-driven community',
          
            rotateInfo: (
                <>
                    <p className="text-sm text-muted-foreground">Discover the Njuri Ncheke council</p>
                    <p className="text-sm text-muted-foreground">Their cultural governance</p>
                    <p className="text-sm text-muted-foreground">How Meru traditions shape community life.

</p>
                </>
            )
        },
        {
            icon: <Globe className="h-16 w-16" />,
            title: 'Luhya',
            description: 'Western Kenya, vibrant music, unity',
          
            rotateInfo: (
                <>
                    <p className="text-sm text-muted-foreground"> Explore their rich oral traditions</p>
                    <p className="text-sm text-muted-foreground"> Isukuti drumming</p>
                    <p className="text-sm text-muted-foreground"> Strong clan systems that promote collective identity.</p>
                </>
            )
        },
        {
            icon: <Smartphone className="h-16 w-16" />,
            title: 'Mijikenda',
            description: 'Coastal Nine Tribes, sacred kaya',
         
            rotateInfo: (
                <>
                    <p className="text-sm text-muted-foreground">Understand their kaya forests.</p>
                    <p className="text-sm text-muted-foreground">matrilineal customs</p>
                    <p className="text-sm text-muted-foreground">contributions to Swahili coastal culture.</p>
                </>
            )
        },
        {
            icon: <ChartLine className="h-16 w-16" />,
            title: 'Taita',
            description: 'Hillside dwellers, livestock, spiritual traditions',
           
            rotateInfo: (
                <>
                    <p className="text-sm text-muted-foreground"> Learn about their intricate clan roles</p>
                    <p className="text-sm text-muted-foreground">traditional healing practices,</p>
                    <p className="text-sm text-muted-foreground">unique position in Kenya’s southeastern highlands.</p>
                </>
            )
        },
        {
            icon: <Globe className="h-16 w-16" />,
            title: 'Somali',
            description: ' Nomadic traders, Islamic, northeastern heritage',
          
            rotateInfo: (
                <>
                    <p className="text-sm text-muted-foreground">Discover how they blend Islamic traditions with pastoral life</p>
                    <p className="text-sm text-muted-foreground"> role in cross-border commerce and politics.</p>
                    <p className="text-sm text-muted-foreground">Their influence on Kenya's northeastern region.</p>
                </>
            )
        },
        {
            icon: <Globe className="h-16 w-16" />,
            title: 'Kalenjin',
            description: 'Highland athletes, pastoralists, age sets',
          
            rotateInfo: (
                <>
                    <p className="text-sm text-muted-foreground">Famous for producing world-class runners</p>
                    <p className="text-sm text-muted-foreground">They have a rich age-set system and a deep-rooted oral history.

</p>
                    <p className="text-sm text-muted-foreground">Explore their unique cultural practices.</p>
                </>
            )
        },
        {
            icon: <Globe className="h-16 w-16" />,
            title: 'Luo',
            description: 'Lakeside Nilotes, fishing, intellectual tradition',
          
            rotateInfo: (
                <>
                    <p className="text-sm text-muted-foreground">Known for their love of education,</p>
                    <p className="text-sm text-muted-foreground">rich music culture (like benga), </p>
                    <p className="text-sm text-muted-foreground">contribution to Kenya’s political landscape.</p>
                </>
            )
        },
    ];

    return(
        <>
            {/* Services Section */}
            <section id="service" className="px-6 py-19 md:px-12 bg-sky-100">
                <div className="mx-auto max-w-7xl">
                    <h2 className="mb-20 text-center text-3xl font-bold md:text-4xl">Major Kenyan Tribes</h2>
                    <div className="grid gap-8 md:grid-cols-4">
                    {features.map((feature, index) => (
                        <Card
                        key={index}
                        className="min-h-[250px]  backdrop-blur-sm" // Added min-height
                        rotateInfo={
                            <div className="h-full flex flex-col justify-center items-left text-left">
                            {feature.rotateInfo}
                            </div>
                        }
                        >
                        <div className="h-full flex flex-col justify-center items-left text-left bg-white/10 p-6 rounded-lg">
                            <div className="flex">{feature.icon}</div>
                            <h3 className="text-2xl font-bold mt-4">{feature.title}</h3>
                            <p className="text-gray-500 text-lg mt-2 px-1">{feature.description}</p>
                            
                        </div>
                        </Card>
                    ))}
                    </div>
                  
                </div>
            </section>
        </>
    );
}