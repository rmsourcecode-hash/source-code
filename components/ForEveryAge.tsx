const audiences = [
    {
        title: "For Children",
        icon: "👦",
        benefits: [
            "Builds early nutrition habits",
            "Supports growth and focus",
        ],
    },
    {
        title: "For Adults",
        icon: "👨",
        benefits: [
            "Consistent daily nutrition",
            "No planning, no skipping",
        ],
    },
    {
        title: "For Seniors",
        icon: "👴",
        benefits: [
            "Easy to digest",
            "Gentle, soaked ingredients",
        ],
    },
];

export function ForEveryAge() {
    return (
        <section
            className="section-container py-16 md:py-24"
            aria-labelledby="every-age-heading"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2
                        id="every-age-heading"
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        For Every Age.{" "}
                        <span className="text-leaf-green">For Every Home.</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {audiences.map((audience) => (
                        <div
                            key={audience.title}
                            className="step-card p-8 rounded-2xl text-center"
                        >
                            <div className="text-5xl mb-4">{audience.icon}</div>
                            <h3 className="text-xl font-bold mb-4">{audience.title}</h3>
                            <ul className="space-y-2">
                                {audience.benefits.map((benefit) => (
                                    <li
                                        key={benefit}
                                        className="flex items-center justify-center gap-2 opacity-80"
                                    >
                                        <span className="text-leaf-green">✓</span>
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
