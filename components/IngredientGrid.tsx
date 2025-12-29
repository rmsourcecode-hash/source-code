"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ingredients = [
    {
        name: "Pumpkin Seeds",
        benefit: "Zinc-rich",
        icon: "🎃",
        color: "#2E5E3E",
    },
    {
        name: "Sunflower Seeds",
        benefit: "Vitamin E",
        icon: "🌻",
        color: "#D4A904",
    },
    {
        name: "Walnuts",
        benefit: "Healthy fats",
        icon: "🧠",
        color: "#8B6914",
    },
    {
        name: "Almonds",
        benefit: "Vitamin E",
        icon: "🌰",
        color: "#C9A27E",
    },
    {
        name: "Cashews",
        benefit: "Energy + fats",
        icon: "🥜",
        color: "#E8D5B5",
    },
    {
        name: "Dates",
        benefit: "Natural energy",
        icon: "🌴",
        color: "#6B3E2E",
    },
];

export function IngredientGrid() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const bgY = useTransform(scrollYProgress, [0, 1], [80, -100]);

    return (
        <section
            id="ingredients"
            ref={containerRef}
            className="section-container py-24 md:py-32 relative overflow-hidden"
            aria-labelledby="ingredients-heading"
        >
            {/* Parallax background */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{ y: bgY }}
            >
                <div className="floating-shape floating-shape-green w-[400px] h-[400px] absolute top-1/4 -left-40" />
                <div className="floating-shape floating-shape-brown w-[300px] h-[300px] absolute bottom-1/4 -right-32" />
            </motion.div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="inline-block px-3 py-1 bg-kraft-brown/20 text-kraft-brown rounded-full text-sm font-medium mb-4">
                        Premium Quality
                    </span>
                    <h2 id="ingredients-heading" className="text-3xl md:text-4xl font-bold mb-4">
                        What's Inside
                    </h2>
                    <p className="text-lg opacity-60 max-w-xl mx-auto">
                        Six premium ingredients, carefully portioned for daily nutrition.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {ingredients.map((ing, i) => (
                        <motion.div
                            key={ing.name}
                            className="ingredient-tile p-6 md:p-8 rounded-2xl text-center group cursor-default"
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-30px" }}
                            transition={{ delay: i * 0.08, duration: 0.4 }}
                            whileHover={{ y: -4, scale: 1.02 }}
                        >
                            <motion.div
                                className="text-5xl md:text-6xl mb-4"
                                aria-hidden="true"
                                animate={{ rotate: [0, 5, -5, 0] }}
                                transition={{ duration: 4, repeat: Infinity, delay: i * 0.3 }}
                            >
                                {ing.icon}
                            </motion.div>
                            <h3 className="font-semibold text-lg mb-1">{ing.name}</h3>
                            <p
                                className="text-sm font-medium"
                                style={{ color: ing.color }}
                            >
                                {ing.benefit}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
