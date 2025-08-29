"use client";
import Image from "next/image";
import React from "react";
import mainLogo from "../../../public/images/main-logo.png";

const FooterLayout = () => {
  const navItems = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Services", href: "services" },
    { name: "Contact", href: "contact" },
    { name: "Testimonials", href: "testimonials" },
  ];

  return (
    <div className="w-full bg-sky-500 mt-20">
      <div className="py-10 px-5 flex flex-col md:flex-row md:items-start md:justify-between gap-10 md:gap-5 max-w-7xl md:mr-10 mx-auto">
        <div className="flex items-center space-x-2 justify-center md:justify-start">
          <Image
            src={mainLogo.src || "/placeholder.svg"}
            alt="Logo"
            width={100}
            height={100}
            className="rounded-lg"
          />
          {/* <span className="text-white font-semibold text-lg hidden sm:block">
            Brand
          </span> */}
        </div>

        <div className="flex justify-center md:w-[55%]  md:justify-start">
          <div className="flex flex-wrap whitespace-nowrap gap-4 md:gap-8 text-center md:text-left">
            {navItems.map((item) => (
              <span
                key={item.name}
                className="text-white/90 cursor-pointer hover:text-blue-900 transition-colors duration-200 font-medium relative group"
                onClick={() => {
                  const element = document.getElementById(item.href);
                  if (element) {
                    const y =
                      element.getBoundingClientRect().top +
                      window.scrollY -
                      100;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-900 transition-all duration-200 group-hover:w-full"></span>
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-white w-full md:w-auto">
          <div className="flex flex-col items-center md:items-start">
            <h5 className="text-xl font-bold mb-3">CONTACT US</h5>
            <a href="tel:+442012345678" className="hover:text-blue-900">
              +44 20 1234 5678
            </a>
            <a
              href="mailto:info@example.com"
              aria-label="Send email to info@example.com"
              className="hover:text-blue-900"
            >
              info@example.com
            </a>
            <a
              href="https://www.google.com/maps?q=76+Wimpole+Street,+Marylebone,+London"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-900 text-center md:text-left"
            >
              76 Wimpole Street, Marylebone, London
            </a>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h5 className="text-xl font-bold mb-3">VISIT HOURS</h5>
            <p>
              Mon-Fri: <time dateTime="09:00">9:00 AM</time> -{" "}
              <time dateTime="19:00">7:00 PM</time>
            </p>
            <p>
              Sat: <time dateTime="10:00">10:00 AM</time> -{" "}
              <time dateTime="15:00">3:00 PM</time>
            </p>
            <p>Sun: closed</p>
          </div>

          {/* Social */}
          <div className="flex flex-col items-center md:items-start">
            <h5 className="text-xl font-bold mb-3">FOLLOW US</h5>
            <a href="https://instagram.com" className="hover:text-blue-900">
              Instagram
            </a>
            <a href="https://facebook.com" className="hover:text-blue-900">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLayout;
