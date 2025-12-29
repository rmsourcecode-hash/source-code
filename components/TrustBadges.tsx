"use client";

import { motion } from "framer-motion";

const badges = [
    { text: "Founding Batch", icon: "🌟" },
    { text: "Hand-packed", icon: "✋" },
    { text: "No additives", icon: "🚫" },
    { text: "No salt", icon: "🧂" },
    { text: "Soak-ready", icon: "💧" },
];

export function TrustBadges() {
    return (
        <section className="trust-badges py-8 md:py-12 overflow-hidden" aria-label="Trust badges">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="flex flex-wrap justify-center gap-3 md:gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    {badges.map((badge, i) => (
                        <motion.div
                            key={badge.text}
                            className="badge-pill flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.3 }}
                        >
                            <span aria-hidden="true">{badge.icon}</span>
                            <span>{badge.text}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
