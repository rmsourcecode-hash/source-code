export function PriceComparison() {
    return (
        <section
            id="comparison"
            className="section-container py-12 md:py-20"
            aria-labelledby="comparison-heading"
        >
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-8 md:mb-12">
                    <h2
                        id="comparison-heading"
                        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4"
                    >
                        What <span className="text-leaf-green">₹549</span> Gets You
                    </h2>
                    <p className="text-base md:text-lg opacity-70">
                        Same money. Very different outcome.
                    </p>
                </div>

                {/* Comparison Table */}
                <div className="brand-story-card p-4 md:p-8 rounded-2xl mb-8">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm md:text-base">
                            <thead>
                                <tr className="border-b border-current/10">
                                    <th className="text-left py-3 px-2 md:px-4 font-semibold">Ingredient</th>
                                    <th className="text-center py-3 px-2 md:px-4 font-semibold text-deep-green">
                                        <div className="flex flex-col">
                                            <span>Source Code</span>
                                            <span className="text-xs opacity-70 font-normal">7-Day Pack – ₹549</span>
                                        </div>
                                    </th>
                                    <th className="text-center py-3 px-2 md:px-4 font-semibold opacity-60">
                                        <div className="flex flex-col">
                                            <span>Market</span>
                                            <span className="text-xs opacity-70 font-normal">₹549 worth</span>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-current/5">
                                    <td className="py-3 px-2 md:px-4">Almonds</td>
                                    <td className="py-3 px-2 md:px-4 text-center font-semibold text-leaf-green">56g</td>
                                    <td className="py-3 px-2 md:px-4 text-center opacity-60">~30g</td>
                                </tr>
                                <tr className="border-b border-current/5">
                                    <td className="py-3 px-2 md:px-4">Cashews</td>
                                    <td className="py-3 px-2 md:px-4 text-center font-semibold text-leaf-green">42g</td>
                                    <td className="py-3 px-2 md:px-4 text-center opacity-60">~25g</td>
                                </tr>
                                <tr className="border-b border-current/5">
                                    <td className="py-3 px-2 md:px-4">Walnuts</td>
                                    <td className="py-3 px-2 md:px-4 text-center font-semibold text-leaf-green">49g</td>
                                    <td className="py-3 px-2 md:px-4 text-center opacity-60">~25g</td>
                                </tr>
                                <tr className="border-b border-current/5">
                                    <td className="py-3 px-2 md:px-4">Pumpkin Seeds</td>
                                    <td className="py-3 px-2 md:px-4 text-center font-semibold text-leaf-green">105g</td>
                                    <td className="py-3 px-2 md:px-4 text-center opacity-60">~60g</td>
                                </tr>
                                <tr className="border-b border-current/5">
                                    <td className="py-3 px-2 md:px-4">Sunflower Seeds</td>
                                    <td className="py-3 px-2 md:px-4 text-center font-semibold text-leaf-green">70g</td>
                                    <td className="py-3 px-2 md:px-4 text-center opacity-60">~40g</td>
                                </tr>
                                <tr className="border-b border-current/5">
                                    <td className="py-3 px-2 md:px-4">Dates</td>
                                    <td className="py-3 px-2 md:px-4 text-center font-semibold text-leaf-green">49g</td>
                                    <td className="py-3 px-2 md:px-4 text-center opacity-60">~20g</td>
                                </tr>
                                <tr className="bg-cream/50">
                                    <td className="py-3 px-2 md:px-4 font-bold">Total</td>
                                    <td className="py-3 px-2 md:px-4 text-center font-bold text-leaf-green">371g</td>
                                    <td className="py-3 px-2 md:px-4 text-center font-bold opacity-60">~200g</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Table caption */}
                    <p className="text-xs md:text-sm opacity-60 text-center mt-4 italic">
                        When you try to buy multiple premium dry fruits together, ₹549 doesn't go very far in the market.
                    </p>
                </div>

                {/* Experience Comparison */}
                <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8">
                    {/* Market Column */}
                    <div className="step-card p-5 md:p-6 rounded-2xl opacity-70">
                        <h3 className="font-bold text-lg mb-4">Buying from Market</h3>
                        <ul className="space-y-2 text-sm md:text-base">
                            <li className="flex items-start gap-2">
                                <span className="text-kraft-brown">✗</span>
                                Money spread across 6 separate items
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-kraft-brown">✗</span>
                                No portion control
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-kraft-brown">✗</span>
                                Daily measuring required
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-kraft-brown">✗</span>
                                Easy to skip days
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-kraft-brown">✗</span>
                                Leftover packets pile up
                            </li>
                        </ul>
                    </div>

                    {/* Source Code Column */}
                    <div className="step-card p-5 md:p-6 rounded-2xl border-2 border-leaf-green/30">
                        <h3 className="font-bold text-lg mb-4 text-deep-green">Source Code: Vital</h3>
                        <ul className="space-y-2 text-sm md:text-base">
                            <li className="flex items-start gap-2">
                                <span className="text-leaf-green">✓</span>
                                One box, 7 sachets
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-leaf-green">✓</span>
                                1 sachet = 1 day
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-leaf-green">✓</span>
                                Designed for consistency
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-leaf-green">✓</span>
                                No measuring, no decisions
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-leaf-green">✓</span>
                                Built as a daily habit
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Closing statement */}
                <div className="text-center">
                    <p className="text-base md:text-lg font-medium text-deep-green">
                        Buying ingredients is easy. Using them every day is the hard part.<br />
                        <span className="font-bold">Source Code solves that.</span>
                    </p>

                    {/* Optional context */}
                    <p className="text-xs md:text-sm opacity-50 mt-4">
                        To replicate this at home, most people end up spending ₹1,000–₹1,200 upfront on multiple bulk packs.
                    </p>
                </div>
            </div>
        </section>
    );
}
