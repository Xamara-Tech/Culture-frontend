
import {Card} from '@/components/ui/rotate-card';

export default function Services() {

    const features = [
        {
            title: 'Agikuyu',
           
            imageUrl: "src/assets/Agikuyu1.jpeg",
            rotateInfo: (
                <>
                    <p className="text-sm text-muted-foreground"> Learn about Kenya's largest ethnic group</p>
                    <p className="text-sm text-muted-foreground"> Their role in the Mau Mau rebellion</p>
                    <p className="text-sm text-muted-foreground"> Their influence on modern politics and economy</p>
                </>
            )
        },
        {
          
            title: 'Meru',
           
            imageUrl: "src/assets/Ameru.jpeg",
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
            
            title: 'Luhya',
            
            imageUrl: "src/assets/Luhya1.jpeg",
            rotateInfo: (
                <>
                    <p className="text-sm text-muted-foreground"> Explore their rich oral traditions</p>
                    <p className="text-sm text-muted-foreground"> Isukuti drumming</p>
                    <p className="text-sm text-muted-foreground"> Strong clan systems that promote collective identity.</p>
                </>
            )
        },
        {
           
            title: 'Mijikenda',
           
            imageUrl: "src/assets/Mijikenda1.jpeg",
            rotateInfo: (
                <>
                    <p className="text-sm text-muted-foreground">Understand their kaya forests.</p>
                    <p className="text-sm text-muted-foreground">matrilineal customs</p>
                    <p className="text-sm text-muted-foreground">contributions to Swahili coastal culture.</p>
                </>
            )
        },
        {
            
            title: 'Taita',
            
            imageUrl: "src/assets/Taita.jpg",
            rotateInfo: (
                <>
                    <p className="text-sm text-muted-foreground"> Learn about their intricate clan roles</p>
                    <p className="text-sm text-muted-foreground">traditional healing practices,</p>
                    <p className="text-sm text-muted-foreground">unique position in Kenya’s southeastern highlands.</p>
                </>
            )
        },
        {
          
            title: 'Somali',
            imageUrl: "src/assets/Somali1.jpeg",
            rotateInfo: (
                <>
                    <p className="text-sm text-muted-foreground">Discover how they blend Islamic traditions with pastoral life</p>
                    <p className="text-sm text-muted-foreground"> role in cross-border commerce and politics.</p>
                    <p className="text-sm text-muted-foreground">Their influence on Kenya's northeastern region.</p>
                </>
            )
        },
        {
            
            title: 'Kalenjin',
           
            imageUrl: "src/assets/Kalenjin.jpeg",
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
          
            title: 'Luo',
           
            imageUrl: "src/assets/Luo1.jpeg",
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
            {/* Tabs Section */}
            <section id="tabs" className="px-6 py-19 md:px-12 ">
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