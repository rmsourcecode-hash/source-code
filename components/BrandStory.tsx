export function BrandStory() {
    return (
        <section
            className="section-container py-12 md:py-20"
            aria-labelledby="brand-story-heading"
        >
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="brand-story-card p-6 md:p-10 rounded-2xl">
                    <h2
                        id="brand-story-heading"
                        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-center"
                    >
                        Why <span className="text-leaf-green">Source Code Nutrition</span> Exists
                    </h2>

                    <div className="space-y-4 md:space-y-6 text-base md:text-lg opacity-90 leading-relaxed text-center">
                        <p>
                            We believe health is built through small, repeatable habits —
                            not quick fixes or miracle cures.
                        </p>
                        <p>
                            Every sachet is carefully portioned with premium ingredients.
                            No unnecessary processing. No shortcuts. Just what your body
                            needs, ready to soak and enjoy.
                        </p>
                        <p className="font-medium text-deep-green">
                            Designed for daily use in real homes.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
