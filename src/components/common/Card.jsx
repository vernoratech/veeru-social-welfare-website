/**
 * Card Component
 * Clean, professional card for services, impact stories, etc.
 * Subtle shadows, no flashy effects
 */
function Card({
  children,
  icon,
  title,
  className = "",
  variant = "default",
  ...props
}) {
  const variants = {
    default: "bg-white border border-gray-200 shadow-sm hover:shadow-md",
    highlighted: "bg-navy-50 border border-navy-200",
    warm: "bg-warmth-50 border border-warmth-200",
  };

  return (
    <div
      className={`rounded-lg p-6 transition-shadow duration-200 ${variants[variant]} ${className}`}
      {...props}
    >
      {icon && <div className="mb-4 text-forest-700">{icon}</div>}
      {title && (
        <h3 className="text-lg font-semibold text-navy-800 mb-3">{title}</h3>
      )}
      <div className="text-gray-700">{children}</div>
    </div>
  );
}

export default Card;
