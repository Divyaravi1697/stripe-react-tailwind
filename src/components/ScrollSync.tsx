import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import FlowDiagram from "./FlowDiagram";
import PaymenyImage from "../assets/images/m2.png";
import BillingImage from "../assets/images/m1.png";


const sections = [
  {
    id: "billing",
    subtitle: "Modular solutions",
    title: "A fully integrated suite of financial and payments products",
    description:
      "Reduce costs, grow revenue, and run your business more efficiently on a fully integrated, AI-powered platform. Use Stripe to handle all of your payments-related needs, manage revenue operations, and launch (or invent) new business models.",
    imageComponent: <FlowDiagram />,
  },
  {
    id: " payments",
    subtitle: "Payments",
    title: "Accept and optimise payments, globally",
    description:
      "Increase authorisation rates, offer local payment methods to boost conversion, and reduce fraud using AI.",
    image: PaymenyImage,
  },
  {
    id: "invoicing",
    subtitle: "Billing",
    title: "Capture recurring revenue",
    description:
      "Manage flat rate, usage-based, and hybrid pricing models, minimise churn, and automate finance operations.",
    image: BillingImage,
  },
];

const ScrollSync: React.FC = () => {
  const [activeId, setActiveId] = useState(sections[0].id);

  return (
    <div className="w-full">
      {/* 🔥 Sticky Scroll Section */}
      <section className="relative py-16 px-6 md:px-20 bg-gray-50">
        <div className="flex max-w-7xl mx-auto">
          {/* 👈 Left scroll content */}
          <div className="w-full md:w-1/2 space-y-32">
            {sections.map(({ id, subtitle, title, description }) => {
              const [ref, inView] = useInView({
                threshold: 0.6,
              });

              if (inView && activeId !== id) {
                setTimeout(() => setActiveId(id), 50);
              }

              return (
                <div
                  key={id}
                  ref={ref}
                  className="min-h-[70vh] flex flex-col justify-center"
                >
                  <p className="text-indigo-600 font-semibold mb-4">
                    {subtitle}
                  </p>
                  <h2 className="text-4xl font-semibold mb-4">{title}</h2>
                  <p className="text-lg text-gray-600">{description}</p>
                </div>
              );
            })}
          </div>

          {/* 👉 Right sticky panel */}
          <div className="hidden md:flex w-1/2 sticky top-24 h-[60vh] items-center justify-center">
            {sections.map((section) => {
              if (section.id !== activeId) return null;

              return (
                <div
                  key={section.id}
                  className="w-full h-100 transition-all duration-300"
                >
                  {/* ✅ Check for component first, fallback to image */}
                  {section.imageComponent ? (
                    section.imageComponent
                  ) : (
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-100 object-cover"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollSync;
