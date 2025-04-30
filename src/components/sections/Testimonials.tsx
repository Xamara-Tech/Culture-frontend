import { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Button } from '@/components/ui/button';
import { Globe, Smartphone, ChartLine} from 'lucide-react';


export default function Testimonials() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    const slides = [
        {
            Description: ' "working with Xamara was a great experience. They helped me build my website from scratch and were very responsive to my needs. I would highly recommend them to anyone looking for a web development company." ',
            Name: 'John Doe',
            Position: 'CEO, XYZ Company',
            Image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png',
        },
        {
            Description: '"Xamara helped me build my mobile app from the ground up. They were very professional and delivered on time. I would definitely work with them again."',
            Name: 'Jane Smith',
            Position: 'CTO, ABC Company',
            Image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png',
        },
        {
            Description: '"I was very impressed with the quality of work that Xamara delivered. They helped me build a data driven digital solution that has helped my business grow."',
            Name: 'Alice Johnson',
            Position: 'CMO, DEF Company',
            Image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png',
        },
    ];

    useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap());

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    return (
        <>
            {/* Carousel Section */}
            <section id="testimonial" className="px-6 py-19 md:px-12 bg-sky-100/60">
                <div className="mx-auto max-w-7xl">
                    <h2 className="mb-12 text-center text-blue-950 text-3xl font-bold md:text-4xl">What Our Clients Say</h2>
                    <div className="relative mx-auto w-full max-w-4xl">
                        <Carousel
                            setApi={setApi} 
                            plugins={[
                                Autoplay({
                                    delay: 5000,
                                }),
                            ]}
                            opts={{
                                loop: true,
                                align: 'start',
                            }}
                        >
                            <CarouselContent className="-ml-4">
                                {slides.map((slide, index) => (
                                    <CarouselItem key={index} className="basis-full pl-4">
                                        <div className="flex flex-col items-center justify-center p-9 rounded-lg shadow-md">
                                            <p className="mt-4 text-center text-2xl text-gray-900 max-w-[500px] min-h-[150px]">{slide.Description}</p>
                                            <div className="flex items-center mt-3">
                                                <img src={slide.Image} alt={slide.Name} className="h-15 w-15 rounded-full mr-4" />
                                                <div className="flex flex-col justify-center">
                                                    <p className="text-lg font-semibold">{slide.Name}</p>
                                                    <p className="text-base text-blue-900">{slide.Position}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>

                        {/* Slide Indicators/Dots */}
                        <div className="flex justify-center gap-2 mt-4">
                            {Array.from({ length: count }).map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-3 h-3 rounded-full transition-all ${current === index 
                                        ? "bg-blue-600 w-6" 
                                        : "bg-gray-300 hover:bg-gray-400"}`} 
                                    onClick={() => api?.scrollTo(index)}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}