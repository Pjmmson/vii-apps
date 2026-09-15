import { useEffect, useRef, useState } from "react";

export default function NavDropDown ({ item }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Prevent rendering if submenu does not exist
    const submenu = Array.isArray(item?.submenu) ? item.submenu : [];

    return (
        <div ref={dropdownRef} className="relative z-50">
            <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className="flex items-center gap-1 py-2 text-xs font-extralight text-gray-600 transition-colors hover:text-black focus:outline-none"
                aria-expanded={isOpen}
                aria-haspopup="menu"
            >
                {item?.name}

                <svg
                    className={`h-4 w-4 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>

            {isOpen && (
                <div
                    className="absolute left-0 mt-2 w-56 rounded-lg border border-gray-100 bg-white py-2 shadow-xl"
                    role="menu"
                >
                    {submenu.map((subItem, index) => (
                        <a
                            key={subItem?.name || index}
                            href={subItem?.link || "#"}
                            className="block px-4 py-2 text-xs text-gray-700 transition-colors hover:bg-gray-50 hover:text-black"
                            onClick={() => setIsOpen(false)}
                            role="menuitem"
                        >
                            {subItem?.name}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

// export default NavDropDown;
