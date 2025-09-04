"use client";
import Image from "next/image";
import React from "react";
import mainLogo from "../../../public/images/main-logo.png";
import { FaInstagram } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

interface Scrolls {
  text1: string;
  text2: string;
  text3: string;
  text4?: string;
  text5?: string;
}

const FooterLayout = ({ text1, text2, text3, text4, text5 }: Scrolls) => {
  let navItems = [
    { name: text1, href: text1 },
    { name: text2, href: text2 },
    { name: text3, href: text3 },
    { name: text4, href: text4 },
    { name: text5, href: text5 },
  ];

  navItems.filter((item) => !!item.name);

  return (
    <div className="w-full bg-gradient-to-r from-blue-500 to-green-500 mt-20">
      <div className="py-10 px-5 flex flex-col md:flex-row md:items-start md:justify-between gap-10 md:gap-5 max-w-[1360px] md:mr-10 mx-auto">
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
            {navItems.map((item, index) => (
              <span
                key={index}
                className="text-white/90 cursor-pointer hover:text-blue-900 transition-colors duration-200 font-medium relative group"
                onClick={() => {
                  const element = document.getElementById(item.href as string);
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 text-white w-full md:w-auto">
          <div className="flex flex-col items-center md:items-start">
            <h5 className="text-xl font-bold mb-3">CONTACT US</h5>
            <a href="tel:+442012345678" className="hover:text-blue-900">
              +998 77 777 77 77
            </a>
            <a
              href="mailto:info@example.com"
              aria-label="Send email to info@example.com"
              className="hover:text-blue-900"
            >
              info@example.com
            </a>
            <a
              href="https://www.google.com/maps/place/Chilanzar-8,+Tashkent,+Tashkent+Region,+Uzbekistan/@41.2909454,69.1993458,1323m/data=!3m2!1e3!4b1!4m6!3m5!1s0x38ae8a3282dc4ad1:0xce2e8ab08abd91e!8m2!3d41.2894422!4d69.2058023!16s%2Fg%2F1tftjl8x?entry=ttu&g_ep=EgoyMDI1MDgzMC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-900 text-center md:text-left"
            >
              Chilanzar-8, Chilonzor, Toshkent
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
            <div className="flex items-center justify-between gap-3">
              <a href="https://instagram.com" target="_blank">
                <BsTelegram className="text-4xl rounded-full text-sky-600 bg-white" />
              </a>
              <a href="https://instagram.com" target="_blank">
                <FaInstagram className="text-4xl rounded-full text-white bg-gradient-to-tr from-purple-500 via-pink-500 to-yellow-500 p-2" />
              </a>
              <a href="https://facebook.com" target="_blank">
                <FaFacebook className="text-4xl bg-sky-600 rounded-full" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLayout;
