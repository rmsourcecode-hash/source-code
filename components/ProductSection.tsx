"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { getWhatsAppLink, getOrderMessage, PRICES } from "@/lib/constants";

const ingredients = [
    "Almonds",
    "Cashews",
    "Walnuts",
    "Pumpkin Seeds",
    "Sunflower Seeds",
    "Dates",
];

const packs = [
    {
        name: "7-Day Trial Box",
        recommended: true,
        price: PRICES.trial7Day,
        description: "Perfect to start your soak ritual",
        message: "7-Day Trial Box",
    },
    {
        name: "14-Day Pack",
        recommended: false,
        price: PRICES.pack14Day,
        description: "For the committed wellness seeker",
        message: "14-Day Pack",
    },
];

export function ProductSection() {
    return (
        <section
            id="product"
            className="section-container py-20 md:py-28"
            aria-labelledby="product-heading"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Product Image */}
                    <motion.div
                        className="relative order-2 lg:order-1"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="relative aspect-square max-w-md mx-auto rounded-3xl overflow-hidden shadow-lg">
                            <Image
                                src="/product_pack.png"
                                alt="Source Code Vital sachet pack"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        <div className="absolute -bottom-4 -left-4 w-full h-full rounded-3xl bg-leaf-green/10 -z-10" />
                    </motion.div>

                    {/* Product Info */}
                    <motion.div
                        className="order-1 lg:order-2"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <span className="inline-block px-3 py-1 bg-deep-green/10 text-deep-green rounded-full text-sm font-medium mb-4">
                            Our Product
                        </span>
                        <h2
                            id="product-heading"
                            className="text-3xl md:text-4xl font-bold mb-4"
                        >
                            Source Code: <span className="text-leaf-green">Vital</span>
                        </h2>
                        <p className="text-xl opacity-70 mb-6">
                            Zinc-rich nutrition for an active lifestyle.
                        </p>

                        {/* Ingredients list */}
                        <div className="flex flex-wrap gap-2 mb-8">
                            {ingredients.map((ing) => (
                                <span
                                    key={ing}
                                    className="ingredient-tag px-3 py-1.5 rounded-full text-sm font-medium"
                                >
                                    {ing}
                                </span>
                            ))}
                        </div>

                        {/* Pack cards */}
                        <div className="space-y-4">
                            {packs.map((pack) => (
                                <motion.div
                                    key={pack.name}
                                    className={`product-card relative p-6 rounded-2xl ${pack.recommended ? "recommended" : ""
                                        }`}
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {pack.recommended && (
                                        <div className="recommended-badge absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-semibold">
                                            Recommended
                                        </div>
                                    )}

                                    <div className="flex items-center justify-between">
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
                                                className="btn-primary inline-block mt-2 px-4 py-2 rounded-full text-sm font-semibold
                                 focus:outline-none focus:ring-2 focus:ring-leaf-green focus:ring-offset-2"
                                            >
                                                Order Now
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
