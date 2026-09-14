import { useState, useRef, useEffect } from "react";

const Container = ({ children, className = ""}) => (
    <div className={`w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 ${className}`}>
        {children}
    </div>
);

const NavDropDown = ({ item }) => {
    const [ isOpen, setIsOpen ] = useState(false);
    const dropdownRef = useRef(null);
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown",handleClickOutside);
        return () => document.removeEventListener("mousedown",handleClickOutside);
    },[]);
    return (
        <div ref={dropdownRef} className="relative z-50">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-black transition-colors py-2 focus:outline-none"      aria-expanded={isOpen}
            >
                {item.name}
                <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
             {/* Dropdown Menu Panel */}
            {isOpen && (
                <div className="absolute left-0 mt-2 w-56 rounded-lg bg-white shadow-xl border border-gray-100 py-2 animate-in fade-in slide-in-from-top-1 duration-150">
                {item.submenu.map((subItem, index) => (
                    <a
                    key={index}
                    href={subItem.link || "#"}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-colors"
                    onClick={() => setIsOpen(false)} // Closes menu on link item selection
                    >
                    {subItem.name}
                    </a>
                ))}
                </div>
            )}
        </div>
    );
};
export default NavDropDown;