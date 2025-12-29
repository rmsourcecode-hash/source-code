export function BrandStory() {
    return (
        <section
            className="section-container py-16 md:py-24"
            aria-labelledby="brand-story-heading"
        >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="brand-story-card p-8 md:p-12 rounded-2xl">
                    <h2
                        id="brand-story-heading"
                        className="text-3xl md:text-4xl font-bold mb-6"
                    >
                        Why <span className="text-leaf-green">Source Code Nutrition</span>
                    </h2>

                    <div className="space-y-6 text-lg opacity-90 leading-relaxed">
                        <p>
                            We believe in the power of small, repeatable habits. Not quick fixes.
                            Not miracle cures. Just consistent, thoughtful nutrition that becomes
                            part of your daily life.
                        </p>
                        <p>
                            Every sachet is carefully portioned with premium ingredients—nothing
                            more, nothing less. No unnecessary processing. No shortcuts. Just
                            what your body needs, ready to soak and enjoy.
                        </p>
                        <p>
                            Source Code Nutrition was created for families who want to build
                            healthier habits without adding complexity to their mornings.
                            One simple ritual. One small commitment. A lifetime of benefits.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
