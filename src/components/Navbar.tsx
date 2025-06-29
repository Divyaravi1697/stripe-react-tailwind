import React, { useState, useRef, useEffect } from "react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const menuItems = {
  Products: {
    title: "PRODUCTS",
    sections: [
      {
        title: "PAYMENTS",
        items: [
          {
            name: "Payments",
            iconSrc: "/src/assets/images/payment.svg",
            description: "Online payments",
          },
          {
            name: "Terminal",
            iconSrc: "/src/assets/images/terminal.svg",
            description: "In-person payments",
          },
          {
            name: "Connect",
            iconSrc: "/src/assets/images/connect.svg",
            description: "Payments for platforms",
          },
          {
            name: "Billing",
            iconSrc: "/src/assets/images/billing.svg",
            description: "Subscriptions & invoicing",
          },
        ],
      },
      {
        title: "PAYOUTS",
        items: [
          {
            name: "Payouts",
            iconSrc: "/src/assets/images/payouts.svg",
            description: "Programmatic payouts",
          },
          {
            name: "Issuing",
            iconSrc: "/src/assets/images/issuing.svg",
            description: "Card creation",
          },
        ],
      },
      {
        title: "BUSINESS OPERATIONS",
        items: [
          {
            name: "Radar",
            iconSrc: "/src/assets/images/radar.svg",
            description: "Fraud & risk management",
          },
          {
            name: "Sigma",
            iconSrc: "/src/assets/images/sigma.svg",
            description: "Custom reports",
          },
          {
            name: "Atlas",
            iconSrc: "/src/assets/images/atlas.svg",
            description: "Start-up incorporation",
          },
        ],
      },
    ],
  },
  Developers: {
    title: "PRODUCTS",
    sections: [
     
      {
        title: "PAYOUTS",
        items: [
          {
            name: "Payouts",
            iconSrc: "/src/assets/images/payouts.svg",
            description: "Programmatic payouts",
          },
          {
            name: "Issuing",
            iconSrc: "/src/assets/images/issuing.svg",
            description: "Card creation",
          },
        ],
      },
    
    ],
  },
  Resources: {
    title: "PRODUCTS",
    sections: [
      {
        title: "PAYMENTS",
        items: [
          {
            name: "Payments",
            iconSrc: "/src/assets/images/payment.svg",
            description: "Online payments",
          },
          {
            name: "Terminal",
            iconSrc: "/src/assets/images/terminal.svg",
            description: "In-person payments",
          },
          {
            name: "Connect",
            iconSrc: "/src/assets/images/connect.svg",
            description: "Payments for platforms",
          },
          {
            name: "Billing",
            iconSrc: "/src/assets/images/billing.svg",
            description: "Subscriptions & invoicing",
          },
        ],
      },
      {
        title: "PAYOUTS",
        items: [
          {
            name: "Payouts",
            iconSrc: "/src/assets/images/payouts.svg",
            description: "Programmatic payouts",
          },
          {
            name: "Issuing",
            iconSrc: "/src/assets/images/issuing.svg",
            description: "Card creation",
          },
        ],
      },
      {
        title: "BUSINESS OPERATIONS",
        items: [
          {
            name: "Radar",
            iconSrc: "/src/assets/images/radar.svg",
            description: "Fraud & risk management",
          },
          {
            name: "Sigma",
            iconSrc: "/src/assets/images/sigma.svg",
            description: "Custom reports",
          },
          {
            name: "Atlas",
            iconSrc: "/src/assets/images/atlas.svg",
            description: "Start-up incorporation",
          },
        ],
      },
    ],
  },
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const expandMenuRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const navLinksRef = useRef<NodeListOf<HTMLLIElement> | null>(null);
  let currentNav: HTMLLIElement | null = null;
  let navsVisited = 0;
  let isMouseOnMenu = false;

  useEffect(() => {
    const expandMenu = expandMenuRef.current;
    const menus =
      expandMenu?.querySelectorAll<HTMLElement>(".menu__container > *") || [];
    const indicator = indicatorRef.current;
    const navLinks = document.querySelectorAll<HTMLLIElement>(".nav--link");
    navLinksRef.current = navLinks;

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      if (!target.dataset.expand) return;

      navsVisited++;

      if (!expandMenu || !indicator) return;

      if (navsVisited === 1) {
        expandMenu.classList.add("new--expand");
        menus.forEach((menu) => menu.classList.add("first"));
        indicator.classList.add("first");
      } else {
        expandMenu.classList.remove("new--expand");
        menus.forEach((menu) => menu.classList.remove("first"));
        indicator.classList.remove("first");
      }

      navLinks.forEach((navLink) => {
        if (navLink === target) {
          navLink.classList.add("hover");
          currentNav = navLink;
        } else {
          navLink.classList.remove("hover");
        }
      });

      const navLinkCenter = Math.floor(
        target.offsetLeft + target.clientWidth / 2
      );
      indicator.style.transform = `translateX(${navLinkCenter}px)`;
      indicator.style.opacity = "1";

      const targetMenu = document.querySelector(
        `#${target.dataset.expand}`
      ) as HTMLElement;
      if (!targetMenu) return;
      const { width: targetWidth, height: targetHeight } =
        targetMenu.getBoundingClientRect();

      expandMenu.style.width = `${targetWidth}px`;
      expandMenu.style.height = `${targetHeight}px`;

      const prevMenu = targetMenu.previousElementSibling as HTMLElement;
      targetMenu.classList.remove("prev");

      if (prevMenu) {
        prevMenu.classList.add("prev");
      }

      menus.forEach((menu) => {
        if (menu.id === targetMenu.id) {
          menu.classList.add("active");
        } else {
          menu.classList.remove("active");
        }
      });

      expandMenu.classList.add("expand");
    };

    const handleMouseLeave = (e: MouseEvent) => {
      if (isMouseOnMenu || e.y > 50) return;
      forceInitialState();
    };

    const forceInitialState = () => {
      if (!expandMenu || !indicator || !navLinksRef.current) return;
      expandMenu.classList.remove("expand", "active");
      if (currentNav) currentNav.classList.remove("hover");
      menus.forEach((menu) => menu.removeAttribute("class"));
      indicator.style.opacity = "0";
      currentNav = null;
      navsVisited = 0;
    };

    navLinks.forEach((navLink) => {
      navLink.addEventListener("mouseenter", handleMouseEnter);
    });

    expandMenu?.addEventListener("mouseenter", () => {
      if (expandMenu.style.opacity === "1") {
        isMouseOnMenu = true;
      }
    });

    expandMenu?.addEventListener("mouseleave", (e) => {
      if (e.y > 70) {
        isMouseOnMenu = false;
        forceInitialState();
      }
    });

    document
      .querySelector(".nav__links")
      ?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      navLinks.forEach((navLink) => {
        navLink.removeEventListener("mouseenter", handleMouseEnter);
      });
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="font-bold text-2xl text-white">stripe</div>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center">
          <ul className="nav__links">
            {Object.entries(menuItems).map(([item, subItems]) => (
              <li
                key={item}
                data-expand={item.toLowerCase()}
                className="nav--link group flex items-center gap-1"
              >
                <span className="font-medium">{item}</span>
                {/* Show arrow only if submenu exists */}
                {subItems && (
                  <ChevronDownIcon className="w-4 h-4 text-white transform transition-transform duration-200 opacity-100 group-hover:rotate-180" />
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Right buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <a href="#" className="text-white hover:no-underline">
            <div className="group flex items-center gap-1">
              <span>Sign in</span>
              <div className="arrow">
                <div className="line arrow--sideUp"></div>
                <div className="line arrow--sideDown"></div>
                <div className="line arrow--hoverLine"></div>
              </div>
            </div>
          </a>
          <button className="bg-white text-indigo-600 px-4 py-1 rounded-full hover:bg-indigo-100 transition">
            <div className="contact-sales group flex items-center gap-1">
              <span> Contact sales</span>
              <div className="arrow">
                <div className="line arrow--sideUp"></div>
                <div className="line arrow--sideDown"></div>
                <div className="line arrow--hoverLine"></div>
              </div>
            </div>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-md hover:bg-white/10 text-white transition"
          >
            {mobileOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white text-gray-800 px-6 py-6 space-y-6">
          {Object.entries(menuItems).map(([item, subItems]) => (
            <div key={item}>
              <button
                onClick={() => subItems && toggleSubmenu(item)}
                className="flex items-center justify-between w-full font-semibold py-2 hover:bg-gray-50 px-2 rounded"
              >
                {item}
                {subItems &&
                  (openSubmenu === item ? (
                    <ChevronUpIcon className="w-5 h-5" />
                  ) : (
                    <ChevronDownIcon className="w-5 h-5" />
                  ))}
              </button>

              {subItems && openSubmenu === item && (
                <div className="mt-2 space-y-4 pl-4 text-sm shadow-lg border-gray-100">
                  {"sections" in subItems ? (
                    subItems.sections.map((section) => (
                      <div key={section.title} className="mb-4">
                        <h4 className="text-xs uppercase text-gray-500 mb-1">
                          {section.title}
                        </h4>
                        <ul className="space-y-2">
                          {section.items.map((item) => (
                            <li
                              key={item.name}
                              className="flex items-center gap-3 py-1 hover:bg-gray-50 px-2 rounded"
                            >
                              <img
                                src={item.iconSrc}
                                alt={item.name}
                                className="w-6 h-6"
                              />
                              <span className="flex flex-col flex-1">
                                <span className="flex justify-between items-center">
                                  {item.name}
                                  <img
                                    className="right--arrow w-4 h-4"
                                    src="/src/assets/images/right-arrow.svg"
                                    alt=""
                                  />
                                </span>
                                <span className="text-xs text-gray-500">
                                  {item.description}
                                </span>
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))
                  ) : (
                    <>
                      <h4 className="text-xs uppercase text-gray-500 mb-1">
                        {subItems.title}
                      </h4>
                      <ul className="space-y-2">
                        {subItems.items.map((item) => (
                          <li
                            key={item.name}
                            className="flex items-center gap-2 py-1 hover:bg-gray-50 px-2 rounded"
                          >
                            <span className="text-lg">{item.icon}</span>
                            <span className="flex flex-col">
                              <span>{item.name}</span>
                              <span className="text-xs text-gray-500">
                                {item.description}
                              </span>
                            </span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              )}
            </div>
          ))}

          <div className="pt-4 border-t border-gray-100 space-y-4">
            <a
              href="#"
              className="block text-indigo-600 font-semibold hover:bg-gray-50 px-2 py-2 rounded"
            >
              Sign in
            </a>
            <button className="w-full bg-indigo-600 text-white rounded-full py-1  hover:bg-indigo-700 transition">
              Contact sales
            </button>
          </div>
        </div>
      )}

      {/* Desktop expand menu */}
      <div className="header__expandMenu block" ref={expandMenuRef}>
        <div className="menu__container">
          {Object.entries(menuItems).map(([item, subItems]) => {
            if (!subItems) return null;
            return (
              <div key={item} id={item.toLowerCase()}>
                <div className="sub__menu">
                  {"sections" in subItems ? (
                    subItems.sections.map((section) => (
                      <div key={section.title}>
                        <h3 className="title text-xs uppercase text-gray-500 mb-2">
                          {section.title}
                        </h3>
                        <ul className="subMenu__items ">
                          {section.items.map((item) => (
                            <li key={item.name} className="subMenu--item ">
                              <img
                                src={item.iconSrc}
                                alt={item.name}
                                className="w-6 h-6"
                              />
                              <span className="label__container">
                                <div className="label flex justify-between items-center">
                                  <span className="font-medium">
                                    {item.name}
                                  </span>
                                  <img
                                    className="right--arrow w-4 h-4"
                                    src="/src/assets/images/right-arrow.svg"
                                    alt=""
                                  />
                                </div>
                                <div className="label--desc text-xs text-gray-500">
                                  {item.description}
                                </div>
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))
                  ) : (
                    <>
                      <h3 className="title">{subItems.title}</h3>
                      <ul className="subMenu__items">
                        {subItems.items.map((subItem) => (
                          <li key={subItem.name} className="subMenu--item">
                            <span className="text-xl">{subItem.icon}</span>
                            <span className="flex flex-col">
                              <span className="font-medium">
                                {subItem.name}
                              </span>
                              <span className="text-xs text-gray-500">
                                {subItem.description}
                              </span>
                            </span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Indicator */}
      <div ref={indicatorRef} className="tip" />
    </nav>
  );

  function toggleSubmenu(item: string) {
    setOpenSubmenu(openSubmenu === item ? null : item);
  }
}
