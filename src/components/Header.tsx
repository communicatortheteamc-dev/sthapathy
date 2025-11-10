import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Objectives", path: "/objectives" },
    { name: "Activities", path: "/activities" },
    { name: "Programs", path: "/programs" },
    { name: "Publications", path: "/publications" },
    { name: "Projects Team", path: "/projects-team" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#494433] shadow-md">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/sthapathylogo.png"
              alt="Logo"
              className="h-16 w-auto object-contain"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-serif tracking-wide transition-colors ${
                  location.pathname === link.path
                    ? "text-[#4a88b3] font-semibold"
                    : "text-white hover:text-[#4a88b3]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white focus:outline-none"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-[#494433] border-t border-[#5b5540] flex flex-col items-center gap-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-base font-serif tracking-wide transition-colors ${
                  location.pathname === link.path
                    ? "text-[#4a88b3] font-semibold"
                    : "text-white hover:text-[#4a88b3]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
