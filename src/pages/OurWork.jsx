import Section from "../components/common/Section";
import Card from "../components/common/Card";

/**
 * Our Work Page
 * Detailed explanation of each service VEERU provides
 * With clear expectations for Medical & Hospitalization section
 */
function OurWork() {
  // All services with detailed descriptions
  const services = [
    {
      id: "education",
      title: "Education Support",
      summary:
        "Helping students continue their education when financial barriers stand in their way.",
      description: [
        "We work with students and families to identify barriers to education — whether it's school fees, books, uniforms, or exam costs.",
        "Our team connects families with scholarship programs, fee waiver schemes, and educational support networks.",
        "We also provide guidance on education options and career paths for students who need direction.",
      ],
      icon: (
        <svg
          className="w-10 h-10"
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
      id: "skills",
      title: "Knowledge & Skill Development",
      summary:
        "Empowering individuals with practical skills and knowledge for better opportunities.",
      description: [
        "We organize skill-building workshops that focus on practical, employable skills.",
        "Our programs cover basic computer literacy, vocational training, and soft skills development.",
        "We connect participants with training centers, apprenticeship programs, and employment opportunities.",
      ],
      icon: (
        <svg
          className="w-10 h-10"
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
      id: "women-children",
      title: "Women & Child Welfare",
      summary:
        "Creating safe spaces and providing support for women and children in vulnerable situations.",
      description: [
        "We provide a safe, judgment-free space for women and children facing difficult circumstances.",
        "Our support includes counseling, crisis intervention, and connection to appropriate resources.",
        "We work closely with shelters, legal aid services, and government schemes to ensure comprehensive support.",
        "All interactions are confidential. We respect the choices and agency of those we help.",
      ],
      icon: (
        <svg
          className="w-10 h-10"
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
      id: "community",
      title: "Community Empowerment",
      summary:
        "Building stronger communities through collective action and grassroots support.",
      description: [
        "We believe lasting change happens when communities come together.",
        "Our programs focus on building local networks of support and mutual aid.",
        "We help communities access government schemes and entitlements they may not be aware of.",
        "We facilitate community gatherings that address local issues and find collective solutions.",
      ],
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
    {
      id: "volunteer",
      title: "Volunteer Programs",
      summary:
        "Connecting people who want to help with meaningful opportunities to serve.",
      description: [
        "We match volunteers with opportunities that suit their skills, time, and interests.",
        "Our volunteer programs range from field work to administrative support to specialized skill contribution.",
        "We ensure all volunteers are properly oriented and supported throughout their engagement.",
        "Long-term volunteers become part of our extended family and community of changemakers.",
      ],
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
          />
        </svg>
      ),
    },
    {
      id: "values-education",
      title: "Value-Based Education",
      summary:
        "Teaching ethics, compassion, and civic responsibility alongside academic learning.",
      description: [
        "We believe education is more than academics — it's about building good citizens.",
        "Our programs include sessions on ethics, empathy, environmental responsibility, and community service.",
        "We work with schools and community centers to integrate value-based learning into existing curricula.",
        "We mentor young people to become future leaders who give back to their communities.",
      ],
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      ),
    },
    {
      id: "awareness",
      title: "Social Awareness & Reform",
      summary:
        "Raising awareness about social issues and advocating for systemic change.",
      description: [
        "We organize awareness campaigns on issues like education rights, legal protections, and social entitlements.",
        "Our advocacy work focuses on systemic issues that affect vulnerable communities.",
        "We collaborate with like-minded organizations to amplify our impact.",
        "We believe in changing minds and systems, not just addressing symptoms.",
      ],
      icon: (
        <svg
          className="w-10 h-10"
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
    {
      id: "medical",
      title: "Medical & Hospitalization Assistance",
      summary:
        "Guidance and coordination for people navigating healthcare during difficult times.",
      description: [
        "We understand that medical emergencies can be overwhelming, especially when resources are limited.",
        "Our team provides guidance on government health schemes, hospital social work departments, and affordable care options.",
        "We help connect families with hospitals, coordinate with healthcare providers, and navigate complex processes.",
        "We offer emotional support and practical assistance during hospitalization — visiting patients, coordinating logistics, and providing a support network.",
      ],
      // Clear expectation setting - critical for trust
      clarification: {
        title: "What We Do & What We Don't",
        canDo: [
          "Provide guidance on available healthcare schemes and options",
          "Help navigate hospital processes and paperwork",
          "Connect families with hospitals, doctors, and support services",
          "Offer emotional support and regular visits during hospitalization",
          "Coordinate referrals to charitable healthcare programs",
        ],
        cannot: [
          "We cannot promise immediate or guaranteed funding for treatment",
          "We cannot make medical decisions on behalf of patients or families",
          "We cannot guarantee admission or treatment at any specific hospital",
          "We are facilitators and supporters, not a funding source",
        ],
      },
      icon: (
        <svg
          className="w-10 h-10"
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
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-navy-800 text-white py-16 md:py-20">
        <div className="section-container">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Work
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            A detailed look at how VEERU serves communities across education,
            healthcare, legal support, and social welfare.
          </p>
        </div>
      </section>

      {/* Services List */}
      {services.map((service, index) => (
        <Section
          key={service.id}
          id={service.id}
          background={index % 2 === 0 ? "white" : "light"}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Icon and Title */}
            <div className="lg:col-span-4">
              <div className="flex items-start space-x-4">
                <div className="text-forest-700 flex-shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-navy-800">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 mt-2">{service.summary}</p>
                </div>
              </div>

              {/* Contextual Image */}
              <div className="mt-8 hidden lg:block">
                {service.id === "education" && (
                  <div className="image-offset-border">
                    <img
                      src="/images/assets/education.png"
                      alt="Education Support"
                      className="w-full organic-mask"
                    />
                  </div>
                )}
                {service.id === "medical" && (
                  <div className="image-offset-border">
                    <img
                      src="/images/assets/medical.png"
                      alt="Medical Assistance"
                      className="w-full organic-mask"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="lg:col-span-8">
              <ul className="space-y-3">
                {service.description.map((point, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <span className="text-forest-600 mt-1 flex-shrink-0">
                      •
                    </span>
                    <p className="text-gray-700">{point}</p>
                  </li>
                ))}
              </ul>

              {/* Clarification block for Medical Service - Critical for trust */}
              {service.clarification && (
                <div className="mt-8 bg-warmth-50 border border-warmth-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-warmth-800 mb-4">
                    {service.clarification.title}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-forest-700 mb-2 flex items-center">
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        What We Help With
                      </h4>
                      <ul className="space-y-2">
                        {service.clarification.canDo.map((item, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-gray-700 flex items-start space-x-2"
                          >
                            <span className="text-forest-600 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-warmth-700 mb-2 flex items-center">
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Important to Understand
                      </h4>
                      <ul className="space-y-2">
                        {service.clarification.cannot.map((item, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-gray-700 flex items-start space-x-2"
                          >
                            <span className="text-warmth-600 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-gray-600 italic">
                    We are honest about our limitations because we believe trust
                    is more important than false hope. We will always try our
                    best to help or point you in the right direction.
                  </p>
                </div>
              )}
            </div>
          </div>
        </Section>
      ))}

      {/* CTA */}
      <section className="bg-forest-700 py-12 md:py-16">
        <div className="section-container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Need Our Help?
          </h2>
          <p className="text-forest-100 text-lg mb-6 max-w-2xl mx-auto">
            If any of these services can help you or someone you know, please
            reach out. We're here to support you.
          </p>
          <Button
            to="/get-help"
            variant="white"
            className="px-10 py-4 shadow-2xl"
          >
            Get Help Now
          </Button>
        </div>
      </section>
    </div>
  );
}

export default OurWork;
