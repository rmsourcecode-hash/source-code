"use client";

import Image from "next/image";
import { getWhatsAppLink, getOrderMessage } from "@/lib/constants";

const navLinks = [
    { label: "Daily Ritual", href: "#how-it-works" },
    { label: "Ingredients", href: "#ingredients" },
    { label: "Order", href: "#product" },
    { label: "FAQ", href: "#faq" },
];

export function Header() {
    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className="header-sticky fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <a href="#" className="flex items-center group" aria-label="Source Code Home">
                        <Image
                            src="/source_code_logo.png"
                            alt="Source Code Logo"
                            width={52}
                            height={52}
                            className="rounded-xl transition-transform group-hover:scale-105"
                        />
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => handleSmoothScroll(e, link.href)}
                                className="text-sm font-medium opacity-60 hover:opacity-100 transition-opacity
                         focus:outline-none focus:ring-2 focus:ring-leaf-green focus:ring-offset-2 rounded-sm px-1"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <a
                        href={getWhatsAppLink(getOrderMessage())}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-sm md:text-base px-5 md:px-6 py-2.5 md:py-3 rounded-full font-medium
                     focus:outline-none focus:ring-2 focus:ring-leaf-green focus:ring-offset-2"
                    >
                        Order on WhatsApp
                    </a>
                </div>
            </div>
        </header>
    );
}
