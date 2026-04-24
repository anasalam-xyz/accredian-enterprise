"use client";

import { useEffect, useState } from "react";
import NavItem from "./ui/NavItem";

const NAV_ITEMS: Record<string, string>[] = [
    { id: "home", label: "Home" },
    { id: "stats", label: "Stats" },
    { id: "clients", label: "Clients" },
    { id: "accredian-edge", label: "Accredian Edge" },
    { id: "cat", label: "CAT" },
    { id: "how-it-works", label: "How It Works" },
    { id: "faqs", label: "FAQs" },
    { id: "testimonials", label: "Testimonials" },
];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState<string>("home");

    useEffect(() => {
        const sections = NAV_ITEMS.map((item) =>
            document.getElementById(item.id),
        ).filter(Boolean) as HTMLElement[];

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                root: null,
                rootMargin: "-40% 0px -55% 0px",
                threshold: 0.1,
            },
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const handleScroll = (id: string) => {
        const el = document.getElementById(id);
        if(el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="h-20 fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <div className="h-full max-w-7xl mx-auto px-8 py-3 flex items-center justify-between gap-6">
                {/* Logo (right side) */}
                <div className="flex items-center ml-4">
                    <img src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/logo.webp"
                        className="h-8"/>
                </div>
                
                {/* Nav Items */}
                <div className="hidden md:flex gap-8 items-center">
                    {NAV_ITEMS.map((item) => {
                        return (
                            <NavItem
                                key={item.id}
                                id={item.id}
                                label={item.label}
                                isActive={activeSection === item.id}
                                handleScroll={handleScroll}
                            />
                        );
                    })}
                </div>
            </div>

            {/* Mobile Nav (simple fallback) */}
            <div className="md:hidden flex overflow-x-auto gap-4 px-4 pb-2">
                {NAV_ITEMS.map((item) => {
                    return (
                        <NavItem
                            key={item.id}
                            id={item.id}
                            label={item.label}
                            isActive={activeSection === item.id}
                            handleScroll={handleScroll}
                        />
                    );
                })}
            </div>
        </nav>
    );
}
