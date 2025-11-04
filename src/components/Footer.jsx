import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-8 px-4 text-center text-white bg-ravo-primary ">
      <p className="text-sm">© 2025 Ravo POS. All Rights Reserved.</p>
      <div className="mt-2 space-x-3 text-sm">
        <a href="#terms" className="hover:underline">
          Terms & Conditions
        </a>
        <span>|</span>
        <a href="#privacy" className="hover:underline">
          Privacy Policy
        </a>
        <span>|</span>
        <a href="#sms" className="hover:underline">
          SMS Terms & Conditions
        </a>
      </div>
    </footer>
  );
};

export default Footer;
