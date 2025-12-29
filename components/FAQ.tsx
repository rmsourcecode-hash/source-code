"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqItems = [
    {
        question: "How long should I soak?",
        answer:
            "We recommend soaking for 6–8 hours, ideally overnight. This allows the nuts and seeds to become easier to digest and unlocks their full nutritional potential.",
    },
    {
        question: "Can I eat without soaking?",
        answer:
            "Yes, you can! While soaking is recommended for optimal benefits, the ingredients are perfectly safe to consume dry if you're short on time.",
    },
    {
        question: "How should I store the sachets?",
        answer:
            "Store in a cool, dry place away from direct sunlight. Once opened, consume the sachet contents within 24 hours for best freshness.",
    },
    {
        question: "Is it sweetened or salted?",
        answer:
            "No. Source Code: Vital contains only pure, natural ingredients with zero added sugar, salt, or preservatives.",
    },
    {
        question: "What's the delivery timeline for founding batch?",
        answer:
            "As a founding batch customer, expect delivery within 3–5 business days in metro cities. We'll confirm exact timelines via WhatsApp after your order.",
    },
    {
        question: "Who should consult a doctor before consuming?",
        answer:
            "If you have any nut allergies, specific dietary restrictions, or are pregnant/nursing, please consult your healthcare provider before adding any new food to your diet.",
    },
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section
            id="faq"
            className="section-container py-20 md:py-28"
            aria-labelledby="faq-heading"
        >
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold mb-4">
                        Frequently Asked Questions
                    </h2>
                </motion.div>

                <div className="space-y-4">
                    {faqItems.map((item, i) => (
                        <motion.div
                            key={i}
                            className="faq-item rounded-xl overflow-hidden"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full px-6 py-4 flex items-center justify-between text-left font-medium
                         focus:outline-none focus:ring-2 focus:ring-inset focus:ring-leaf-green"
                                aria-expanded={openIndex === i}
                                aria-controls={`faq-answer-${i}`}
                            >
                                <span>{item.question}</span>
                                <svg
                                    className={`w-5 h-5 transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        id={`faq-answer-${i}`}
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="px-6 pb-4 opacity-80">{item.answer}</div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
