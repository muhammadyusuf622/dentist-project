"use client";
import React from "react";
import Image from "next/image";
import imagesHero1 from '../../../public/images/doctors/doctor-women2.jpg'
import imagesHero2 from '../../../public/images/doctors/doctor-women3.jpg'
import imagesHero3 from '../../../public/images/human/girlteeth2.jpg'
import imagesHero4 from '../../../public/images/doctors/doctorwomen.jpg'
import imagesHero5 from '../../../public/images/doctors/doctor1.jpg'
import imagesHero6 from '../../../public/images/human/teeth2-man.jpg'
import FadeInSection from "../FadeInSection";

const ServicesSection: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Oldindan saqlash stomatologiyasi",
      description:
        "Tishlaringizni sog'lom saqlash va kasalliklarning oldini olish uchun professional xizmatlar",
      image: imagesHero1.src,
      icon: "🦷",
    },
    {
      id: 2,
      title: "Tiklanish stomatologiyasi",
      description:
        "Buzilgan tishlarni tiklash va funksiyalarini qayta tiklash bo'yicha zamonaviy usullar",
      image: imagesHero2.src,
      icon: "🔧",
    },
    {
      id: 3,
      title: "Stomatologik favqulodda holatlar",
      description:
        "24/7 favqulodda stomatologik yordam va tez tiklanish xizmatlari",
      image: imagesHero3.src,
      icon: "🚨",
    },
    {
      id: 4,
      title: "Invisalign",
      description:
        "Ko'rinmaydigan tishlarni to'g'rilash tizimi - zamonaviy va qulay yechim",
      image: imagesHero4.src,
      icon: "✨",
    },
    {
      id: 5,
      title: "Kosmetik stomatologiya",
      description:
        "Tabiiy va chiroyli tabassum uchun kosmetik tishlarni tiklash xizmatlari",
      image: imagesHero5.src,
      icon: "💎",
    },
    {
      id: 6,
      title: "Tishlarni oqartirish",
      description:
        "Professional tishlarni oqartirish va parvarish qilish xizmatlari",
      image: imagesHero6.src,
      icon: "🌟",
    },
  ];

  return (
    <section id="serviceSection" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wide mb-4">
              Davolash variantlari
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Stomatologik xizmatlar{" "}
              <span className="text-teal-600">qulay va xavfsiz</span> muhitda
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Biz sanoat yetakchisi davolash variantlarini, keng qamrovli
              sug'urta qamrovini va moslashuvchan moliyalashtirish
              imkoniyatlarini taklif etamiz.
            </p>
          </div>
        </FadeInSection>

        {/* Services Grid */}
        <FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service) => (
              <div
                key={service.id}
                className="group bg-white rounded-b rounded-tr-[80px] shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
              >
                <div className="relative h-68 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-colors group"
                  >
                    Batafsil ma'lumot
                    <svg
                      className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>

        {/* Call to Action Buttons */}
        <FadeInSection>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const element = document.getElementById("heroSection");
                if (element) {
                  const y =
                    element.getBoundingClientRect().top + window.scrollY - 100;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
              className="inline-flex items-center cursor-pointer justify-center px-8 py-4 bg-teal-600 text-white font-semibold rounded-tr-4xl rounded-bl-4xl hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Barcha Dental Map xizmatlarini ko'rish
            </button>

            <button
              onClick={() => {
                const elemetn = document.getElementById("locationSection");
                if (elemetn) {
                  const y =
                    elemetn.getBoundingClientRect().top + window.scrollY - 100;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-teal-600 text-teal-600 font-semibold rounded-tr-4xl rounded-bl-4xl hover:bg-teal-600 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Bizga yaqin studiyani toping
            </button>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default ServicesSection;
