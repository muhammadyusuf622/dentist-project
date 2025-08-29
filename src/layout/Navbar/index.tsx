"use client";
import { useState, useEffect } from "react";
import mainLogo from "../../../public/images/main-logo.png";
import Image from "next/image";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // Pastga scroll qilinsa, navbarni yashirish
      setShow(false);
    } else {
      // Tepaga scroll qilinsa, navbarni ko'rsatish
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`w-full h-16 md:h-16 fixed top-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/10 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center space-x-2">
            <Image
              src={mainLogo.src || "/placeholder.svg"}
              alt="Logo"
              width={50}
              height={50}
              className="rounded-lg"
            />
            <span className="text-white font-semibold text-lg hidden sm:block">
              Brand
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <span
                key={item.name}
                className="text-blue-700/90 cursor-pointer hover:text-blue-900 transition-colors duration-200 font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-900 transition-all duration-200 group-hover:w-full"></span>
              </span>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/70 backdrop-blur-[100px] border-b border-white/30">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <span
                  key={item.name}
                  className="block text-white/90 cursor-pointer hover:text-white/70 transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
