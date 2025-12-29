"use client";

import Image from "next/image";
import { getWhatsAppLink, getOrderMessage, PRICES } from "@/lib/constants";

const packs = [
    {
        name: "7-Day Habit Starter",
        recommended: true,
        price: PRICES.trial7Day,
        description: "Perfect to begin your daily ritual",
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
            className="section-container py-16 md:py-24"
            aria-labelledby="product-heading"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2
                        id="product-heading"
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        Choose Your <span className="text-leaf-green">Commitment</span>
                    </h2>
                    <p className="text-lg opacity-70">
                        Most families start with 7 days.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Product Image */}
                    <div className="relative order-2 lg:order-1">
                        <div className="relative aspect-square max-w-md mx-auto rounded-3xl overflow-hidden shadow-lg">
                            <Image
                                src="/product_pack.png"
                                alt="Source Code Nutrition sachet pack"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        <div className="absolute -bottom-4 -left-4 w-full h-full rounded-3xl bg-leaf-green/10 -z-10" />
                    </div>

                    {/* Pack cards */}
                    <div className="order-1 lg:order-2 space-y-6">
                        {packs.map((pack) => (
                            <div
                                key={pack.name}
                                className={`product-card relative p-6 rounded-2xl ${pack.recommended ? "recommended" : ""
                                    }`}
                            >
                                {pack.recommended && (
                                    <div className="recommended-badge absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-semibold">
                                        Most Popular
                                    </div>
                                )}

                                <div className="flex items-center justify-between flex-wrap gap-4">
                                    <div>
                                        <h3 className="text-xl font-bold">{pack.name}</h3>
                                        <p className="opacity-60 text-sm">{pack.description}</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-2xl font-bold">{pack.price}</div>
                                        <a
                                            href={getWhatsAppLink(getOrderMessage(pack.message))}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-primary inline-block mt-2 px-6 py-2 rounded-full text-sm font-semibold
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
