const steps = [
    {
        number: "1",
        title: "Open your daily pack",
        description: "Tear open one pre-portioned sachet",
        icon: "✂️",
    },
    {
        number: "2",
        title: "Soak overnight",
        description: "Add to water, refrigerate for 6-8 hours",
        icon: "💧",
    },
    {
        number: "3",
        title: "Consume fresh every morning",
        description: "Enjoy your nutritious morning boost",
        icon: "🌅",
    },
];

export function HowItWorks() {
    return (
        <section
            id="how-it-works"
            className="section-container py-16 md:py-24"
            aria-labelledby="how-it-works-heading"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2
                        id="how-it-works-heading"
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        A Simple <span className="text-leaf-green">Daily Ritual</span>
                    </h2>
                    <p className="text-lg opacity-70 max-w-2xl mx-auto">
                        Designed to fit seamlessly into any household routine.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div key={step.number} className="relative">
                            <div className="step-card p-8 rounded-2xl text-center h-full">
                                {/* Icon */}
                                <div className="text-4xl mb-4">{step.icon}</div>

                                {/* Step number */}
                                <div className="step-number w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                                    {step.number}
                                </div>

                                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                <p className="opacity-70">{step.description}</p>
                            </div>

                            {/* Connector line (hidden on last item) */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 step-connector" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
