import { Globe, Smartphone, ChartLine } from 'lucide-react';
import {Card} from '@/components/ui/rotate-card';

export default function Services() {

    const features = [
        {
            icon: <Globe className="h-16 w-16" />,
            title: 'Web Development',
            description: 'Custom websites that drive results.',
            link: '/services/web-development',
            rotateInfo: (
                <>
                    <p className="text-sm text-muted-foreground">We build custom websites that are fast, secure, and easy to use.</p>
                    <p className="text-sm text-muted-foreground">Our team of experts will work with you to create a website that meets your needs.</p>
                    <p className="text-sm text-muted-foreground">We use the latest technologies and best practices to ensure your website is up to date.</p>
                </>
            )
        },
        {
            icon: <Smartphone className="h-16 w-16" />,
            title: 'App Development',
            description: 'Native and cross-platform apps that work on all devices.',
            link: '/services/app-development',
            rotateInfo: (
                <>
                    <p className="text-sm text-muted-foreground">We build native and cross-platform apps that work on all devices.</p>
                    <p className="text-sm text-muted-foreground">Our team of experts will work with you to create an app that meets your needs.</p>
                    <p className="text-sm text-muted-foreground">We use the latest technologies and best practices to ensure your app is up to date.</p>
                </>
            )
        },
        {
            icon: <ChartLine className="h-16 w-16" />,
            title: 'Software as a Service',
            description: 'Data driven digital solutions that help you grow your business.',
            link: '/services/saas',
            rotateInfo: (
                <>
                    <p className="text-sm text-muted-foreground">We build data driven digital solutions that help you grow your business.</p>
                    <p className="text-sm text-muted-foreground">Our team of experts will work with you to create a solution that meets your needs.</p>
                    <p className="text-sm text-muted-foreground">We use the latest technologies and best practices to ensure your solution is up to date.</p>
                </>
            )
        },
    ];

    return(
        <>
            {/* Services Section */}
            <section id="service" className="px-6 py-19 md:px-12 bg-sky-100">
                <div className="mx-auto max-w-7xl">
                    <h2 className="mb-20 text-center text-3xl font-bold md:text-4xl">What We Offer?</h2>
                    <div className="grid gap-8 md:grid-cols-3">
                    {features.map((feature, index) => (
                        <Card
                        key={index}
                        className="min-h-[250px] backdrop-blur-sm" // Added min-height
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
                            <a href={feature.link} className="mt-4 text-blue-500 hover:underline">Learn more</a>
                        </div>
                        </Card>
                    ))}
                    </div>
                    {/*section with blue button for schedule a call */}
                    <div className="mt-12 text-center">
                        <a href="/schedule" className="inline-block px-8 py-4 bg-blue-950 text-white text-xl font-medium rounded-full hover:bg-blue-700 transition duration-300">Schedule a Call</a>
                    </div>
                </div>
            </section>
        </>
    );
}