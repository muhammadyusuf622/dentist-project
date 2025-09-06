"use client";
import Image from "next/image";
import React from "react";
import { BsTelegram } from "react-icons/bs";

import mainLogo from "../../../public/mainlogo.jpg";

interface HeaderSectionProps {
  telegramBotUrl: string;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({ telegramBotUrl }) => {
  return (
    <header
      id="heroSection"
      className="bg-white shadow-sm border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center overflow-hidden justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-20 h-20 relative rounded-full overflow-hidden flex items-center justify-center">
              <Image
                src={mainLogo.src}
                alt="this Main logo"
                className="object-cover"
                fill
                priority
              />
            </div>
            <span className="text-xl font-bold text-gray-900">Dental Map</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <span
              onClick={() => {
                const element = document.getElementById("serviceSection");
                if (element) {
                  const y =
                    element.getBoundingClientRect().top + window.scrollY - 100;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
              className="text-gray-600 cursor-pointer hover:text-teal-600 font-medium transition-colors"
            >
              Xizmatlar
            </span>
            <span
              onClick={() => {
                const element = document.getElementById("locationSection");
                if (element) {
                  const y =
                    element.getBoundingClientRect().top + window.scrollY - 100;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
              className="text-gray-600 cursor-pointer hover:text-teal-600 font-medium transition-colors"
            >
              Joylashuvlar
            </span>
            <span className="text-gray-600 cursor-pointer hover:text-teal-600 font-medium transition-colors">
              Sug'urta
            </span>
            <span className="text-gray-600 cursor-pointer hover:text-teal-600 font-medium transition-colors">
              Biz haqimizda
            </span>
            <span className="text-gray-600 cursor-pointer hover:text-teal-600 font-medium transition-colors">
              Aloqa
            </span>
          </nav>

          {/* Contact Info & CTA */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:block text-right">
              <p className="text-sm text-gray-600">Qo'ng'iroq qiling</p>
              <p className="font-semibold text-gray-900">+998 77 777 77 77</p>
            </div>

            <a
              href={telegramBotUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-teal-600 text-white font-semibold rounded-tr-3xl rounded-bl-3xl hover:bg-teal-700 transition-colors duration-200"
            >
              <BsTelegram className="mr-2" />
              <span className="whitespace-nowrap">Buyurtma berish</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
