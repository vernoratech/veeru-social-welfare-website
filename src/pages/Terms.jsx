import Section from "../components/common/Section";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ShieldAlert, BookOpen, Scale, FileText } from "lucide-react";

/**
 * Terms and Conditions Page
 * Clean, readable, and legally reassuring for an NGO.
 */
function Terms() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const sections = [
    {
      title: "1. Acceptance of Terms",
      content:
        "By accessing and using the VEERU website and services, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.",
      icon: <BookOpen size={24} className="text-forest-600" />,
    },
    {
      title: "2. Donation Policy",
      content:
        "All donations made to VEERU are voluntary and non-refundable. Contributions are used exclusively for our social welfare projects, including education support, medical aid, and community development.",
      icon: <FileText size={24} className="text-forest-600" />,
    },
    {
      title: "3. Transparency & Accountability",
      content:
        "VEERU is committed to 100% transparency. We maintain detailed records of all contributions and their utilization. Donors can request periodic reports on the impact of their contributions.",
      icon: <ShieldAlert size={24} className="text-forest-600" />,
    },
    {
      title: "4. Legal Compliance",
      content:
        "We operate in full compliance with the laws of India. Any disputes arising from the use of our services shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.",
      icon: <Scale size={24} className="text-forest-600" />,
    },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-navy-800 text-white py-16 md:py-20">
        <div className="section-container">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Terms of Use
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Guidelines and rules for accessing the VEERU website and digital
            platforms.
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
                Questions or Concerns?
              </h3>
              <p className="text-gray-600 mb-6">
                If you have any questions regarding these terms, please feel
                free to reach out to our team.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:contact@veeru.org"
                  className="px-6 py-3 bg-white border border-gray-200 rounded-xl font-bold text-navy-800 hover:border-forest-500 hover:text-forest-600 transition-all shadow-sm"
                >
                  contact@veeru.org
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Terms;
