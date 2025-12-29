import Image from "next/image";
import { getWhatsAppLink, getOrderMessage, PRICES } from "@/lib/constants";

const packs = [
    {
        name: "7-Day Habit Starter",
        recommended: true,
        price: PRICES.trial7Day,
        description: "A gentle introduction to daily nutrition",
        message: "7-Day Habit Starter",
    },
    {
        name: "14-Day Consistency Pack",
        recommended: false,
        price: PRICES.pack14Day,
        description: "For building lasting habits",
        message: "14-Day Consistency Pack",
    },
];

export function ProductSection() {
    return (
        <section
            id="product"
            className="section-container py-12 md:py-20"
            aria-labelledby="product-heading"
        >
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 md:mb-12">
                    <h2
                        id="product-heading"
                        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4"
                    >
                        Choose Your <span className="text-leaf-green">Commitment</span>
                    </h2>
                    <p className="text-base md:text-lg opacity-70">
                        Most families begin with a 7-day commitment.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Product Image */}
                    <div className="relative order-2 lg:order-1">
                        <div className="relative aspect-square max-w-xs sm:max-w-sm mx-auto rounded-2xl md:rounded-3xl overflow-hidden shadow-lg">
                            <Image
                                src="/product_pack.png"
                                alt="Source Code Nutrition sachet pack"
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 320px, 384px"
                            />
                        </div>
                        <div className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 w-full h-full rounded-2xl md:rounded-3xl bg-leaf-green/10 -z-10" />
                    </div>

                    {/* Pack cards */}
                    <div className="order-1 lg:order-2 space-y-4 md:space-y-6">
                        {packs.map((pack) => (
                            <div
                                key={pack.name}
                                className={`product-card relative p-5 md:p-6 rounded-2xl ${pack.recommended ? "recommended" : ""
                                    }`}
                            >
                                {pack.recommended && (
                                    <div className="recommended-badge absolute -top-3 left-4 md:left-6 px-3 py-1 rounded-full text-xs font-semibold">
                                        Most Popular
                                    </div>
                                )}

                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                    <div>
                                        <h3 className="text-lg md:text-xl font-bold">{pack.name}</h3>
                                        <p className="opacity-60 text-sm">{pack.description}</p>
                                    </div>
                                    <div className="flex items-center justify-between sm:flex-col sm:items-end gap-2">
                                        <div className="text-xl md:text-2xl font-bold">{pack.price}</div>
                                        <a
                                            href={getWhatsAppLink(getOrderMessage(pack.message))}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-primary px-5 md:px-6 py-2 rounded-full text-sm font-semibold whitespace-nowrap
                                 focus:outline-none focus:ring-2 focus:ring-leaf-green focus:ring-offset-2"
                                        >
                                            Order Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
