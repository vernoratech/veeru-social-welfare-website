import { Link } from "react-router-dom";

/**
 * Footer Component
 * Trust anchor for the organization
 * Includes: mission reminder, trust signals, contact info, supportive messaging
 */
function Footer() {
  const currentYear = new Date().getFullYear();

  // Quick links for footer navigation
  const quickLinks = [
    { to: "/about", label: "About Us" },
    { to: "/our-work", label: "Our Work" },
    { to: "/who-we-support", label: "Who We Support" },
    { to: "/volunteer", label: "Volunteer" },
    { to: "/get-help", label: "Get Help" },
  ];

  return (
    <footer className="bg-gray-800 text-white relative overflow-hidden">
      {/* Decorative Gradient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-forest-500/30 to-transparent"></div>

      {/* Supportive Message Banner - Enhanced contrast */}
      <div className="bg-forest-600/10 border-b border-white/5 py-4">
        <div className="section-container text-center">
          <p className="text-forest-400 text-sm md:text-base font-medium">
            If you need help right now, please reach out. We are here for you.
          </p>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="section-container py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand & Mission */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg shadow-white/5">
                <span className="text-gray-950 font-black text-xl">V</span>
              </div>
              <span className="text-2xl font-black tracking-tight">VEERU</span>
            </div>
            <p className="text-gray-400 text-sm mb-4 max-w-md leading-relaxed">
              Volunteers for Educational Empowerment & Reform of Underprivileged
            </p>
            <p className="text-gray-500 text-sm leading-relaxed max-w-md">
              VEERU exists to stand with people during their hardest moments —
              providing support, guidance, and solidarity when it matters most.
            </p>

            {/* Trust Signals */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                <p className="text-gray-400 text-[10px] uppercase tracking-wider mb-1">
                  Established
                </p>
                <p className="text-white font-bold text-sm">Since 2018</p>
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                <p className="text-gray-400 text-[10px] uppercase tracking-wider mb-1">
                  Region
                </p>
                <p className="text-white font-bold text-sm">Mumbai, India</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6 px-1 border-l-2 border-forest-500">
              Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-forest-400 text-sm transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-forest-500 mr-0 group-hover:mr-2 transition-all"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6 px-1 border-l-2 border-forest-500">
              Connect
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3 group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-forest-400 group-hover:bg-forest-500 group-hover:text-white transition-all">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <span className="text-gray-400 group-hover:text-white transition-colors pt-1 text-xs">
                  Mumbai, Maharashtra, India
                </span>
              </li>
              <li className="flex items-start space-x-3 group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-forest-400 group-hover:bg-forest-500 group-hover:text-white transition-all">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span className="text-gray-400 group-hover:text-white transition-colors pt-1 text-xs">
                  contact@veeru.org
                </span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-8 flex space-x-3">
              {["Facebook", "Twitter", "Instagram"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:bg-forest-500 hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-lg"
                  aria-label={social}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {social === "Facebook" && (
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    )}
                    {social === "Twitter" && (
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    )}
                    {social === "Instagram" && (
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/5 py-8 bg-gray-900">
        <div className="section-container flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-4 text-xs text-gray-500 uppercase tracking-widest">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="w-1 h-1 rounded-full bg-gray-800"></span>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
          </div>

          <div className="text-center space-y-3">
            <p className="text-gray-100 text-[10px] uppercase tracking-widest opacity-80">
              © {currentYear} VEERU. All rights reserved.
            </p>
            <div className="h-px w-8 bg-white/10 mx-auto"></div>
            <div className="text-[9px] uppercase tracking-[0.4em] font-medium text-gray-300 flex flex-col items-center gap-2">
              <span className="opacity-80">Crafted with Excellence by</span>
              <a
                href="https://vernoratech.in"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-4 py-1.5 overflow-hidden rounded-full border border-white/5 bg-white/[0.02] transition-all hover:bg-white/[0.05] hover:border-white/10"
              >
                <span className="relative z-10 text-blue-500 font-black tracking-[0.2em] transition-all group-hover:tracking-[0.3em]">
                  VERNORA<span className="text-white">TECH</span>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
