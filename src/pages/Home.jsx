import { Link } from "react-router-dom";
import Section from "../components/common/Section";
import Button from "../components/common/Button";
import Card from "../components/common/Card";

/**
 * Home Page
 * Mission-driven landing page with:
 * - Hero section with powerful mission statement
 * - "How VEERU Helps" overview
 * - Our Approach section (community-driven, confidential, non-discriminatory)
 * - Services preview
 * - Human-centric CTAs
 */
function Home() {
  // Services overview for the home page
  const services = [
    {
      title: "Education Support",
      description:
        "Helping students continue their education when financial barriers stand in their way.",
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
      title: "Medical & Hospitalization",
      description:
        "Guidance and coordination for people navigating healthcare during difficult times.",
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
      title: "Legal Aid & Guidance",
      description:
        "Supporting those who face legal troubles without the resources to navigate them alone.",
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
      title: "Women & Child Welfare",
      description:
        "Creating safe spaces and providing support for women and children in vulnerable situations.",
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
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
  ];

  // Our Approach - showing how we work
  const approach = [
    {
      title: "Community-Driven",
      description:
        "We work alongside communities, not above them. Every decision is made with input from those we serve.",
    },
    {
      title: "Confidential & Respectful",
      description:
        "Your story stays with us. We treat every person with dignity and complete confidentiality.",
    },
    {
      title: "Non-Discriminatory",
      description:
        "We help everyone who needs support, regardless of background, religion, caste, or circumstances.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-navy-800 text-white py-20 md:py-32 relative overflow-hidden">
        {/* Organic Decorative Elements */}
        <div className="absolute top-20 right-[10%] w-64 h-64 bg-forest-600/10 rounded-full blur-3xl soft-float"></div>
        <div className="absolute bottom-10 left-[5%] w-48 h-48 bg-navy-900/40 rounded-full blur-2xl"></div>

        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tight font-serif italic">
                Standing With You
                <br />
                <span className="text-forest-400 not-italic font-sans uppercase tracking-[0.2em] text-2xl md:text-3xl block mt-2">
                  When It Matters Most
                </span>
              </h1>
              <p className="mission-text text-gray-300 mb-10 max-w-2xl border-l-2 border-forest-600 pl-6 py-2">
                VEERU exists to support people during their hardest moments —
                when they lack money, support, legal knowledge, healthcare
                access, or social backing.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  variant="secondary"
                  to="/get-help"
                  className="px-8 !py-4 shadow-xl"
                >
                  Get Help Now
                </Button>
                <Button
                  variant="outline"
                  to="/volunteer"
                  className="border-white text-white hover:bg-white hover:text-navy-800 px-8 !py-4"
                >
                  Volunteer With Us
                </Button>
              </div>
            </div>

            {/* Organic Hero Image */}
            <div className="lg:col-span-5 relative hidden lg:block">
              <div className="organic-mask w-full aspect-[4/5] relative">
                <img
                  src="/home/openspace/.gemini/antigravity/brain/2f662fb5-0034-4271-b87b-6d432a1978b7/ngo_hero_volunteers_1770010841744.png"
                  alt="VEERU Volunteers"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating trust badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl soft-float hidden xl:block">
                <p className="text-navy-800 font-bold text-lg">Solidarity</p>
                <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">
                  Not Just Charity
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Bar */}
      <section className="bg-forest-700 py-6 md:py-8 border-y-4 border-forest-800">
        <div className="section-container text-center">
          <p className="text-white text-sm md:text-base font-bold uppercase tracking-[0.3em]">
            Volunteers for Educational Empowerment & Reform of Underprivileged
          </p>
        </div>
      </section>

      {/* Founders' Message - Grounded Trust Signal */}
      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <h2 className="text-2xl md:text-3xl font-serif-heading mb-6 border-b-2 border-forest-100 pb-4 inline-block">
              A Message from Our Volunteers
            </h2>
            <div className="space-y-6 text-gray-700 italic font-serif text-lg leading-relaxed">
              <p>
                "At VEERU, we don't believe in 'charity' as a top-down concept.
                We believe in solidarity. Whether it's a student facing
                financial blocks or a family struggling with legal cases, our
                goal is to stand shoulder-to-shoulder with them until the crisis
                passes."
              </p>
              <p>
                "We are a group of dedicated volunteers who understand that
                ground-level reform isn't about flashy numbers; it's about the
                trust one person places in another during their weakest hour."
              </p>
            </div>
            <div className="mt-8 flex items-center space-x-4">
              <div className="w-12 h-12 bg-navy-50 rounded-full border border-navy-100 flex items-center justify-center">
                <span className="text-navy-800 font-bold">V</span>
              </div>
              <div>
                <p className="font-bold text-navy-800">The VEERU Collective</p>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">
                  Active Since 2018
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 relative">
            <div className="image-offset-border">
              <img
                src="/home/openspace/.gemini/antigravity/brain/2f662fb5-0034-4271-b87b-6d432a1978b7/ngo_community_unity_1770010900554.png"
                alt="VEERU Community"
                className="w-full organic-mask"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* How We Work Section */}
      <Section
        title="Our Approach"
        subtitle="How we work with communities to create meaningful change"
        background="light"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {approach.map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-forest-700"
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
              </div>
              <h3 className="text-lg font-semibold text-navy-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Services Overview */}
      <Section
        title="How VEERU Helps"
        subtitle="We provide practical support across education, healthcare, legal matters, and community welfare"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              icon={service.icon}
              title={service.title}
              className="hover:border-forest-200 transition-all group"
            >
              <p className="text-sm text-gray-600 mb-4">
                {service.description}
              </p>
              {index === 0 && (
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <img
                    src="/home/openspace/.gemini/antigravity/brain/2f662fb5-0034-4271-b87b-6d432a1978b7/ngo_education_support_1770010858004.png"
                    alt="Education"
                    className="w-full h-32 object-cover rounded-sm group-hover:opacity-90 transition-opacity"
                  />
                </div>
              )}
              {index === 1 && (
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <img
                    src="/home/openspace/.gemini/antigravity/brain/2f662fb5-0034-4271-b87b-6d432a1978b7/ngo_medical_help_1770010879408.png"
                    alt="Medical"
                    className="w-full h-32 object-cover rounded-sm group-hover:opacity-90 transition-opacity"
                  />
                </div>
              )}
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="outline" to="/our-work" className="px-10">
            Learn More About Our Work
          </Button>
        </div>
      </Section>

      {/* Who We Support Preview */}
      <Section
        background="light"
        title="Who We Support"
        subtitle="We stand with people from all walks of life who need a helping hand"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="flex items-start space-x-3">
            <span className="text-forest-600 mt-1">•</span>
            <p className="text-gray-700">
              Students blocked from education due to financial constraints
            </p>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-forest-600 mt-1">•</span>
            <p className="text-gray-700">
              Families struggling with basic survival needs
            </p>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-forest-600 mt-1">•</span>
            <p className="text-gray-700">
              Victims of false or unwanted police cases
            </p>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-forest-600 mt-1">•</span>
            <p className="text-gray-700">
              People needing legal aid and lawyer assistance
            </p>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-forest-600 mt-1">•</span>
            <p className="text-gray-700">
              Individuals requiring medical and hospitalization help
            </p>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-forest-600 mt-1">•</span>
            <p className="text-gray-700">
              Women and children in vulnerable situations
            </p>
          </div>
        </div>
        <div className="text-center mt-10">
          <Button variant="outline" to="/who-we-support">
            See How We Help
          </Button>
        </div>
      </Section>

      {/* CTA Section */}
      <section className="bg-warmth-700 py-16 md:py-20">
        <div className="section-container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            You Don't Have to Face This Alone
          </h2>
          <p className="text-warmth-100 text-lg mb-8 max-w-2xl mx-auto">
            Whether you need support, want to help others, or just want to learn
            more about our work — we're here for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              to="/get-help"
              className="bg-white text-warmth-700 hover:bg-warmth-50"
            >
              I Need Help
            </Button>
            <Button
              to="/volunteer"
              className="bg-navy-800 text-white hover:bg-navy-700"
            >
              I Want to Help
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
