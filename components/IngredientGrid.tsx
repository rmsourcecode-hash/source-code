export function IngredientGrid() {
    return (
        <section
            id="ingredients"
            className="section-container py-12 md:py-20"
            aria-labelledby="ingredients-heading"
        >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 md:mb-12">
                    <h2
                        id="ingredients-heading"
                        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4"
                    >
                        What's <span className="text-leaf-green">Inside</span>
                    </h2>
                </div>

                <div className="brand-story-card p-6 md:p-10 rounded-2xl">
                    <div className="space-y-4 md:space-y-6 text-base md:text-lg opacity-90 leading-relaxed text-center">
                        <p>
                            Each sachet contains a thoughtfully balanced selection of
                            premium nuts and seeds — chosen not for trends, but for
                            everyday nourishment.
                        </p>
                        <p>
                            Soaking makes them gentler on digestion and easier to absorb.
                        </p>

                        {/* Benefit-led highlights */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 md:pt-6">
                            <div className="text-center p-3 md:p-4 rounded-xl bg-cream">
                                <div className="text-xl md:text-2xl mb-1">🧠</div>
                                <div className="text-sm font-medium opacity-80">Focus</div>
                            </div>
                            <div className="text-center p-3 md:p-4 rounded-xl bg-cream">
                                <div className="text-xl md:text-2xl mb-1">⚡</div>
                                <div className="text-sm font-medium opacity-80">Energy</div>
                            </div>
                            <div className="text-center p-3 md:p-4 rounded-xl bg-cream">
                                <div className="text-xl md:text-2xl mb-1">❤️</div>
                                <div className="text-sm font-medium opacity-80">Comfort</div>
                            </div>
                            <div className="text-center p-3 md:p-4 rounded-xl bg-cream">
                                <div className="text-xl md:text-2xl mb-1">🌱</div>
                                <div className="text-sm font-medium opacity-80">Daily care</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
