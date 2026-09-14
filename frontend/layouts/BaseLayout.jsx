import NavDropDown from "../components/navDropdown";
// Reusable Inner Container to keep content aligned across Header, Main, and Footer
const Container = ({ children, className = "" }) => (
  <div className={`w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 ${className}`}>
    {children}
  </div>
);

export default function BaseLayout({ headerMenu = [], footers = [], viilogo, children }) {
  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-50 text-gray-800 antialiased">
      {/* --- HEADER --- */}
      <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm backdrop-blur-md">
        <Container className="h-16 flex items-center justify-center gap-4">
          {/* Logo Section */}
          <div className="flex items-center gap-3 shrink-0">
            <img src={viilogo} alt="vii-logo" className="h-12 w-auto object-contain"/>
          </div>
          {/* Navigation Links - Fluid spacing, wraps gracefully on intermediate screens */}
          <nav className="flex items-center gap-x-4 md:gap-x-8 flex-wrap justify-end">
            {headerMenu.map((item, index) => {
                if (item.submenu) {
                    return <NavDropDown key={index} item={item}/>
                }
                return (
                    <a 
                        key={item.id || index} 
                        href={item.link || "#"} 
                        className="text-sm font-semibold text-gray-600 hover:text-black cursor-pointer transition-colors py-2"
                    >
                        <span className="flex flex-row items-center gap-1">{item.name}{item.icon && item.icon}</span>
                        {item.dropdowns && ("")}
                    </a>
                );
            })}
          </nav>
        </Container>
      </header>

      {/* --- MAIN BODY --- */}
      <main className="flex-1 w-full py-6 md:py-10 lg:py-12 flex flex-col">
        <Container className="flex-1 flex flex-col">
          {children}
        </Container>
      </main>

      {/* --- FOOTER --- */}
      <footer className="w-full bg-gray-900 text-gray-400 py-8 md:py-12 border-t border-gray-800 mt-auto">
        <Container className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          
          {/* Footer Navigation Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {footers.map((item, index) => (
              <a 
                key={item.id || index} 
                href={item.href || "#"} 
                className="text-sm font-semibold hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
          {/* Copyright/Meta */}
          <div className="text-xs text-gray-500 shrink-0">
            &copy; {new Date().getFullYear()} Vii Laboratory. All rights reserved.
          </div>

        </Container>
      </footer>

    </div>
  );
}
