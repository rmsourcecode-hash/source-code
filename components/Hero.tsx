"use client";

import Image from "next/image";
import { getWhatsAppLink, getOrderMessage } from "@/lib/constants";

export function Hero() {
    return (
        <section
            className="hero-section relative min-h-screen flex items-center justify-center pt-20"
            aria-labelledby="hero-heading"
        >
            {/* Subtle background accent */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-leaf-green/5 blur-3xl" />
                <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-kraft-brown/5 blur-3xl" />
            </div>

            {/* Hero content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Text content */}
                    <div>
                        <h1
                            id="hero-heading"
                            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6"
                        >
                            A small daily habit for a{" "}
                            <span className="text-leaf-green">healthier life.</span>
                        </h1>

                        <p className="text-lg sm:text-xl opacity-70 max-w-xl mb-4">
                            Premium soaked nuts & seeds for every age, every home.
                        </p>

                        {/* Philosophy line - visible */}
                        <p className="text-base sm:text-lg text-deep-green font-medium mb-8 italic">
                            "Building habits. Building health. Building a nation."
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href={getWhatsAppLink(getOrderMessage())}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary px-8 py-4 rounded-full text-lg font-semibold text-center
                         focus:outline-none focus:ring-2 focus:ring-leaf-green focus:ring-offset-2"
                            >
                                Start the habit on WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* Hero image - calm, aspirational lifestyle */}
                    <div className="relative">
                        <div className="hero-image-container aspect-square max-w-lg mx-auto">
                            <Image
                                src="/hero_image.png"
                                alt="Indian family morning routine with healthy breakfast"
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl bg-leaf-green/10 -z-10" />
                        <div className="absolute -bottom-8 -right-8 w-full h-full rounded-3xl bg-kraft-brown/10 -z-20" />
                    </div>
                </div>
            </div>
        </section>
    );
}
