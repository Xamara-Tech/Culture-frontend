import { Card } from '@/components/ui/card';

export default function Process() {
    const steps = [
        {
            number: 1,
            title: 'Consultation & Discovery',
            description: 'We understand your needs and goals and brainstorm the best approach.',
        },
        {
            number: 2,
            title: 'Design & Development',
            description: 'We create tailored  solutions with seamless UI/UX.',
        },
        {
            number: 3,
            title: 'Launch & Support',
            description: 'We deploy, optimise, and ensure long term success',
        },
    ];

    return(
        <>
            {/* Process Section */}
            <section id="process" className="px-6 py-16 md:px-12 bg-white">
                <div className="mx-auto max-w-7xl">
                    <h2 className="mb-20 text-center text-blue-950 text-3xl font-bold md:text-4xl">Our Process</h2>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {steps.map((step, index) => {
                        const cardStyles = [
                            { bg: "bg-blue-800"},
                            { bg: "bg-blue-900"},
                            { bg: "bg-blue-950"}
                        ];
                        
                        // Get the style for this card
                        const style = cardStyles[index];
                        
                        return (
                            <Card
                                key={index}
                                className="min-h-[250px] backdrop-blur-sm"
                            >
                                <div className={`h-full flex flex-col justify-center items-center text-center ${style.bg} p-3 rounded-lg`}>
                                    {/* Number Circle */}
                                    <div className="font-bold text-blue-950 rounded-full bg-white border-4 flex items-center justify-center font-mono h-20 w-20 text-3xl p-6">
                                        {step.number}
                                    </div>
                                    <h3 className={`text-2xl font-bold mt-2 text-white`}>{step.title}</h3>
                                    <p className={`mt-2 px-4 text-white`}>{step.description}</p>
                                </div>
                            </Card>
                        );
                    })}
                    </div>
                </div>
            </section>
        </>
    );
}