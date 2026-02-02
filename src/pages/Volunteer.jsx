import Section from "../components/common/Section";
import Button from "../components/common/Button";
import Card from "../components/common/Card";

/**
 * Volunteer Page
 * Why volunteers matter, how to help, and realistic expectations
 * Non-intimidating flow with clear commitment information
 */
function Volunteer() {
  // Ways to volunteer
  const volunteerRoles = [
    {
      title: "Field Volunteers",
      description:
        "Work directly with communities — visiting families, supporting students, and coordinating on-ground activities.",
      commitment: "4-8 hours per week, minimum 3 months",
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
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      title: "Skills-Based Volunteers",
      description:
        "Contribute your professional skills — legal, medical, educational, or technical expertise to help those in need.",
      commitment: "Flexible, project-based",
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
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      title: "Administrative Support",
      description:
        "Help with documentation, coordination, communication, and organizational work that keeps VEERU running.",
      commitment: "2-4 hours per week",
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
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      title: "Awareness & Outreach",
      description:
        "Help spread awareness about social issues and VEERU's work through community engagement and outreach.",
      commitment: "Event-based, flexible",
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
            d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
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
            Volunteer With Us
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Your time and skills can make a real difference. Join VEERU's
            community of volunteers and be part of meaningful change.
          </p>
        </div>
      </section>

      {/* Why Volunteers Matter */}
      <Section
        title="Why Volunteers Matter"
        subtitle="Volunteers are the heart of VEERU's work"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
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
                Community Connection
              </h3>
              <p className="text-gray-600 text-sm">
                Volunteers bridge the gap between those who need help and
                available resources.
              </p>
            </div>
            <div>
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
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-navy-800 mb-2">
                Human Touch
              </h3>
              <p className="text-gray-600 text-sm">
                Sometimes, just having someone who cares makes all the
                difference.
              </p>
            </div>
            <div>
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-navy-800 mb-2">
                Expanded Reach
              </h3>
              <p className="text-gray-600 text-sm">
                With more volunteers, we can help more people across more
                communities.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Ways to Volunteer */}
      <Section
        background="light"
        title="Ways to Contribute"
        subtitle="Find a role that matches your skills and availability"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {volunteerRoles.map((role, index) => (
            <Card
              key={index}
              icon={<span className="text-forest-700">{role.icon}</span>}
              title={role.title}
            >
              <p className="text-gray-600 text-sm mb-3">{role.description}</p>
              <p className="text-xs text-navy-600 font-medium bg-navy-50 inline-block px-2 py-1 rounded">
                Time: {role.commitment}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Reality Check - What volunteering really involves */}
      <Section
        title="What to Expect"
        subtitle="Honest expectations for potential volunteers"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-warmth-50 border border-warmth-200 rounded-lg p-6 md:p-8">
            <h3 className="text-lg font-semibold text-warmth-800 mb-4">
              What Volunteering Really Involves
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3">
                  You Will:
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="text-forest-600 mt-1">•</span>
                    <span>Work alongside people facing real challenges</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-forest-600 mt-1">•</span>
                    <span>
                      Sometimes see situations that are emotionally difficult
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-forest-600 mt-1">•</span>
                    <span>Commit to showing up regularly and reliably</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-forest-600 mt-1">•</span>
                    <span>
                      Participate in orientation and training sessions
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-forest-600 mt-1">•</span>
                    <span>Maintain strict confidentiality of all cases</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3">
                  You Will Gain:
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="text-forest-600 mt-1">•</span>
                    <span>Deep sense of purpose and contribution</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-forest-600 mt-1">•</span>
                    <span>Connection with like-minded individuals</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-forest-600 mt-1">•</span>
                    <span>Real-world understanding of social issues</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-forest-600 mt-1">•</span>
                    <span>Skills in community work and coordination</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-forest-600 mt-1">•</span>
                    <span>Certificate of volunteer service (if needed)</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="mt-6 text-sm text-gray-600 italic border-t border-warmth-200 pt-4">
              We ask for commitment because the people we serve depend on us. If
              you're unsure about your availability, that's okay — reach out and
              we'll find a way you can contribute.
            </p>
          </div>
        </div>
      </Section>

      {/* How to Join */}
      <Section background="light">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-800 mb-6">
            Ready to Join?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            We'd love to hear from you. Fill out a simple interest form and our
            volunteer coordinator will get in touch within a few days.
          </p>
          <div className="bg-white p-6 md:p-8 rounded-lg border border-gray-200 inline-block text-left">
            <h3 className="text-lg font-semibold text-navy-800 mb-4">
              Express Interest
            </h3>
            <p className="text-gray-600 text-sm mb-4">Send us an email with:</p>
            <ul className="text-sm text-gray-700 space-y-2 mb-6">
              <li>• Your name and contact number</li>
              <li>• How many hours per week you can contribute</li>
              <li>• What type of volunteering interests you</li>
              <li>• Any specific skills you'd like to offer</li>
            </ul>
            <a
              href="mailto:volunteer@veeru.org?subject=Volunteer Interest"
              className="btn-primary w-full text-center"
            >
              Email Us at volunteer@veeru.org
            </a>
          </div>
        </div>
      </Section>

      {/* Quote Section */}
      <section className="bg-navy-800 py-12 md:py-16">
        <div className="section-container text-center">
          <blockquote className="text-xl md:text-2xl text-white font-medium italic max-w-3xl mx-auto">
            "The best way to find yourself is to lose yourself in the service of
            others."
          </blockquote>
          <p className="text-gray-400 mt-4">— Mahatma Gandhi</p>
        </div>
      </section>
    </div>
  );
}

export default Volunteer;
