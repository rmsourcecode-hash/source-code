import Image from "next/image";
import { getWhatsAppLink, getOrderMessage, PRICE } from "@/lib/constants";

export function Hero() {
    return (
        <section
            className="hero-section relative min-h-screen flex items-center justify-center pt-20 pb-12"
            aria-labelledby="hero-heading"
        >
            {/* Subtle background accent */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-80 h-80 md:w-[500px] md:h-[500px] rounded-full bg-leaf-green/5 blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-[400px] md:h-[400px] rounded-full bg-kraft-brown/5 blur-3xl" />
            </div>

            {/* Hero content */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Text content */}
                    <div className="text-center lg:text-left order-2 lg:order-1">
                        <h1
                            id="hero-heading"
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-4 md:mb-6"
                        >
                            A small daily habit for a{" "}
                            <span className="text-leaf-green">healthier life.</span>
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl opacity-70 max-w-xl mx-auto lg:mx-0 mb-4">
                            Premium soaked nuts & seeds — designed for every age, every home.
                        </p>

                        {/* Philosophy line */}
                        <p className="text-sm sm:text-base text-deep-green font-medium mb-6 md:mb-8 italic">
                            "Building habits. Building health. Building a nation."
                        </p>

                        {/* CTA with price */}
                        <div className="flex flex-col items-center lg:items-start gap-3">
                            <a
                                href={getWhatsAppLink(getOrderMessage())}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold text-center
                         focus:outline-none focus:ring-2 focus:ring-leaf-green focus:ring-offset-2"
                            >
                                Start the habit — {PRICE}
                            </a>
                            <p className="text-xs opacity-50">
                                Order before Wednesday for this week's dispatch
                            </p>
                        </div>
                    </div>

                    {/* Hero image */}
                    <div className="relative order-1 lg:order-2">
                        <div className="hero-image-container aspect-square max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto rounded-2xl md:rounded-3xl overflow-hidden shadow-lg">
                            <Image
                                src="/hero_image.png"
                                alt="Fresh soaked nuts and seeds - morning nutrition ritual"
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 640px) 320px, (max-width: 768px) 384px, (max-width: 1024px) 448px, 512px"
                            />
                        </div>
                        <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 w-full h-full rounded-2xl md:rounded-3xl bg-leaf-green/10 -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
}
