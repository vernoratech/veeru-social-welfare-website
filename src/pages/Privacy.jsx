import Section from "../components/common/Section";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ShieldCheck, Eye, Database, Lock } from "lucide-react";

/**
 * Privacy Policy Page
 * Focuses on trust, data protection, and donor privacy.
 */
function Privacy() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const sections = [
    {
      title: "1. Information We Collect",
      content:
        "We collect basic contact information (name, email, phone number) when you donate or volunteer. This is strictly used for communication and processing your support.",
      icon: <Database size={24} className="text-forest-600" />,
    },
    {
      title: "2. How We Use Your Data",
      content:
        "Your data is used to issue donation receipts, send organization updates (if opted-in), and coordinate volunteer activities. We never sell or rent your person information to third parties.",
      icon: <Eye size={24} className="text-forest-600" />,
    },
    {
      title: "3. Data Security",
      content:
        "We implement industry-standard security measures to protect your data. Payment processing is handled by secure, encrypted third-party UPI and banking gateways.",
      icon: <Lock size={24} className="text-forest-600" />,
    },
    {
      title: "4. Your Rights",
      content:
        "You have the right to request access to your data, correction of any inaccuracies, or deletion from our communication lists at any time.",
      icon: <ShieldCheck size={24} className="text-forest-600" />,
    },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-navy-800 text-white py-16 md:py-20">
        <div className="section-container">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            How we protect your data and respect your privacy at VEERU.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-navy max-w-none">
            <p className="text-gray-600 mb-12 italic border-l-4 border-forest-500 pl-6 py-2">
              Last Updated: February 2, 2026
            </p>

            <div className="space-y-12">
              {sections.map((section, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="mt-1 w-12 h-12 rounded-2xl bg-forest-50 flex items-center justify-center shrink-0 transition-all group-hover:bg-forest-100">
                    {section.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-navy-800 mb-4">
                      {section.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {section.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 bg-gray-50 rounded-3xl border border-gray-100">
              <h3 className="font-bold text-navy-800 mb-4 uppercase tracking-wider text-sm">
                Privacy Matters
              </h3>
              <p className="text-gray-600 mb-6">
                If you have any concerns about how your data is being handled,
                please don't hesitate to reach out.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:privacy@veeru.org"
                  className="px-6 py-3 bg-white border border-gray-200 rounded-xl font-bold text-navy-800 hover:border-forest-500 hover:text-forest-600 transition-all shadow-sm"
                >
                  privacy@veeru.org
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Privacy;
