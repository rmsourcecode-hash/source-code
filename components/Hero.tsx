"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { getWhatsAppLink, getOrderMessage } from "@/lib/constants";

const ingredientChips = [
    { name: "Almonds", color: "#C9A27E", x: "8%", y: "20%" },
    { name: "Walnuts", color: "#8B6914", x: "85%", y: "15%" },
    { name: "Pumpkin", color: "#2E5E3E", x: "5%", y: "65%" },
    { name: "Cashews", color: "#E8D5B5", x: "88%", y: "55%" },
    { name: "Dates", color: "#6B3E2E", x: "12%", y: "85%" },
    { name: "Seeds", color: "#3E8E5A", x: "82%", y: "80%" },
];

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Parallax transforms - increased range for dramatic effect
    const imageY = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
    const imageRotate = useTransform(scrollYProgress, [0, 1], [0, 3]);
    const blobY = useTransform(scrollYProgress, [0, 1], [0, 350]);
    const blobOpacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 0.05]);
    const textY = useTransform(scrollYProgress, [0, 1], [0, 120]);

    const handleScrollToIngredients = () => {
        const target = document.querySelector("#ingredients");
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            ref={containerRef}
            className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
            aria-labelledby="hero-heading"
        >
            {/* Parallax background blobs */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{ y: blobY, opacity: blobOpacity }}
            >
                <div className="hero-blob absolute top-1/4 left-1/3 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full" />
                <div className="hero-blob-secondary absolute bottom-1/3 right-1/4 w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full" />
            </motion.div>

            {/* Floating ingredient chips with parallax */}
            <div className="absolute inset-0 pointer-events-none hidden lg:block">
                {ingredientChips.map((chip, i) => {
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    const chipY = useTransform(scrollYProgress, [0, 1], [0, 80 + i * 40]);

                    return (
                        <motion.div
                            key={chip.name}
                            className="absolute"
                            style={{
                                left: chip.x,
                                top: chip.y,
                                y: chipY,
                            }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                        >
                            <motion.div
                                className="ingredient-chip px-6 py-3 rounded-full text-base font-semibold shadow-xl"
                                style={{
                                    backgroundColor: chip.color + "15",
                                    borderColor: chip.color + "30",
                                    color: chip.color,
                                }}
                                animate={{ y: [0, -15, 0] }}
                                transition={{
                                    duration: 3 + i * 0.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                {chip.name}
                            </motion.div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Hero content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Text content */}
                    <motion.div style={{ y: textY }}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block px-4 py-1.5 bg-leaf-green/10 text-leaf-green rounded-full text-sm font-medium mb-6">
                                🌟 Founding Batch Now Available
                            </span>
                            <h1
                                id="hero-heading"
                                className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6"
                            >
                                Upgrade your mornings—
                                <br />
                                <span className="text-leaf-green">one soak pack a day.</span>
                            </h1>
                        </motion.div>

                        <motion.p
                            className="text-lg sm:text-xl opacity-70 max-w-xl mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Pre-portioned nuts & seeds. Cut, soak overnight, consume fresh.
                            A simple ritual for mindful nutrition.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <a
                                href={getWhatsAppLink(getOrderMessage())}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary px-8 py-4 rounded-full text-lg font-semibold text-center
                         focus:outline-none focus:ring-2 focus:ring-leaf-green focus:ring-offset-2"
                            >
                                Order on WhatsApp
                            </a>
                            <button
                                onClick={handleScrollToIngredients}
                                className="btn-secondary px-8 py-4 rounded-full text-lg font-semibold
                         focus:outline-none focus:ring-2 focus:ring-leaf-green focus:ring-offset-2"
                            >
                                See what's inside
                            </button>
                        </motion.div>
                    </motion.div>

                    {/* Hero image with parallax */}
                    <motion.div
                        className="relative"
                        style={{ y: imageY, scale: imageScale, rotate: imageRotate }}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <div className="hero-image-container aspect-square max-w-lg mx-auto">
                            <Image
                                src="/hero_image.png"
                                alt="Premium soaked nuts and seeds in a ceramic bowl"
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl bg-leaf-green/10 -z-10" />
                        <div className="absolute -bottom-8 -right-8 w-full h-full rounded-3xl bg-kraft-brown/10 -z-20" />
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <svg
                    className="w-6 h-6 opacity-40"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                </svg>
            </motion.div>
        </section>
    );
}
