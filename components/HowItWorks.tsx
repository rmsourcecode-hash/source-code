const steps = [
    {
        number: "1",
        title: "Open your daily pack",
        icon: "✂️",
    },
    {
        number: "2",
        title: "Soak overnight",
        icon: "💧",
    },
    {
        number: "3",
        title: "Consume fresh every morning",
        icon: "🌅",
    },
];

export function HowItWorks() {
    return (
        <section
            id="how-it-works"
            className="section-container py-12 md:py-20"
            aria-labelledby="how-it-works-heading"
        >
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 md:mb-12">
                    <h2
                        id="how-it-works-heading"
                        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4"
                    >
                        A Simple <span className="text-leaf-green">Daily Ritual</span>
                    </h2>
                    <p className="text-base md:text-lg opacity-70 max-w-xl mx-auto">
                        Designed to blend seamlessly into your routine.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {steps.map((step) => (
                        <div key={step.number} className="text-center">
                            <div className="step-card p-6 md:p-8 rounded-2xl h-full">
                                {/* Icon */}
                                <div className="text-3xl md:text-4xl mb-3 md:mb-4">{step.icon}</div>

                                {/* Step number */}
                                <div className="step-number w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-sm md:text-lg font-bold mx-auto mb-3 md:mb-4">
                                    {step.number}
                                </div>

                                <h3 className="text-lg md:text-xl font-semibold">{step.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
