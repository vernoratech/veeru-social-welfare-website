import Section from "../components/common/Section";
import Card from "../components/common/Card";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * About Page
 * Explains why VEERU exists, core values, and ethical approach
 * Includes trust signals for NGO credibility
 */
function About() {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Core values of VEERU
  const values = [
    {
      title: "Compassion First",
      description:
        "Every person who comes to us is treated with kindness and understanding. We don't judge circumstances — we help.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
    {
      title: "Dignity & Respect",
      description:
        "We believe that seeking help is a strength. Every interaction preserves the dignity of those we serve.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
    {
      title: "Transparency",
      description:
        "We operate with complete honesty about what we can and cannot do. No false promises, only genuine effort.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      ),
    },
    {
      title: "Community Partnership",
      description:
        "We work with communities, not for them. Sustainable change comes from collaboration, not charity.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      title: "Confidentiality",
      description:
        "Every story shared with us remains private. Trust is the foundation of everything we do.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
    },
    {
      title: "Non-Discrimination",
      description:
        "We serve everyone regardless of religion, caste, gender, or background. Help has no conditions.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-navy-800 text-white py-16 md:py-20">
        <div className="section-container">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            About VEERU
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Understanding who we are, why we exist, and how we work to support
            communities.
          </p>
        </div>
      </section>

      {/* Why VEERU Exists */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif-heading text-navy-800 mb-6 border-b-2 border-forest-100 pb-4 inline-block">
              Why VEERU Exists
            </h2>
            <div className="space-y-6 text-gray-700 mission-text italic border-l-2 border-forest-600 pl-6">
              <p>
                VEERU was born from a simple observation: too many people face
                their hardest moments alone — not because help doesn't exist,
                but because they don't know where to find it, or they're afraid
                to ask.
              </p>
            </div>
            <div className="mt-8 space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
              <p>
                We saw students dropping out of school because of fees their
                families couldn't pay. We saw families struggling to afford
                hospital bills during medical emergencies. We saw innocent
                people trapped in legal troubles without anyone to guide them.
              </p>
              <p>
                VEERU exists to be the helping hand that reaches out first — to
                stand alongside people, not above them, and to provide
                practical, dignified support when it's needed most.
              </p>
            </div>

            {/* Trust Signals */}
            <div className="mt-8 p-6 bg-gray-50 border-2 border-gray-100">
              <p className="text-xs font-bold uppercase tracking-widest text-navy-800 mb-3">
                Organization Details
              </p>
              <div className="space-y-2">
                <p className="text-sm text-gray-600 flex items-center">
                  <span className="w-2 h-2 bg-forest-600 rounded-full mr-3"></span>
                  Working Since: 2018
                </p>
                <p className="text-sm text-gray-600 flex items-center">
                  <span className="w-2 h-2 bg-forest-600 rounded-full mr-3"></span>
                  Registered Social Welfare Organization
                </p>
                <p className="text-sm text-gray-600 flex items-center">
                  <span className="w-2 h-2 bg-forest-600 rounded-full mr-3"></span>
                  Operating Region: Mumbai, Maharashtra, India
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="image-offset-border">
              <img
                src="/images/assets/team-workshop.png"
                alt="VEERU Team at Work"
                className="w-full organic-mask shadow-2xl"
              />
            </div>
            {/* Floating Quote Accent */}
            <div className="absolute -bottom-6 -right-6 bg-forest-700 text-white p-6 organic-mask shadow-xl hidden md:block max-w-[200px]">
              <p className="text-sm italic text-white">
                "Solidarity is our strongest currency."
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Our Approach */}
      <Section
        background="light"
        title="How We Work"
        subtitle="Our approach is grounded in respect, honesty, and community partnership"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg">
              <div className="w-16 h-16 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-forest-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-navy-800 mb-2">
                Community-Driven
              </h3>
              <p className="text-gray-600 text-sm">
                We work alongside communities, not above them. Every decision is
                made with input from those we serve.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg">
              <div className="w-16 h-16 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-forest-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-navy-800 mb-2">
                Confidential & Respectful
              </h3>
              <p className="text-gray-600 text-sm">
                Your story stays with us. We treat every person with dignity and
                complete confidentiality.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg">
              <div className="w-16 h-16 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-forest-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-navy-800 mb-2">
                Non-Discriminatory
              </h3>
              <p className="text-gray-600 text-sm">
                We help everyone who needs support, regardless of background,
                religion, caste, or circumstances.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Core Values */}
      <Section
        title="Our Core Values"
        subtitle="These principles guide everything we do"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <Card
              key={index}
              icon={<span className="text-forest-700">{value.icon}</span>}
              title={value.title}
            >
              <p className="text-sm text-gray-600">{value.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Ethical Approach */}
      <Section background="navy">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Our Ethical Commitment
          </h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            We are transparent about our capabilities and limitations. We don't
            make promises we can't keep. We don't use people's stories for
            publicity without consent. We don't measure success in numbers alone
            — we measure it in the trust people place in us.
          </p>
          <div className="inline-block border-l-4 border-forest-400 pl-4 text-left">
            <p className="text-white italic">
              "If we can help, we will. If we can't, we'll be honest about it
              and try to point you in the right direction."
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default About;
