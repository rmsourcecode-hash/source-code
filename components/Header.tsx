import Image from "next/image";
import { getWhatsAppLink, getOrderMessage } from "@/lib/constants";

const navLinks = [
    { label: "Ritual", href: "#how-it-works" },
    { label: "Compare", href: "#comparison" },
    { label: "Order", href: "#product" },
    { label: "FAQ", href: "#faq" },
];

export function Header() {
    return (
        <header className="header-sticky fixed top-0 left-0 right-0 z-50 border-b">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-14 md:h-16">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2" aria-label="Source Code Nutrition Home">
                        <Image
                            src="/source_code_logo.png"
                            alt="Source Code Nutrition Logo"
                            width={40}
                            height={40}
                            className="rounded-lg"
                        />
                        <span className="hidden sm:inline font-semibold text-deep-green text-sm">
                            Source Code
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium opacity-60 hover:opacity-100 transition-opacity"
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
                        className="btn-primary text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-medium"
                    >
                        <span className="hidden sm:inline">Order ₹549</span>
                        <span className="sm:hidden">Order</span>
                    </a>
                </div>
            </div>
        </header>
    );
}
