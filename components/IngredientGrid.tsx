const ingredientCategories = [
    {
        title: "Brain & Growth",
        icon: "🧠",
        color: "leaf-green",
        ingredients: [
            { name: "Walnuts", benefit: "Omega-3 for cognitive function" },
            { name: "Almonds", benefit: "Vitamin E for brain health" },
        ],
    },
    {
        title: "Energy & Immunity",
        icon: "⚡",
        color: "kraft-brown",
        ingredients: [
            { name: "Dates", benefit: "Natural energy boost" },
            { name: "Pumpkin Seeds", benefit: "Zinc for immunity" },
        ],
    },
    {
        title: "Heart & Digestion",
        icon: "❤️",
        color: "deep-green",
        ingredients: [
            { name: "Sunflower Seeds", benefit: "Heart-healthy fats" },
            { name: "Cashews", benefit: "Magnesium for wellness" },
        ],
    },
];

export function IngredientGrid() {
    return (
        <section
            id="ingredients"
            className="section-container py-16 md:py-24"
            aria-labelledby="ingredients-heading"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2
                        id="ingredients-heading"
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        What's <span className="text-leaf-green">Inside</span>
                    </h2>
                    <p className="text-lg opacity-70 max-w-2xl mx-auto">
                        Six premium ingredients, thoughtfully grouped for daily wellness.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {ingredientCategories.map((category) => (
                        <div
                            key={category.title}
                            className="step-card p-6 rounded-2xl"
                        >
                            <div className="text-4xl mb-3">{category.icon}</div>
                            <h3 className="text-xl font-bold mb-4 text-deep-green">
                                {category.title}
                            </h3>
                            <div className="space-y-4">
                                {category.ingredients.map((ingredient) => (
                                    <div
                                        key={ingredient.name}
                                        className="ingredient-tile p-4 rounded-xl"
                                    >
                                        <div className="font-semibold mb-1">
                                            {ingredient.name}
                                        </div>
                                        <div className="text-sm opacity-70">
                                            {ingredient.benefit}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
