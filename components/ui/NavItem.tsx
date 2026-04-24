"use client";

type NavItemProps = {
    id: string;
    label: string;
    isActive: boolean;
    handleScroll: (id: string) => void;
};

export default function NavItem({ id, label, isActive, handleScroll }: NavItemProps) {
    return (
        <button
            key={id}
            onClick={() => handleScroll(id)}
            className={`text-xs md:text-sm font-semibold cursor-pointer transition-all duration-200 hover:text-sky-500 ${
                isActive
                    ? "text-sky-600 underline decoration-3 underline-offset-6"
                    : "text-gray-700"
                }
            `}
        >
            {label}
        </button>
    );
}