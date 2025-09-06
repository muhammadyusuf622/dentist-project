"use client";
import React from "react";
import Image from "next/image";
import { BsTelegram } from "react-icons/bs";
import FadeInSection from "../FadeInSection";

interface AboutSectionProps {
  telegramBotUrl: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ telegramBotUrl }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-teal-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-200 rounded-full opacity-20 animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <FadeInSection>
            <div className="relative order-2 lg:order-1">
              <div className="w-full h-93 lg:h-[670px] bg-teal-300 rounded-t-full lg:rounded-t-full absolute z-0" />
              <div className="relative z-10">
                <div className="w-[95%] float-right h-96 lg:h-[700px] relative rounded-t-full overflow-hidden shadow-2xl">
                  <Image
                    src="/images/doctors/doctor-women2.jpg"
                    alt="Tabassum qilayotgan yosh odam"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Decorative background shapes */}
              <div className="absolute -top-10 -left-10 w-80 h-80 bg-teal-200 rounded-full opacity-30 -z-10"></div>
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-pink-200 rounded-full opacity-30 -z-10"></div>

              {/* Pattern overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-100/20 to-pink-100/20 rounded-3xl -z-5"></div>
            </div>
          </FadeInSection>

          {/* Right Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <FadeInSection>
              <div className="space-y-6">
                <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wide">
                  Sizni sevadigan parvarish
                </h2>

                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Sizning{" "}
                  <span className="text-teal-600">
                    orzu qilgan tabassumingizni
                  </span>{" "}
                  amalga oshirishga yordam beramiz
                </h3>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Biz bemorlar bilan uzoq muddatli aloqalar o'rnatishga
                  ishonamiz. Sizning sog'ligingiz va qulayligingiz bizning
                  asosiy ustuvorligimizdir.
                </p>

                <p>
                  Biz oldindan saqlash va davolash uchun eng yangi stomatologik
                  texnologiyalardan foydalanamiz. Har bir bemor uchun individual
                  yondashuv va professional xizmat.
                </p>

                <p>
                  Biz keng qamrovli, hukm qilmaydigan va arzon stomatologik
                  xizmatlarni taqdim etamiz. Sizning tabassumingiz bizning
                  g'ururimizdir.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="pt-4">
                <a
                  href={telegramBotUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-teal-600 text-white font-semibold rounded-tr-4xl rounded-bl-4xl hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <BsTelegram className="mr-2 text-xl" />
                  Bot orqali buyurtma berish
                </a>
              </div>
            </FadeInSection>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
              <FadeInSection>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-teal-600 font-bold text-lg">🏥</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Professional jamoamiz
                    </h4>
                    <p className="text-sm text-gray-600">
                      Tajribali va malakali shifokorlar
                    </p>
                  </div>
                </div>
              </FadeInSection>

              <FadeInSection>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-teal-600 font-bold text-lg">🔬</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Zamonaviy texnologiya
                    </h4>
                    <p className="text-sm text-gray-600">
                      Eng so'nggi uskunalar va usullar
                    </p>
                  </div>
                </div>
              </FadeInSection>

              <FadeInSection>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-teal-600 font-bold text-lg">💝</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Individual yondashuv
                    </h4>
                    <p className="text-sm text-gray-600">
                      Har bir bemor uchun maxsus reja
                    </p>
                  </div>
                </div>
              </FadeInSection>

              <FadeInSection>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-teal-600 font-bold text-lg">💰</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Arzon narxlar
                    </h4>
                    <p className="text-sm text-gray-600">
                      Sug'urta va to'lov imkoniyatlari
                    </p>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
