import Image from "next/image";
import { getWhatsAppLink, getOrderMessage, PRICE } from "@/lib/constants";

export function ProductSection() {
    return (
        <section
            id="product"
            className="section-container py-12 md:py-20"
            aria-labelledby="product-heading"
        >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 md:mb-12">
                    <h2
                        id="product-heading"
                        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4"
                    >
                        Start Your <span className="text-leaf-green">Daily Habit</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Product Image */}
                    <div className="relative">
                        <div className="relative aspect-square max-w-xs sm:max-w-sm mx-auto rounded-2xl md:rounded-3xl overflow-hidden shadow-lg">
                            <Image
                                src="/product_pack.png"
                                alt="Source Code: Vital - 7 Day Pack"
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 320px, 384px"
                            />
                        </div>
                        <div className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 w-full h-full rounded-2xl md:rounded-3xl bg-leaf-green/10 -z-10" />
                    </div>

                    {/* Single Product Card */}
                    <div>
                        <div className="product-card recommended relative p-6 md:p-8 rounded-2xl">
                            <div className="text-center md:text-left">
                                <h3 className="text-xl md:text-2xl font-bold mb-2">
                                    Source Code: Vital
                                </h3>
                                <p className="text-base opacity-70 mb-4">
                                    7-Day Pack • 371g of premium nutrition
                                </p>

                                <div className="text-3xl md:text-4xl font-bold text-leaf-green mb-6">
                                    {PRICE}
                                </div>

                                <a
                                    href={getWhatsAppLink(getOrderMessage())}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary block w-full py-3 md:py-4 rounded-full text-base md:text-lg font-semibold text-center
                                     focus:outline-none focus:ring-2 focus:ring-leaf-green focus:ring-offset-2"
                                >
                                    Order on WhatsApp
                                </a>

                                {/* Order deadline reminder */}
                                <p className="text-xs md:text-sm opacity-60 mt-3 text-center">
                                    Order before Wednesday for this week's dispatch
                                </p>
                            </div>
                        </div>

                        {/* Shipping Info */}
                        <div className="mt-6 p-4 rounded-xl bg-cream/50 border border-current/10">
                            <h4 className="font-semibold text-sm mb-2">📦 Shipping Schedule</h4>
                            <ul className="text-xs md:text-sm opacity-70 space-y-1">
                                <li>• Orders close every Wednesday night</li>
                                <li>• All orders ship every Thursday</li>
                                <li>• Orders after Wednesday ship the following Thursday</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
