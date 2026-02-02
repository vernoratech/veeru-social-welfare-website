import { Link } from "react-router-dom";
import Section from "../components/common/Section";
import Button from "../components/common/Button";

/**
 * Who We Support Page
 * Details on the communities VEERU serves
 * Shows dignity, support, empowerment - NOT helpless victims
 */
function WhoWeSupport() {
  // Categories of people VEERU supports
  const supportCategories = [
    {
      title: "Students Facing Financial Barriers",
      description:
        "Young people who have the ability and desire to learn but lack the financial resources to continue their education.",
      details: [
        "Students who cannot afford school or college fees",
        "Those needing books, uniforms, or exam costs",
        "Students facing pressure to drop out due to family financial crisis",
        "Young people seeking guidance on scholarships and educational opportunities",
      ],
      approach:
        "We believe every student deserves a chance to learn. We help identify solutions and connect families with resources.",
    },
    {
      title: "Families in Survival Struggles",
      description:
        "Families going through difficult times who need temporary support to get back on their feet.",
      details: [
        "Families facing sudden job loss or income crisis",
        "Those struggling with basic necessities during emergencies",
        "Families affected by natural disasters or accidents",
        "Elderly-headed households with limited support systems",
      ],
      approach:
        "We provide practical guidance and connect families with appropriate support systems and government schemes.",
    },
    {
      title: "Victims of False or Unwanted Police Cases",
      description:
        "Individuals caught in legal troubles they did not deserve, often without the resources to fight back.",
      details: [
        "People facing false accusations or harassment",
        "Those who lack understanding of their legal rights",
        "Individuals from marginalized communities facing systemic bias",
        "Families dealing with wrongful detention of a member",
      ],
      approach:
        "We connect individuals with legal aid services, provide moral support, and help navigate the complex legal system.",
    },
    {
      title: "People Needing Legal Aid",
      description:
        "Those who need legal guidance but cannot afford professional legal services.",
      details: [
        "Individuals facing civil disputes without representation",
        "People needing help with documentation and legal paperwork",
        "Those seeking guidance on rights and entitlements",
        "Families dealing with property, inheritance, or domestic matters",
      ],
      approach:
        "We connect people with pro-bono lawyers, legal aid cells, and provide guidance on accessing legal support.",
    },
    {
      title: "Those Needing Medical & Hospitalization Help",
      description:
        "Individuals and families navigating healthcare crises without adequate resources or support.",
      details: [
        "People who need guidance on hospital admissions and processes",
        "Families seeking information on government health schemes",
        "Those who need emotional support during medical emergencies",
        "Patients requiring referrals to charitable healthcare programs",
      ],
      approach:
        "We provide guidance, coordination, and emotional support. We help navigate healthcare systems and connect with available resources.",
    },
    {
      title: "Homeless & Marginalized Individuals",
      description:
        "People without stable shelter who need support to rebuild their lives with dignity.",
      details: [
        "Individuals living on the streets",
        "Those displaced due to circumstances beyond their control",
        "People struggling with mental health challenges",
        "Migrant workers without local support systems",
      ],
      approach:
        "We connect individuals with shelters, rehabilitation programs, and community support networks.",
    },
    {
      title: "Women & Children in Vulnerable Situations",
      description:
        "Women and children facing unsafe circumstances who need protection and support.",
      details: [
        "Women facing domestic violence or abuse",
        "Children in neglected or unsafe environments",
        "Single mothers struggling without support",
        "Young girls at risk of dropping out of education",
      ],
      approach:
        "We provide a safe, confidential space to talk. We connect with shelters, legal aid, and counseling services as needed.",
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-navy-800 text-white py-16 md:py-20">
        <div className="section-container">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Who We Support
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            VEERU stands with people from all walks of life who are going
            through difficult times. Here's who we serve and how we help.
          </p>
        </div>
      </section>

      {/* Dignity Statement */}
      <section className="bg-forest-700 py-6 md:py-8">
        <div className="section-container text-center">
          <p className="text-white text-lg font-medium">
            We don't see people as "victims" — we see them as individuals facing
            temporary challenges who deserve support, empowerment, and
            solidarity.
          </p>
        </div>
      </section>

      {/* Support Categories */}
      <Section>
        <div className="space-y-12">
          {supportCategories.map((category, index) => (
            <div
              key={index}
              className={`p-6 md:p-8 rounded-lg ${index % 2 === 0 ? "bg-white border border-gray-200" : "bg-gray-50"}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Title and Description */}
                <div className="lg:col-span-1">
                  <h2 className="text-xl font-bold text-navy-800 mb-3">
                    {category.title}
                  </h2>
                  <p className="text-gray-600">{category.description}</p>
                </div>

                {/* Details */}
                <div className="lg:col-span-1">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                    This Includes
                  </h3>
                  <ul className="space-y-2">
                    {category.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="flex items-start space-x-2 text-sm text-gray-700"
                      >
                        <span className="text-forest-600 mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Approach */}
                <div className="lg:col-span-1">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                    Our Approach
                  </h3>
                  <p className="text-gray-700 text-sm bg-forest-50 p-4 rounded-lg border-l-4 border-forest-600">
                    {category.approach}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="light">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-800 mb-4">
            Does This Sound Like You or Someone You Know?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            If you or someone you know is going through any of these situations,
            please don't hesitate to reach out. We're here to help — no
            judgment, no conditions, just support.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/get-help" variant="secondary">
              Get Help
            </Button>
            <Button to="/our-work" variant="outline">
              Learn About Our Services
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default WhoWeSupport;
