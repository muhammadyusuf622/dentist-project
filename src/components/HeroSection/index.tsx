"use client";
import React from "react";
import Image from "next/image";
import { BsTelegram } from "react-icons/bs";

interface HeroSectionProps {
  telegramBotUrl: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ telegramBotUrl }) => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-teal-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-blue-200 rounded-full opacity-20 animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Stomatologga borish{" "}
                <span className="text-teal-600">juda qiziqarli</span> bo'ldi
              </h1>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                Dental Map - bu sizga ijobiy va ajoyib stomatologik tajriba
                taqdim etadigan zamonaviy stomatologiya klinikasi. Bizning
                professional jamoamiz sizning sog'ligingiz va qulayligingiz
                uchun ishlaydi.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={telegramBotUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-5 justify-between px-8 py-3  bg-teal-600 text-white font-semibold rounded-tr-4xl rounded-bl-4xl hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span className="text-[18px] cursor-pointer whitespace-nowrap">
                  Buyurtma berish
                </span>
                <BsTelegram className="mr-2 text-4xl" />
              </a>

              <button
                onClick={() => {
                  const element = document.getElementById("locationSection");
                  if (element) {
                    const y =
                      element.getBoundingClientRect().top +
                      window.scrollY -
                      100;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }}
                className="inline-flex cursor-pointer text-[16px] whitespace-nowrap items-center justify-center px-8 py-3 border-2 border-teal-600 text-teal-600 font-semibold rounded-tr-4xl rounded-bl-4xl hover:bg-teal-600 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Bizga yaqin studiyani toping
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="text-center sm:text-left">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto sm:mx-0 mb-3">
                  <span className="text-teal-600 font-bold text-lg">⚡</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Tez xizmat</h3>
                <p className="text-sm text-gray-600">
                  Zamonaviy texnologiyalar
                </p>
              </div>

              <div className="text-center sm:text-left">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto sm:mx-0 mb-3">
                  <span className="text-teal-600 font-bold text-lg">🕒</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Qulay vaqt</h3>
                <p className="text-sm text-gray-600">24/7 qo'llab-quvvatlash</p>
              </div>

              <div className="text-center sm:text-left">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto sm:mx-0 mb-3">
                  <span className="text-teal-600 font-bold text-lg">💰</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Arzon narx</h3>
                <p className="text-sm text-gray-600">Sug'urta va to'lov</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative z-10">
              <div className="w-full h-96 lg:h-[500px] lg:rounded-tl-[180px] relative overflow-hidden">
                <div className="w-full h-90 lg:h-[480px] bg-teal-300 rounded-tl-[120px] lg:rounded-tl-[190px] absolute z-0" />

                <div className="w-[96%] float-right z-10 h-full relative">
                  <Image
                    src="/images/ozkan-guner-Pc8lpKJwecM-unsplash.jpg"
                    alt="Zamonaviy stomatologiya ofisi"
                    fill
                    className="object-cover w-[90%] rounded-tl-[100px] lg:rounded-tl-[150px]"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Decorative background shape */}
            <div className="absolute -top-10 -right-10 w-80 h-80 bg-teal-200 rounded-full opacity-30 -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-200 rounded-full opacity-30 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
