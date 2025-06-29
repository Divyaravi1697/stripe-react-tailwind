/** @jsxImportSource react */
import { FC, useEffect, useRef, useState } from "react";

type Customer = {
  id: string;
  name: string;
  stats: string[];
  products: string[];
  description: string;
  image: string;
  logo: string;
  heading: string;
  subheading: string;
  objectFit?: string;
};

const customers: Customer[] = [
  {
    id: "bmw",
    name: "BMW",
    stats: ["Millions of BMW owners", "350+ US dealerships"],
    products: ["Payments", "Connect"],
    description: "Learn why BMW chose Stripe to power e-commerce and payments",
    image: "/src/assets/images/bmw.png",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
    heading: "Enterprise reinvention",
    subheading: "Bring agility to your enterprise",
    objectFit: "object-cover",
  },
  {
    id: "amazon",
    name: "Amazon",
    stats: ["5+ Amazon businesses", "50+ countries served"],
    products: ["Radar", "Billing"],
    description:
      "How Amazon scales billing across global subscriptions with Stripe",
    image: "/src/assets/images/amazon.png",
    logo: "/src/assets/images/amazon-logo.png",
    heading: "Enterprise reinvention",
    subheading: "Bring agility to your enterprise",
    objectFit: "object-contain",
  },
  {
    id: "twilio",
    name: "Twilio",
    stats: ["Global telecom APIs", "Instant SMS billing"],
    products: ["Payments", "Identity"],
    description:
      "Twilio integrates Stripe to secure identity and messaging payments",
    image: "/src/assets/images/maersk.png",
    logo: "/src/assets/images/maersk-logo.png",
    heading: "Customer engagement",
    subheading: "Scale communications securely",
    objectFit: "object-fill",
  },
];

const CustomerShowcase: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const userInitiatedRef = useRef(false);

  const active = customers[activeIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % customers.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (userInitiatedRef.current) {
      containerRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      userInitiatedRef.current = false;
    }
  }, [activeIndex]);

  return (
    <section className="bg-white py-12" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-20 space-y-10">
        {/* Top Headings (Static) */}
        <div className="space-y-2">
          <h4 className="text-indigo-600 font-semibold text-sm">
            Enterprise reinvention
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Bring agility to your enterprise
          </h2>
          <p className="text-gray-600 max-w-3xl mb-6">
            Quickly build great payments experiences, improve performance,
            expand into new markets, and engage customers with subscriptions and
            marketplaces. Get expert integration guidance from our
            <span className="text-indigo-500 font-semibold">
              professional services
            </span>
            team and
            <span className="text-indigo-500 font-semibold">
              certified partners
            </span>
            , and connect Stripe to Salesforce, SAP, and more through the{" "}
            <span className="text-indigo-500 font-semibold">
              Stripe App Marketplace.
            </span>
          </p>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <span className="group flex gap-1 item-center">
              {" "}
              Explore Stripe for enterprises{" "}
              <div className="arrow mt-1">
                <div className="line arrow--sideUp"></div>
                <div className="line arrow--sideDown"></div>
                <div className="line arrow--hoverLine"></div>
              </div>
            </span>
          </button>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-800">
                {active.stats[0]}
              </h3>
              <p className="text-gray-500">{active.stats[1]}</p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-indigo-500 uppercase tracking-wider">
                Products used
              </h4>
              <ul className="mt-2 space-y-1 text-gray-800">
                {active.products.map((p) => (
                  <li key={p}>• {p}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Card */}
          <div className="md:col-span-2">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <div className="relative">
                <img
                  src={active.image}
                  alt={active.name}
                  className={`w-full h-40 md:h-[25rem] transition-all duration-500 `}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent p-6 flex items-end">
                  <div>
                    <img src={active.logo} alt="logo" className="h-6 mb-2" />
                    <p className="text-white text-xl font-semibold max-w-lg">
                      {active.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Logos */}
        <div className="flex justify-center md:col-12 border border-gray-200 divide-x-1 divide-dashed divide-gray-200 text-center">
          {customers.map((c, idx) => (
            <div className="flex-1 py-6 pl-2 justify-self-center">
              <button
                key={c.id}
                onClick={() => {
                  userInitiatedRef.current = true;
                  setActiveIndex(idx);
                }}
                className={`h-12  p-1 transition border-2 ${
                  active.id === c.id
                    ? "border-blue-600 bg-blue-50"
                    : "border-transparent hover:border-blue-300"
                }`}
              >
                <img
                  src={c.logo}
                  alt={c.name}
                  className="object-contain h-full w-full"
                />
              </button>
            </div>
          ))}
        </div>
        {/* end */}
      </div>
    </section>
  );
};

export default CustomerShowcase;
