import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

/**
 * Header Component
 * Clean, professional navigation for NGO website
 * Includes an NGO Utility Top Bar for trust and immediate accessibility
 */
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation links - Human-centric CTAs
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/our-work", label: "Our Work" },
    { to: "/who-we-support", label: "Who We Support" },
    { to: "/volunteer", label: "Volunteer" },
    { to: "/get-help", label: "Get Help" },
  ];

  return (
    <header className="sticky top-0 z-50 shadow-sm">
      {/* NGO Utility Top Bar - Common trust signal */}
      <div className="top-bar hidden sm:block">
        <div className="section-container flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center">
              <svg
                className="w-3 h-3 mr-2 text-forest-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              contact@veeru.org
            </span>
            <span className="flex items-center">
              <svg
                className="w-3 h-3 mr-2 text-forest-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              Mumbai, India
            </span>
          </div>
          <div className="flex space-x-4 italic text-[10px] text-gray-300">
            Registered Social Welfare Organization
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-gray-100">
        <div className="section-container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo / Brand */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-navy-800 rounded-sm flex items-center justify-center transform rotate-3 shadow-md">
                <span className="text-white font-bold text-xl -rotate-3 italic font-serif">
                  V
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-navy-800 tracking-tighter leading-none">
                  VEERU
                </span>
                <span className="hidden sm:block text-[10px] uppercase tracking-widest text-forest-700 font-bold mt-1">
                  Social Welfare Organization
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `text-xs uppercase tracking-widest font-bold transition-all duration-200 py-2 border-b-2 ${
                      isActive
                        ? "text-navy-800 border-forest-600"
                        : "text-gray-500 border-transparent hover:text-navy-800"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Link
                to="/donate"
                className="ml-4 px-6 py-2.5 bg-forest-500 text-white text-xs font-bold uppercase tracking-widest rounded shadow-lg shadow-forest-200 hover:bg-forest-600 hover:shadow-forest-300 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Donate
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="lg:hidden p-2 text-navy-800 hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 animate-in slide-in-from-top duration-300">
          <nav className="section-container py-6">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 text-sm font-bold uppercase tracking-widest border-l-4 transition-all ${
                      isActive
                        ? "text-navy-800 border-forest-600 bg-forest-50"
                        : "text-gray-500 border-transparent hover:bg-gray-50"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
