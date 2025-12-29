"use client";

import { useState } from "react";

const faqItems = [
    {
        question: "How long should I soak?",
        answer:
            "6–8 hours, ideally overnight. This makes the ingredients easier to digest and absorb.",
    },
    {
        question: "Can I eat without soaking?",
        answer:
            "Yes, you can! While soaking is recommended for optimal benefits, the ingredients are safe to consume dry.",
    },
    {
        question: "How should I store the sachets?",
        answer:
            "Keep in a cool, dry place away from sunlight. Once opened, consume within 24 hours.",
    },
    {
        question: "Is it suitable for children and seniors?",
        answer:
            "Yes. The ingredients are gentle and easy to digest when soaked, making them suitable for all ages.",
    },
    {
        question: "What's the delivery timeline?",
        answer:
            "3–5 business days in metro cities. We'll confirm via WhatsApp after your order.",
    },
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section
            id="faq"
            className="section-container py-12 md:py-20"
            aria-labelledby="faq-heading"
        >
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 md:mb-12">
                    <h2 id="faq-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="space-y-3 md:space-y-4">
                    {faqItems.map((item, i) => (
                        <div
                            key={i}
                            className="faq-item rounded-xl overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full px-4 md:px-6 py-3 md:py-4 flex items-center justify-between text-left font-medium text-sm md:text-base"
                                aria-expanded={openIndex === i}
                                aria-controls={`faq-answer-${i}`}
                            >
                                <span>{item.question}</span>
                                <svg
                                    className={`w-4 h-4 md:w-5 md:h-5 transition-transform duration-200 flex-shrink-0 ml-2 ${openIndex === i ? "rotate-180" : ""
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
                            {openIndex === i && (
                                <div
                                    id={`faq-answer-${i}`}
                                    className="px-4 md:px-6 pb-3 md:pb-4 text-sm md:text-base opacity-80"
                                >
                                    {item.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
