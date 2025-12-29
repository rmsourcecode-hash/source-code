"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
    {
        number: 1,
        title: "Cut 1 sachet",
        description: "Tear open one pre-portioned pack",
        icon: (
            <svg className="w-14 h-14" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="12" y="8" width="24" height="32" rx="3" />
                <line x1="12" y1="24" x2="36" y2="24" strokeDasharray="4 2" />
                <path d="M20 18 L28 26 M28 18 L20 26" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        number: 2,
        title: "Soak 6–8 hours",
        description: "Add to water, refrigerate overnight",
        icon: (
            <svg className="w-14 h-14" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 32 C12 40 18 44 24 44 C30 44 36 40 36 32 L36 14 L12 14 Z" />
                <ellipse cx="24" cy="14" rx="12" ry="3" />
                <circle cx="18" cy="26" r="2" fill="currentColor" opacity="0.5" />
                <circle cx="26" cy="30" r="2.5" fill="currentColor" opacity="0.5" />
                <circle cx="22" cy="36" r="2" fill="currentColor" opacity="0.5" />
                <path d="M30 22 C30 22 32 26 30 30" strokeLinecap="round" opacity="0.5" />
            </svg>
        ),
    },
    {
        number: 3,
        title: "Consume fresh",
        description: "Enjoy your nutritious morning boost",
        icon: (
            <svg className="w-14 h-14" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="24" cy="24" r="16" />
                <path d="M16 24 L22 30 L32 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M24 4 L24 8" strokeWidth="2" strokeLinecap="round" />
                <path d="M40 24 L44 24" strokeWidth="2" strokeLinecap="round" />
                <path d="M24 40 L24 44" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 24 L8 24" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
    },
];

export function HowItWorks() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const bgY = useTransform(scrollYProgress, [0, 1], [50, -120]);

    return (
        <section
            id="how-it-works"
            ref={containerRef}
            className="section-container py-24 md:py-32 relative overflow-hidden"
            aria-labelledby="how-it-works-heading"
        >
            {/* Parallax background element */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{ y: bgY }}
            >
                <div className="floating-shape floating-shape-green w-[300px] h-[300px] absolute -top-20 -right-20" />
                <div className="floating-shape floating-shape-brown w-[200px] h-[200px] absolute bottom-0 -left-10" />
            </motion.div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="inline-block px-3 py-1 bg-leaf-green/10 text-leaf-green rounded-full text-sm font-medium mb-4">
                        Simple Process
                    </span>
                    <h2 id="how-it-works-heading" className="text-3xl md:text-4xl font-bold mb-4">
                        How it works
                    </h2>
                    <p className="text-lg opacity-60 max-w-xl mx-auto">
                        A simple daily ritual that takes just seconds to prepare.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                    {steps.map((step, i) => (
                        <motion.div
                            key={step.number}
                            className="step-card relative p-8 rounded-2xl text-center"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.15, duration: 0.5 }}
                            whileHover={{ y: -8 }}
                        >
                            {/* Step number */}
                            <div className="step-number absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold">
                                {step.number}
                            </div>

                            {/* Icon */}
                            <div className="step-icon flex justify-center mb-6 text-leaf-green">
                                {step.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                            <p className="opacity-60">{step.description}</p>

                            {/* Connector arrow for desktop */}
                            {i < steps.length - 1 && (
                                <div className="hidden md:block absolute top-1/2 -right-6 text-leaf-green/30">
                                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
