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
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
  const sections = NAV_ITEMS.map((item) =>
    document.getElementById(item.id)
  ).filter(Boolean) as HTMLElement[];

  let ticking = false;

  const getCurrentSection = () => {
    const center = window.scrollY + window.innerHeight / 2;

    for (const section of sections) {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;

      if (center >= top && center < bottom) {
        return section.id;
      }
    }
    return null;
  };

  const onScroll = () => {
    if (ticking) return;
    ticking = true;

    requestAnimationFrame(() => {
      const current = getCurrentSection();

      if (current && current !== activeSection) {
        setActiveSection(current);
      }

      ticking = false;
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });

  onScroll(); // initialize

  return () => window.removeEventListener("scroll", onScroll);
}, [activeSection]);

    const handleScroll = (id: string) => {
        const el = document.getElementById(id);
        if(el) {
            el.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false);
        }
    };

    return (
        <nav className="h-20 fixed top-0 left-0 w-screen bg-white shadow-md z-50">
            <div className="h-full w-full mx-auto px-8 py-3 flex items-center justify-between gap-6">
                <div className="flex items-center md:ml-4">
                    <img src="/logos/logo.webp"
                        className="h-8"/>
                </div>
                
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
                
                <button onClick={() => setIsOpen(!isOpen)} className="self-start mt-4 relative md:hidden cursor-pointer">
		        	<span className={`absolute w-5 h-[2px] bg-black transition-all duration-800 ${isOpen ? "-rotate-135 top-2" : "top-0"}`}></span>
		            <span className={`absolute w-5 h-[2px] bg-black transition-opacity duration-700 ${isOpen ? "opacity-0" : "top-2"}`}></span>
		            <span className={`absolute w-5 h-[2px] bg-black transition-all duration-800 ${isOpen ? "-rotate-45 top-2" : "top-4"}`}></span>
		        </button>
            </div>
			
			<div className={`
                fixed top-24 right-2 w-40
                bg-white px-8
                border-b border-gray-100 shadow-md
                md:hidden rounded-xl
                transform transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0 pointer-events-none"}`}
           	>
                <ul className="py-8 flex flex-col gap-3 text-base font-thin text-gray-700">
                	{NAV_ITEMS.map((item) => {
		                return (
		               		<li key={item.id}>
		               			<NavItem
				                    id={item.id}
				                    label={item.label}
				                    isActive={activeSection === item.id}
				                    handleScroll={handleScroll}
				                />
		               		</li>
		                );
		            })}
                </ul>
            </div>
        </nav>
    );
}
