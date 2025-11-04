import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [policiesOpen, setPoliciesOpen] = useState(false);
  const [activeServiceMenu, setActiveServiceMenu] = useState(false);
  const [activePolicyMenu, setActivePolicyMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    "POS System",
    "Check-in/Check-out",
    "Ravo Marketing",
    "Ravo Design Services",
    "Ravo Digital Signage",
    "Credit Card Processing",
    "Payroll",
  ];

  const policies = [
    "Privacy Policy",
    "Terms & Conditions",
    "SMS Terms & Conditions",
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/imgs/logo-1.webp"
              alt="RAVO POS"
              className="h-12 w-auto"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "block";
              }}
            />
            <div className="hidden text-2xl font-bold text-ravo-primary">
              RAVO POS
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 mx-auto">
            <a
              href="#home"
              className={`font-medium transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-ravo-primary"
                  : "text-white hover:text-gray-200"
              }`}
            >
              Home
            </a>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveServiceMenu(true)}
              onMouseLeave={() => setActiveServiceMenu(false)}
            >
              <button
                className={`font-medium flex items-center transition-colors ${
                  isScrolled
                    ? "text-gray-700 hover:text-ravo-primary"
                    : "text-white hover:text-gray-200"
                }`}
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeServiceMenu && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 z-50">
                  {services.map((service, idx) => (
                    <a
                      key={idx}
                      href={`#${service.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block px-4 py-2 text-gray-700 hover:bg-ravo-primary hover:text-white transition-colors"
                    >
                      {service}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#pricing"
              className={`font-medium transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-ravo-primary"
                  : "text-white hover:text-gray-200"
              }`}
            >
              Pricing
            </a>

            {/* Policies Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActivePolicyMenu(true)}
              onMouseLeave={() => setActivePolicyMenu(false)}
            >
              <button
                className={`font-medium flex items-center transition-colors ${
                  isScrolled
                    ? "text-gray-700 hover:text-ravo-primary"
                    : "text-white hover:text-gray-200"
                }`}
              >
                Policies
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activePolicyMenu && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 z-50">
                  {policies.map((policy, idx) => (
                    <a
                      key={idx}
                      href={`#${policy.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block px-4 py-2 text-gray-700 hover:bg-ravo-primary hover:text-white transition-colors"
                    >
                      {policy}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#contact"
              className={`font-medium transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-ravo-primary"
                  : "text-white hover:text-gray-200"
              }`}
            >
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={isScrolled ? "text-gray-700" : "text-white"} />
            ) : (
              <Menu className={isScrolled ? "text-gray-700" : "text-white"} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#home"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
              >
                Home
              </a>

              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="w-full flex justify-between items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
                >
                  Services
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {servicesOpen && (
                  <div className="pl-6 space-y-1">
                    {services.map((service, idx) => (
                      <a
                        key={idx}
                        href={`#${service.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded"
                      >
                        {service}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="#pricing"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
              >
                Pricing
              </a>

              <div>
                <button
                  onClick={() => setPoliciesOpen(!policiesOpen)}
                  className="w-full flex justify-between items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
                >
                  Policies
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      policiesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {policiesOpen && (
                  <div className="pl-6 space-y-1">
                    {policies.map((policy, idx) => (
                      <a
                        key={idx}
                        href={`#${policy.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded"
                      >
                        {policy}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="#contact"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
