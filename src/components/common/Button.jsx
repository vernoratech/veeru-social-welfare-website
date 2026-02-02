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
  // Base styles for all buttons
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  // Variant-specific styles
  const variants = {
    primary: "bg-navy-800 text-white hover:bg-navy-700 focus:ring-navy-500",
    secondary:
      "bg-forest-700 text-white hover:bg-forest-600 focus:ring-forest-500",
    outline:
      "border-2 border-navy-800 text-navy-800 hover:bg-navy-50 focus:ring-navy-500",
    warmth:
      "bg-warmth-700 text-white hover:bg-warmth-600 focus:ring-warmth-500",
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
