import { useState, useEffect, memo } from "react";
import { useLocation } from "react-router-dom";
import "../common/Preloader.css";

/**
 * PageTransition Component
 * Triggers the "Opening from Top" curtain animation on every route change.
 */
const PageTransition = memo(() => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Reset state to show curtain (covering the screen)
    setIsTransitioning(false);

    // Start opening after a tiny delay to ensure route has switched
    const startTimer = setTimeout(() => {
      setIsTransitioning(true);
    }, 100);

    // Lock body during animation
    document.body.classList.add("preloader-active");
    const lockTimer = setTimeout(() => {
      document.body.classList.remove("preloader-active");
    }, 4100); // 4s animation + 100ms delay

    return () => {
      clearTimeout(startTimer);
      clearTimeout(lockTimer);
      document.body.classList.remove("preloader-active");
    };
  }, []); // Run ONLY on mount (initial reload), not on navigation

  return (
    <div
      className={`preloader-container ${isTransitioning ? "preloader-hidden" : ""}`}
    >
      <div className="curtain-panel curtain-panel-left"></div>
      <div className="curtain-panel curtain-panel-right"></div>

      {/* Full branding reveal during transition */}
      <div className="preloader-content">
        <h1 className="preloader-logo">VEERU</h1>
        <p className="preloader-subtitle">Solidarity • Empowerment • Change</p>
      </div>
    </div>
  );
});

PageTransition.displayName = "PageTransition";

export default PageTransition;
