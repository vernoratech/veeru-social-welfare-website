/**
 * Section Component
 * Consistent section wrapper for pages
 * Provides proper spacing, background options, and structure
 */
function Section({
  children,
  title,
  subtitle,
  className = "",
  background = "white",
  id,
  ...props
}) {
  const backgrounds = {
    white: "bg-white",
    light: "bg-gray-50",
    navy: "bg-navy-800 text-white",
    forest: "bg-forest-700 text-white",
  };

  const titleColor =
    background === "white" || background === "light"
      ? "text-navy-800"
      : "text-white";

  const subtitleColor =
    background === "white" || background === "light"
      ? "text-gray-600"
      : "text-gray-200";

  return (
    <section
      id={id}
      className={`section-padding ${backgrounds[background]} ${className}`}
      {...props}
    >
      <div className="section-container">
        {(title || subtitle) && (
          <div className="text-center mb-12 md:mb-16">
            {title && (
              <h2
                className={`text-2xl md:text-3xl lg:text-4xl font-bold ${titleColor} mb-4`}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={`text-lg max-w-3xl mx-auto ${subtitleColor}`}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export default Section;
