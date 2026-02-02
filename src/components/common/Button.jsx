import { Link } from "react-router-dom";

/**
 * Button Component
 * Consistent button styling across the site
 * Variants: primary (navy), secondary (green), outline
 * Non-aggressive, trust-first design
 */
function Button({
  children,
  variant = "primary",
  to,
  href,
  type = "button",
  className = "",
  ...props
}) {
  // Base styles for all buttons - Increased font weight and better transitions
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 font-bold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95";

  // Variant-specific styles
  const variants = {
    primary:
      "bg-navy-800 text-white hover:bg-navy-900 focus:ring-navy-500 shadow-md",
    secondary:
      "bg-forest-500 text-white hover:bg-forest-600 focus:ring-forest-400 shadow-md shadow-forest-200/20",
    outline:
      "border-2 border-navy-800 text-navy-800 hover:bg-navy-50 focus:ring-navy-500",
    warmth:
      "bg-warmth-700 text-white hover:bg-warmth-600 focus:ring-warmth-500 shadow-md",
    white:
      "bg-white text-navy-800 hover:bg-gray-50 focus:ring-white shadow-xl hover:shadow-2xl",
    ghost:
      "bg-transparent text-white hover:bg-white/10 border border-white/20 focus:ring-white",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  // Render as Link for internal navigation
  if (to) {
    return (
      <Link to={to} className={combinedStyles} {...props}>
        {children}
      </Link>
    );
  }

  // Render as anchor for external links
  if (href) {
    return (
      <a href={href} className={combinedStyles} {...props}>
        {children}
      </a>
    );
  }

  // Render as button
  return (
    <button type={type} className={combinedStyles} {...props}>
      {children}
    </button>
  );
}

export default Button;
