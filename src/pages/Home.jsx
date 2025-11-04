import React from "react";
import { HelpCircle } from "lucide-react";

const Home = () => {
  const features = [
    {
      title: "Vietnamese Nail POS expertise",
      desc: "User Friendly interface, bilingual support, and templates tuned for salon services.",
    },
    {
      title: "Integrated payments",
      desc: "Wholesale rates, transparent statements, and next-day funding.",
    },
    {
      title: "Growth tools included",
      desc: "Marketing, reviews, website, and digital signage. All connected to your POS.",
    },
  ];

  const faqs = [
    {
      q: "Is RAVO really optimized for nail salons?",
      a: "Yes. RAVO is a Nail Salon POS system tuned for services, add-ons, tips, commissions, memberships, and multi-tech tickets.",
    },
    {
      q: "Can my Vietnamese-speaking team use it comfortably?",
      a: "Absolutely. RAVO's interface is simple and intuitive, and when questions come up, our bilingual support team helps in Vietnamese or English, any time.",
    },
    {
      q: "Do you limit the number of clients or check-ins?",
      a: "No. RAVO offers unlimited check-in/out and unlimited client profiles.",
    },
    {
      q: "How long does setup take?",
      a: "When we collect your details in advance (service menu, prices, commission/tip rules, staff list, devices), setup and training usually take 30–60 minutes. We'll plug in devices, confirm your menu, configure commissions/tips, and walk your team through check-in/out and payments. Most salons start running same day.",
    },
    {
      q: "Do you help with Google reviews and SEO?",
      a: "Yes. Our marketing services include SEO, review generation, and social media content made for salons.",
    },
    {
      q: "Can I manage multiple locations?",
      a: "Yes. Centralized reporting and user controls make multi-location management easy.",
    },
    {
      q: "What about pricing and fees?",
      a: "We use transparent, wholesale-style pricing. No hidden fees, no surprise hikes.",
    },
    {
      q: "What are your support hours?",
      a: "Our support is available daily from 8:00 AM to 1:00 AM EST. Support is available to English and Vietnamese speakers.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center text-white"
        style={{
          backgroundImage: "url(/imgs/bg-1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-wider">
            RAVO
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-3">
            Powerful Nail POS
          </h2>
          <p className="text-xl md:text-2xl mb-4">
            Purpose-Built POS for Nail Salon
          </p>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            RAVO Payment Services. Effortless salon control, accurate payouts,
            happier clients. Every day!
          </p>
        </div>
      </section>

      {/* Why RAVO Section */}
      <section className="w-full py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-ravo-primary">
            Why RAVO?
          </h2>
          <h3 className="text-2xl font-semibold text-center text-gray-700 mb-8">
            A Nail Salon POS System That Fits How You Work
          </h3>

          <p className="text-lg text-gray-700 leading-relaxed mb-8 text-justify">
            Running a Vietnamese nail salon means speed, precision, and service.
            RAVO was created by people who've worked with salons like yours for
            years. We listened to owners and technicians, then built a Nail
            Salon POS system that simplifies your daily flow. From walk-ins and
            appointments to tips, commissions, memberships, gift cards, and
            end-of-day close. No complicated setups. No mystery fees. Just an
            all-in-one POS for nail salon teams that need to move fast and stay
            accurate.
          </p>

          <h4 className="text-2xl font-bold text-center mb-12 text-gray-800">
            What makes RAVO different?
          </h4>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h5 className="text-xl font-bold mb-3 text-ravo-primary">
                  {feature.title}
                </h5>
                <p className="text-gray-700 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-ravo-primary">
            FAQs
          </h2>
          <h3 className="text-2xl font-semibold text-center text-gray-700 mb-12">
            RAVO Nail POS Questions, Answered
          </h3>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow"
              >
                <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-start">
                  <HelpCircle
                    className="mr-2 flex-shrink-0 mt-1 text-ravo-primary"
                    size={20}
                  />
                  {faq.q}
                </h4>
                <p className="text-gray-700 leading-relaxed pl-7">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-ravo-primary text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              Visit the Help Center
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
