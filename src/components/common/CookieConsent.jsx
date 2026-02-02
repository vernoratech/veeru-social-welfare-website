import { useState, useEffect } from "react";
import "./CookieConsent.css";

/**
 * CookieConsent Component
 * A mission-driven consent popup.
 * Frames acceptance as a supportive act ("Accept & Support").
 * Shows a gratification message ("Thank You") before closing.
 */
const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);

  useEffect(() => {
    // Check local storage
    const consent = localStorage.getItem("veeru_consent");
    if (!consent) {
      // Delay showing it slightly so it doesn't clash with preloader
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 5000); // Wait for preloader (4s) + 1s
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    setIsAccepted(true); // Trigger "Thank You" state

    // Save to local storage
    localStorage.setItem("veeru_consent", "true");

    // Close after showing the thank you message
    setTimeout(() => {
      setIsVisible(false);
    }, 2500);
  };

  if (!isVisible) return null;

  return (
    <div className={`cookie-consent-container ${isAccepted ? "accepted" : ""}`}>
      <div className="cookie-content">
        {!isAccepted ? (
          <>
            <div className="cookie-text">
              <h3>Help Us Reach More People</h3>
              <p>
                We use cookies to ensure our resources go to those who truly
                need them. By accepting, you help us optimize our aid delivery.
              </p>
            </div>
            <div className="cookie-actions">
              <button onClick={handleAccept} className="btn-support">
                <span className="icon">🤝</span> Accept & Support
              </button>
            </div>
          </>
        ) : (
          <div className="thank-you-message">
            <span className="heart-icon">❤️</span>
            <h3>Thank you for standing with us.</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieConsent;
