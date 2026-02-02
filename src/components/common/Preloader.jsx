import { useState, useEffect } from "react";

/**
 * Preloader Component
 * Creates an overlapping curtain animation that opens from the center.
 * Duration: 4 seconds (controlled via CSS and state)
 */
const Preloader = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Start opening the curtain after a short delay
    const startTimer = setTimeout(() => {
      setIsHidden(true);
    }, 500); // Wait 0.5s before starting the 4s animation

    // Remove component from DOM after animation completes
    // 0.5s initial + 4s transition = 4.5s
    const removeTimer = setTimeout(() => {
      setShouldRender(false);
    }, 5000);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      className={`preloader-container ${isHidden ? "preloader-hidden" : ""}`}
    >
      {/* Curtain Panels */}
      <div className="curtain-panel curtain-panel-left"></div>
      <div className="curtain-panel curtain-panel-right"></div>

      {/* Center Content */}
      <div className="preloader-content">
        <h1 className="preloader-logo">VEERU</h1>
        <p className="preloader-subtitle">Solidarity • Empowerment • Change</p>
      </div>
    </div>
  );
};

export default Preloader;
