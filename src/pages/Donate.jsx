import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Section from "../components/common/Section";
import Button from "../components/common/Button";
import Card from "../components/common/Card";
import {
  Heart,
  ShieldCheck,
  Smile,
  Gift,
  Lock,
  X,
  Mail,
  Phone,
  QrCode,
  PartyPopper,
  Loader2,
  User,
} from "lucide-react";

/**
 * Donate Page
 * High-conversion donation flow with trust signals and impact visualization.
 */
function Donate() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const [frequency, setFrequency] = useState("monthly");
  const [selectedAmount, setSelectedAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState("");

  // Modal flow states: 'closed' | 'age' | 'input' | 'qr' | 'thanks'
  const [modalStep, setModalStep] = useState("closed");
  const [isExiting, setIsExiting] = useState(false);
  const [isGeneratingQR, setIsGeneratingQR] = useState(false);
  const [isQRImageLoading, setIsQRImageLoading] = useState(true);
  const [contactInput, setContactInput] = useState("");
  const [nameInput, setNameInput] = useState("");

  // Celebration particles
  const [particles] = useState(() =>
    Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: (Math.random() - 0.5) * 400,
      y: (Math.random() - 1) * 400,
      color: ["bg-emerald-400", "bg-rose-400", "bg-yellow-400", "bg-blue-400"][
        Math.floor(Math.random() * 4)
      ],
      delay: Math.random() * 0.3,
      size: Math.random() * 8 + 4,
    })),
  );

  const amounts = {
    once: [500, 1000, 2500, 5000],
    monthly: [300, 500, 1000, 2000],
  };

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  const getActiveAmount = () => customAmount || selectedAmount;

  const handleDonateClick = () => {
    setModalStep("age");
    setIsExiting(false);
    setContactInput("");
    setNameInput("");
  };

  const isValidInput = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    const isContactValid =
      emailRegex.test(contactInput) || phoneRegex.test(contactInput);
    const isNameValid = nameInput.trim().length >= 2;
    return isContactValid && isNameValid;
  };

  const handleGenerateQR = () => {
    if (isValidInput()) {
      setIsGeneratingQR(true);
      setIsQRImageLoading(true); // Reset image loading state
      // Simulate backend/generation delay
      setTimeout(() => {
        setIsGeneratingQR(false);
        setModalStep("qr");
      }, 1500);
    }
  };

  const handleDone = () => {
    setModalStep("thanks");
    // Auto-close after celebration
    setTimeout(() => {
      setModalStep("closed");
    }, 4000);
  };

  const closeModal = () => {
    setIsExiting(true);
    setTimeout(() => {
      setModalStep("closed");
      setIsExiting(false);
    }, 500); // Match duration-500
  };

  return (
    <>
      {/* Hero / Main Donation Interface */}
      <section className="relative min-h-screen pt-20 pb-20 bg-navy-900 overflow-hidden">
        {/* Background Elements - Using direct image for better reliability */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=2000"
            alt=""
            className="w-full h-full object-cover opacity-10 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-900/80 to-navy-900/40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/80 to-transparent"></div>
        </div>

        <div className="section-container relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8 animate-in slide-in-from-left duration-700">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-500/20 text-forest-300 text-xs font-bold uppercase tracking-widest border border-forest-500/30">
              <Heart size={14} className="fill-current" />
              <span>Power the Change</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight text-white">
              Invest in <span className="text-forest-400">Humanity.</span>
              <br />
              Create Lasting{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-400 to-emerald-300">
                Impact.
              </span>
            </h1>

            <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
              Your donation isn't just charity; it's a seed for a better future.
              We operate with 100% transparency, ensuring every rupee creates
              real-world value for those who need it most.
            </p>

            {/* Impact Metrics (Trust Signals) */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-white/10">
              <div>
                <div className="text-2xl font-black text-white">12K+</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">
                  Lives Impacted
                </div>
              </div>
              <div>
                <div className="text-2xl font-black text-white">100%</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">
                  Transparency
                </div>
              </div>
              <div>
                <div className="text-2xl font-black text-white">80G</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">
                  Tax Benefit
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-forest-300 opacity-80">
              <ShieldCheck size={18} />
              <span>Secure, encrypted payment processing.</span>
            </div>
          </div>

          {/* Right Content: Donation Widget */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl shadow-navy-900/50 animate-in slide-in-from-right duration-700 delay-100 border border-white/10">
            <div className="flex justify-center mb-8 bg-gray-100 p-1 rounded-xl">
              <button
                onClick={() => setFrequency("once")}
                className={`flex-1 py-3 px-6 rounded-lg text-sm font-bold uppercase tracking-wide transition-all ${
                  frequency === "once"
                    ? "bg-white text-navy-800 shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Give Once
              </button>
              <button
                onClick={() => setFrequency("monthly")}
                className={`flex-1 py-3 px-6 rounded-lg text-sm font-bold uppercase tracking-wide transition-all ${
                  frequency === "monthly"
                    ? "bg-white text-navy-800 shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Monthly{" "}
                <span className="text-[10px] ml-1 px-1.5 py-0.5 bg-forest-100 text-forest-700 rounded-full">
                  ❤ Most helpful
                </span>
              </button>
            </div>

            <div className="space-y-6">
              <div className="text-center mb-2">
                <span className="text-gray-500 text-sm font-medium">
                  Select Amount (INR)
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {amounts[frequency].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => handleAmountSelect(amount)}
                    className={`py-4 rounded-xl border-2 text-lg font-bold flex items-center justify-center transition-all duration-200 ${
                      selectedAmount === amount && !customAmount
                        ? "border-forest-500 bg-forest-50 text-forest-700 scale-[1.02]"
                        : "border-gray-100 hover:border-forest-200 text-gray-700 bg-white hover:bg-gray-50"
                    }`}
                  >
                    ₹ {amount.toLocaleString()}
                  </button>
                ))}
              </div>

              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">
                  ₹
                </span>
                <input
                  type="number"
                  placeholder="Enter custom amount"
                  value={customAmount}
                  onChange={handleCustomChange}
                  className="w-full pl-8 pr-4 py-3 bg-gray-50 border-2 border-transparent focus:border-forest-500 focus:bg-white rounded-xl outline-none font-bold text-gray-700 transition-all placeholder:font-normal"
                />
              </div>

              <div className="pt-2">
                <Button
                  variant="primary"
                  className="w-full text-lg py-5 shadow-xl shadow-forest-500/20 group"
                  onClick={handleDonateClick}
                >
                  Donate ₹{parseInt(getActiveAmount() || 0).toLocaleString()}{" "}
                  {frequency === "monthly" ? "/ month" : ""}
                  <Heart
                    size={20}
                    className="ml-2 group-hover:scale-110 transition-transform fill-current"
                  />
                </Button>
                <p className="text-center text-xs text-gray-400 mt-3 flex items-center justify-center gap-1">
                  <Lock size={12} /> 256-bit SSL Encrypted Payment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <Section className="bg-gray-50">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-black text-navy-800 mb-6">
            See the power of your contribution
          </h2>
          <p className="text-gray-600">
            We maximize the value of every rupee. Here's exactly what your
            donation can achieve on the ground.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Educate a Child",
              amount: "₹ 500",
              desc: "Provides school supplies and books for one child for an entire semester.",
              icon: Gift,
              color: "bg-orange-100 text-orange-600",
            },
            {
              title: "Family Ration Kit",
              amount: "₹ 1,500",
              desc: "Feeds a family of four with essential groceries for two weeks.",
              icon: Smile,
              color: "bg-forest-100 text-forest-600",
            },
            {
              title: "Medical Camp",
              amount: "₹ 5,000",
              desc: "Sponsors basic check-ups and medicines for 50 people in a rural village.",
              icon: Heart,
              color: "bg-rose-100 text-rose-600",
            },
          ].map((item, i) => (
            <Card
              key={i}
              className="hover:-translate-y-2 text-center p-8 border-none shadow-lg"
            >
              <div
                className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6 ${item.color}`}
              >
                <item.icon size={32} />
              </div>
              <div className="text-forest-600 font-bold mb-2">
                {item.amount}
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ==================== MODAL OVERLAY ==================== */}
      {modalStep !== "closed" && (
        <div
          className={`fixed inset-0 z-[9999] flex items-center justify-center bg-navy-900/80 backdrop-blur-md transition-all duration-500 ease-in-out ${
            isExiting ? "opacity-0 invisible" : "opacity-100 visible"
          }`}
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          {/* AGE VERIFICATION MODAL */}
          {modalStep === "age" && (
            <div
              className={`bg-white rounded-3xl p-10 w-full max-w-md mx-4 shadow-2xl relative text-center transition-all duration-500 ease-out ${
                isExiting
                  ? "opacity-0 scale-95 translate-y-4"
                  : "opacity-100 scale-100 translate-y-0"
              } animate-in fade-in zoom-in-95 slide-in-from-bottom-8`}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100"
              >
                <X size={20} />
              </button>

              <div className="w-20 h-20 mx-auto bg-warmth-100 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck size={40} className="text-warmth-600" />
              </div>

              <h3 className="text-2xl font-black text-navy-800 mb-4">
                Age Verification
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                To continue with the donation, please confirm that you are at
                least 18 years of age.
              </p>

              <div className="flex flex-col gap-3">
                <Button
                  onClick={() => setModalStep("input")}
                  variant="secondary"
                  className="w-full !py-4 shadow-xl"
                >
                  Yes, I am 18+
                </Button>
                <Button
                  onClick={closeModal}
                  className="w-full !py-4 bg-gray-100 text-gray-600 hover:bg-gray-200"
                >
                  No, I am under 18
                </Button>
              </div>
            </div>
          )}

          {/* INPUT MODAL */}
          {modalStep === "input" && (
            <div
              className={`bg-white rounded-3xl p-8 w-full max-w-md mx-4 shadow-2xl relative transition-all duration-500 ease-out ${
                isExiting
                  ? "opacity-0 scale-95 translate-y-4"
                  : "opacity-100 scale-100 translate-y-0"
              } animate-in fade-in zoom-in-95 slide-in-from-bottom-8`}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100"
              >
                <X size={20} />
              </button>

              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto bg-forest-100 rounded-full flex items-center justify-center mb-4">
                  <QrCode size={32} className="text-forest-600" />
                </div>
                <h3 className="text-2xl font-black text-navy-800">
                  Almost There!
                </h3>
                <p className="text-gray-500 mt-2 flex flex-col sm:flex-row items-center justify-center gap-2 text-center text-sm md:text-base">
                  <span>
                    Enter your email or phone to generate your payment QR code.
                  </span>

                  <div className="group relative inline-flex">
                    <button className="text-gray-400 hover:text-forest-600 transition-colors">
                      <div className="w-5 h-5 border border-current rounded-full flex items-center justify-center text-xs font-serif italic font-bold">
                        i
                      </div>
                    </button>
                    {/* Tooltip - Adjusted for mobile safety */}
                    <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-56 sm:w-64 bg-navy-800 text-white text-xs p-3 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none z-50 text-center leading-relaxed">
                      We will send you the payment receipt or donation bill on
                      your provided contact details.
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-navy-800"></div>
                    </div>
                  </div>
                </p>
              </div>

              <div className="space-y-4">
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <User size={18} />
                  </div>
                  <input
                    type="text"
                    placeholder="Full Name As Per UPI"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-100 focus:border-forest-500 focus:bg-white rounded-xl outline-none font-medium text-gray-700 transition-all"
                  />
                </div>

                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <Mail size={18} />
                  </div>
                  <input
                    type="text"
                    placeholder="Email or 10-digit Phone"
                    value={contactInput}
                    onChange={(e) => setContactInput(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-100 focus:border-forest-500 focus:bg-white rounded-xl outline-none font-medium text-gray-700 transition-all"
                  />
                </div>

                <Button
                  onClick={handleGenerateQR}
                  disabled={!isValidInput() || isGeneratingQR}
                  variant={
                    isValidInput() && !isGeneratingQR ? "secondary" : "primary"
                  }
                  className={`w-full !py-4 ${
                    !isValidInput() || isGeneratingQR
                      ? "!bg-gray-200 !text-gray-400 !cursor-not-allowed !shadow-none"
                      : ""
                  }`}
                >
                  {isGeneratingQR ? (
                    <>
                      <Loader2 size={24} className="animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <QrCode size={20} />
                      Generate QR
                    </>
                  )}
                </Button>
              </div>
            </div>
          )}

          {/* QR CODE MODAL */}
          {modalStep === "qr" && (
            <div
              className={`bg-white rounded-3xl p-8 w-full max-w-md mx-4 shadow-2xl relative text-center transition-all duration-500 ease-out ${
                isExiting
                  ? "opacity-0 scale-95 translate-y-4"
                  : "opacity-100 scale-100 translate-y-0"
              } animate-in fade-in zoom-in-95 slide-in-from-bottom-8`}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100"
              >
                <X size={20} />
              </button>

              <h3 className="text-2xl font-black text-navy-800 mb-2">
                Scan to Pay
              </h3>
              <p className="text-gray-500 mb-6">
                Donating ₹{parseInt(getActiveAmount() || 0).toLocaleString()}{" "}
                {frequency === "monthly" ? "/ month" : ""}
              </p>

              {/* Dynamic QR Code Image with Encoding */}
              <div className="bg-gray-50 p-4 rounded-2xl mb-6 border border-gray-100 h-56 w-56 flex items-center justify-center relative mx-auto">
                {isQRImageLoading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 rounded-2xl z-10">
                    <Loader2
                      size={32}
                      className="animate-spin text-forest-500 mb-2"
                    />
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                      Fetching QR...
                    </span>
                  </div>
                )}
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
                    `upi://pay?pa=veeru@upi&pn=VeeruNGO&am=${getActiveAmount()}`,
                  )}`}
                  alt="Payment QR Code"
                  className={`w-48 h-48 mx-auto transition-opacity duration-300 ${isQRImageLoading ? "opacity-0" : "opacity-100"}`}
                  onLoad={() => setIsQRImageLoading(false)}
                  onError={(e) => {
                    console.error("QR Code failed to load");
                    setIsQRImageLoading(false);
                  }}
                />
              </div>

              <p className="text-xs text-gray-400 mb-6">
                Use any UPI app to scan and complete your donation.
              </p>

              <Button
                onClick={handleDone}
                variant="secondary"
                className="w-full !py-4 shadow-xl"
              >
                <Heart size={20} className="fill-current" />
                Done
              </Button>
            </div>
          )}

          {/* THANK YOU / CELEBRATION MODAL */}
          {modalStep === "thanks" && (
            <div
              className={`bg-white rounded-3xl p-10 w-full max-w-md mx-4 shadow-2xl relative text-center overflow-hidden transition-all duration-500 ease-out ${
                isExiting
                  ? "opacity-0 scale-95 translate-y-4"
                  : "opacity-100 scale-100 translate-y-0"
              } animate-in fade-in zoom-in-95 slide-in-from-bottom-8`}
            >
              {/* Celebration Particles */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                {particles.map((p) => (
                  <div
                    key={p.id}
                    className={`absolute rounded-full ${p.color}`}
                    style={{
                      width: p.size,
                      height: p.size,
                      animationName: "burst",
                      animationDuration: "1.5s",
                      animationFillMode: "forwards",
                      animationDelay: `${p.delay}s`,
                      "--tx": `${p.x}px`,
                      "--ty": `${p.y}px`,
                    }}
                  />
                ))}
                <style>{`
                  @keyframes burst {
                    0% { transform: translate(0,0) scale(0); opacity: 1; }
                    70% { opacity: 1; }
                    100% { transform: translate(var(--tx), var(--ty)) scale(1); opacity: 0; }
                  }
                `}</style>
              </div>

              <div className="relative z-10">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-rose-200 animate-bounce">
                  <PartyPopper size={48} className="text-white" />
                </div>

                <h3 className="text-3xl font-black text-navy-800 mb-2">
                  You're Amazing!
                </h3>
                <p className="text-gray-500 text-lg">
                  Thank you for your generous contribution. Together, we're
                  building a better tomorrow.
                </p>

                <div className="mt-8 text-forest-600 font-bold text-sm uppercase tracking-widest">
                  ❤ VEERU Team
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Donate;
