"use client";

import { motion } from "framer-motion";

export function BrandStory() {
    return (
        <section
            className="section-container py-20 md:py-28"
            aria-labelledby="brand-story-heading"
        >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="brand-story-card p-8 md:p-12 rounded-2xl"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2
                        id="brand-story-heading"
                        className="text-3xl md:text-4xl font-bold mb-6"
                    >
                        Why <span className="text-leaf-green">Source Code</span>
                    </h2>

                    <div className="space-y-6 text-lg opacity-90 leading-relaxed">
                        <p>
                            I wanted a simple way to add soaked nuts and seeds to my mornings—without
                            the hassle of measuring, mixing, or forgetting which ones to buy. Source Code
                            started from that personal need.
                        </p>
                        <p>
                            Each sachet is hand-packed with a balanced mix of premium ingredients,
                            designed to be torn open and soaked overnight. No measuring, no waste,
                            just consistent daily nutrition.
                        </p>
                    </div>

                    <motion.div
                        className="founding-batch-note mt-8 p-4 rounded-lg"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="flex items-center gap-3">
                            <span className="text-2xl">🌟</span>
                            <div>
                                <div className="font-semibold">Founding Batch</div>
                                <p className="text-sm opacity-80">
                                    You're among the early supporters. We're keeping packaging minimal
                                    while we perfect the product based on your feedback.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
