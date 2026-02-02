import { useState, useEffect } from "react";
import { HandHelping, Users, Heart, ShieldCheck, Clock } from "lucide-react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [viewState, setViewState] = useState("initial"); // 'initial' | 'accepted' | 'declined' | 'closed'
  const [supporterCount, setSupporterCount] = useState(14205); // Fake "live" count

  // Generate random particles for the celebration effect
  const [particles] = useState(() =>
    Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      x: (Math.random() - 0.5) * 200, // Spread X
      y: (Math.random() - 1) * 200, // Spread Y (mostly up)
      rotation: Math.random() * 360,
      color: Math.random() > 0.5 ? "bg-emerald-400" : "bg-rose-400",
      delay: Math.random() * 0.2,
    })),
  );

  useEffect(() => {
    // 24 Hour Logic:
    // 1. Check if consent exists and is valid (not expired)
    // 2. If valid, RENEW it for another 24h from now (keep user logged in essentially)
    // 3. If expired or missing, show popup

    const ONE_DAY_MS = 24 * 60 * 60 * 1000;
    const rawConsent = localStorage.getItem("veeru_consent");
    let shouldShow = false;

    if (!rawConsent) {
      shouldShow = true;
    } else {
      try {
        const consentData = JSON.parse(rawConsent);
        const now = Date.now();

        // Check if expired
        if (now > consentData.expiry) {
          shouldShow = true; // Expired, show popup
          localStorage.removeItem("veeru_consent"); // Clean up
        } else {
          // Valid! RENEW it (extend for another 24h from this visit)
          const newExpiry = now + ONE_DAY_MS;
          const renewedData = { ...consentData, expiry: newExpiry };
          localStorage.setItem("veeru_consent", JSON.stringify(renewedData));
        }
      } catch (e) {
        // If data is corrupt or old format (simple string), show popup to be safe and reset
        shouldShow = true;
      }
    }

    if (shouldShow) {
      const timer = setTimeout(() => setIsVisible(true), 10000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    setViewState("accepted");

    // Animate the counter going up
    const start = supporterCount;
    const end = start + 1;
    setSupporterCount(end);

    const ONE_DAY_MS = 24 * 60 * 60 * 1000;
    const expiry = Date.now() + ONE_DAY_MS;

    const consentData = {
      status: "accepted",
      expiry: expiry,
    };

    localStorage.setItem("veeru_consent", JSON.stringify(consentData));

    // Close after celebration
    setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => setViewState("closed"), 500);
    }, 3500); // Slightly longer to enjoy the effect
  };

  const handleRemindLater = () => {
    setIsVisible(false);
    // Show again after 1 minute (60,000 ms)
    setTimeout(() => {
      setIsVisible(true);
    }, 60000);
  };

  const handleDecline = () => {
    setViewState("declined");
    // Even for decline, we remember it for 24h so we don't spam them
    const ONE_DAY_MS = 24 * 60 * 60 * 1000;
    const expiry = Date.now() + ONE_DAY_MS;
    localStorage.setItem(
      "veeru_consent",
      JSON.stringify({ status: "declined", expiry }),
    );
    setTimeout(() => setIsVisible(false), 1000);
  };

  if (!isVisible && viewState === "closed") return null;

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px] transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      />

      <div
        className={`fixed bottom-4 left-0 right-0 md:left-auto md:right-6 z-50 
        mx-4 md:mx-0 md:w-[420px] bg-white/95 backdrop-blur-xl 
        shadow-[0_20px_60px_-10px_rgba(0,0,0,0.3)] rounded-2xl border border-white/40
        transform transition-all duration-500 ease-out overflow-hidden
        ${isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-10 opacity-0 scale-95"}
        `}
      >
        {/* Celebration Particles (Hidden unless accepted) */}
        {viewState === "accepted" && (
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-10">
            {particles.map((p) => (
              <div
                key={p.id}
                className={`absolute w-3 h-3 rounded-full ${p.color} animate-out fade-out zoom-out duration-1000 ease-out`}
                style={{
                  "--tw-enter-translate-x": `${p.x}px`,
                  "--tw-enter-translate-y": `${p.y}px`,
                  "--tw-enter-opacity": "0",
                  animationName: "burst",
                  animationDuration: "1s",
                  animationFillMode: "forwards",
                  animationDelay: `${p.delay}s`,
                }}
              />
            ))}
            <style>{`
              @keyframes burst {
                0% { transform: translate(0,0) scale(0); opacity: 1; }
                80% { opacity: 1; }
                100% { transform: translate(var(--tw-enter-translate-x), var(--tw-enter-translate-y)) scale(0); opacity: 0; }
              }
            `}</style>
          </div>
        )}

        <div
          className={`h-1.5 bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-600 transition-all duration-[3000ms] ease-linear ${viewState === "accepted" ? "w-full" : "w-0"}`}
        />

        <div className="p-6 relative">
          {/* STATE 1: The Request */}
          {viewState === "initial" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* Header with Social Proof */}
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl shrink-0">
                  <HandHelping size={26} strokeWidth={2.5} />
                </div>
                <div className="bg-gray-100/80 px-3 py-1.5 rounded-full flex items-center gap-2 text-xs font-semibold text-gray-600">
                  <Users size={14} />
                  <span>
                    {supporterCount.toLocaleString()} supporters joined
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-black text-gray-900 leading-tight tracking-tight">
                  Make your visit count.
                </h3>
                <p className="text-gray-600 text-[15px] mt-2 leading-relaxed">
                  By accepting, you help us optimize our aid network, ensuring
                  resources reach the right people faster.
                  <span className="font-medium text-emerald-700 block mt-1">
                    It costs you nothing to help.
                  </span>
                </p>
              </div>

              <div className="flex flex-col gap-3 mt-6">
                <button
                  onClick={handleAccept}
                  className="group relative w-full py-3.5 px-4 bg-gray-900 hover:bg-emerald-600 active:scale-[0.98] text-white rounded-xl font-bold text-lg transition-all duration-300 shadow-xl shadow-gray-200 hover:shadow-emerald-500/30 flex items-center justify-center gap-2 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Heart
                      size={20}
                      className="group-hover:fill-current group-hover:scale-110 transition-all duration-300"
                    />
                    Stand with Veeru
                  </span>
                  {/* Button Shine Effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                </button>

                <button
                  onClick={handleRemindLater}
                  className="group relative w-full py-3 px-4 bg-white hover:bg-gray-50 active:scale-[0.98] text-gray-700 border-2 border-gray-200 hover:border-gray-300 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Clock
                    size={20}
                    className="text-gray-400 group-hover:text-gray-600 transition-colors"
                  />
                  <span>Remind me later</span>
                </button>

                <div className="flex items-center justify-between px-2 pt-1">
                  <button
                    onClick={handleDecline}
                    className="text-xs font-medium text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    No thanks, just browsing
                  </button>
                  <a
                    href="#"
                    className="text-xs font-medium text-gray-400 hover:text-emerald-600 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* STATE 2: The Hero Moment */}
          {viewState === "accepted" && (
            <div className="flex flex-col items-center justify-center py-6 text-center animate-in zoom-in-95 duration-500">
              <div className="mb-5 relative">
                <div className="absolute inset-0 bg-rose-100 rounded-full animate-ping opacity-75 duration-1000"></div>
                <div className="absolute inset-0 bg-rose-200 rounded-full animate-pulse opacity-50"></div>
                <div className="relative bg-gradient-to-br from-rose-500 to-pink-600 p-5 rounded-full text-white shadow-lg shadow-rose-200">
                  <Heart
                    size={42}
                    fill="currentColor"
                    strokeWidth={0}
                    className="animate-bounce"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-2xl font-black text-gray-800">
                  You're amazing!
                </h3>
                <p className="text-emerald-600 font-bold text-sm bg-emerald-50 inline-block px-3 py-1 rounded-full">
                  You are supporter #{supporterCount.toLocaleString()}
                </p>
              </div>

              <p className="text-gray-500 text-sm mt-4 max-w-[280px] leading-relaxed">
                Thank you for standing with us. Your action helps us move
                forward.
              </p>
            </div>
          )}

          {/* STATE 3: The Polite Decline */}
          {viewState === "declined" && (
            <div className="flex flex-col items-center justify-center py-8 text-center animate-in fade-in duration-300">
              <ShieldCheck size={40} className="text-gray-300 mb-3" />
              <p className="text-gray-600 font-medium text-sm">
                Understood. Minimal mode active.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CookieConsent;
