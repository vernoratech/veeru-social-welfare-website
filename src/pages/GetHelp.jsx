import { Link } from "react-router-dom";
import Section from "../components/common/Section";
import Card from "../components/common/Card";

/**
 * Get Help Page
 * Reassuring, compassionate, non-judgmental
 * Clear categories for different types of help
 * Prominent reassurance messaging
 */
function GetHelp() {
  // Help categories organized clearly
  const helpCategories = [
    {
      id: "education",
      title: "Education Support",
      description:
        "Help with school fees, college costs, books, uniforms, or guidance on scholarships and educational opportunities.",
      examples: [
        "Cannot afford school or college fees",
        "Need books, uniforms, or exam costs",
        "Looking for scholarship opportunities",
        "Facing pressure to drop out of education",
      ],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
    {
      id: "medical",
      title: "Medical & Hospitalization Help",
      description:
        "Guidance on hospital processes, government health schemes, and emotional support during medical emergencies.",
      examples: [
        "Need guidance on hospital admission",
        "Looking for information on health schemes",
        "Need emotional support during hospitalization",
        "Seeking referrals to affordable healthcare",
      ],
      note: "We provide guidance and coordination. We cannot promise instant funding.",
      icon: (
        <svg
          className="w-8 h-8"
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
      id: "legal",
      title: "Legal / Police Case Guidance",
      description:
        "Support if you're facing legal issues, false accusations, or need help understanding your rights.",
      examples: [
        "Facing false accusations or harassment",
        "Dealing with police case complications",
        "Need to understand legal rights",
        "Looking for legal aid or lawyer assistance",
      ],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
          />
        </svg>
      ),
    },
    {
      id: "emergency",
      title: "Emergency or Crisis Support",
      description:
        "Immediate support for urgent situations — family crisis, safety concerns, or when you feel overwhelmed.",
      examples: [
        "Facing a family emergency",
        "In an unsafe living situation",
        "Feeling overwhelmed and need someone to talk to",
        "Need direction during a sudden crisis",
      ],
      urgent: true,
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
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
            Get Help
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            If you're going through a difficult time, you've come to the right
            place. We're here to listen, guide, and support you.
          </p>
        </div>
      </section>

      {/* Prominent Reassurance Message */}
      <section className="bg-forest-700 py-6 md:py-8">
        <div className="section-container text-center">
          <p className="text-white text-lg md:text-xl font-medium">
            You do not need money, references, or documents to contact us.
          </p>
          <p className="text-forest-200 mt-2">
            Just reach out. That's all it takes.
          </p>
        </div>
      </section>

      {/* Reassurance Section */}
      <Section>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-800 mb-4">
            You Are Safe Here
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Whatever you're facing, there's no judgment here. We've worked with
            thousands of people in difficult situations. You are not alone, and
            reaching out is the first step toward finding support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="w-12 h-12 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg
                className="w-6 h-6 text-forest-700"
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
            <h3 className="font-semibold text-navy-800 mb-1">Confidential</h3>
            <p className="text-sm text-gray-600">
              Your story stays private. Always.
            </p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="w-12 h-12 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg
                className="w-6 h-6 text-forest-700"
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
            </div>
            <h3 className="font-semibold text-navy-800 mb-1">No Judgment</h3>
            <p className="text-sm text-gray-600">
              We listen. We don't lecture.
            </p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="w-12 h-12 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg
                className="w-6 h-6 text-forest-700"
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
            <h3 className="font-semibold text-navy-800 mb-1">Human Support</h3>
            <p className="text-sm text-gray-600">Real people who care.</p>
          </div>
        </div>
      </Section>

      {/* Help Categories */}
      <Section
        background="light"
        title="What Do You Need Help With?"
        subtitle="Select the category that best describes your situation"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {helpCategories.map((category) => (
            <div
              key={category.id}
              className={`bg-white rounded-lg p-6 border ${
                category.urgent
                  ? "border-warmth-300 ring-2 ring-warmth-200"
                  : "border-gray-200"
              }`}
            >
              <div className="flex items-start space-x-4">
                <div
                  className={`flex-shrink-0 ${category.urgent ? "text-warmth-600" : "text-forest-700"}`}
                >
                  {category.icon}
                </div>
                <div className="flex-grow">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-lg font-semibold text-navy-800">
                      {category.title}
                    </h3>
                    {category.urgent && (
                      <span className="text-xs bg-warmth-100 text-warmth-700 px-2 py-0.5 rounded font-medium">
                        Urgent Support
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    {category.description}
                  </p>
                  <div className="border-t border-gray-100 pt-3">
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-2">
                      Examples:
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {category.examples.map((example, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-forest-500 mt-1">•</span>
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {category.note && (
                    <p className="mt-3 text-xs text-gray-500 italic bg-gray-50 p-2 rounded">
                      Note: {category.note}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* How to Reach Out */}
      <Section
        title="How to Reach Out"
        subtitle="Choose whichever way is most comfortable for you"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phone */}
            <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
              <div className="w-14 h-14 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-navy-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-navy-800 mb-2">Call Us</h3>
              <p className="text-gray-600 text-sm mb-3">
                Speak to someone directly
              </p>
              <p className="text-navy-700 font-medium">+91 (placeholder)</p>
              <p className="text-xs text-gray-500 mt-2">
                Available 9 AM - 9 PM
              </p>
            </div>

            {/* Email */}
            <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
              <div className="w-14 h-14 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-navy-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-navy-800 mb-2">Email Us</h3>
              <p className="text-gray-600 text-sm mb-3">Write to us anytime</p>
              <p className="text-navy-700 font-medium">help@veeru.org</p>
              <p className="text-xs text-gray-500 mt-2">
                We respond within 24-48 hours
              </p>
            </div>

            {/* In Person */}
            <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
              <div className="w-14 h-14 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-navy-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-navy-800 mb-2">Visit Us</h3>
              <p className="text-gray-600 text-sm mb-3">
                Come meet us in person
              </p>
              <p className="text-navy-700 font-medium text-sm">
                Mumbai, Maharashtra
              </p>
              <p className="text-xs text-gray-500 mt-2">By appointment only</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Final Reassurance */}
      <section className="bg-warmth-700 py-12 md:py-16">
        <div className="section-container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Take the First Step
          </h2>
          <p className="text-warmth-100 text-lg max-w-2xl mx-auto">
            You don't need to have the perfect words. You don't need to explain
            everything. Just reach out — we'll take it from there.
          </p>
        </div>
      </section>
    </div>
  );
}

export default GetHelp;
