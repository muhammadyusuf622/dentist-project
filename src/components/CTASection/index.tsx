"use client";
import React from "react";
import FadeInSection from "../FadeInSection";

interface CTASectionProps {
  telegramBotUrl: string;
}

const CTASection: React.FC<CTASectionProps> = ({ telegramBotUrl }) => {
  return (
    <FadeInSection>
      <section className="py-16 flex items-center h-150 relative bg-amber-100/60">
        <div className="max-w-4xl flex flex-col items-center mx-auto px-4 text-center">
          <div className="rounded-t-full z-0 sm:w-[40%] w-[75%] absolute bottom-0 h-[95%] bg-green-200/40 mx-auto" />
          <div className="sm:w-[60%] z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-700">
              Uchrashuvni bron qilishga tayyormisiz?
            </h2>
            <p className="text-gray-600 mt-3">
              Uchrashuvingizni bugun belgilang va Swish Dental farqini his
              qiling. Biz stresssiz stomatologik tajribani ta'minlab, qulay
              sug'urta va moliyalashtirish imkoniyatlarini taqdim etamiz.
            </p>
          </div>
          <FadeInSection>
            <div className="mt-6 flex z-10 items-center justify-center gap-4 flex-wrap">
              <a
                href={telegramBotUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-tr-3xl rounded-bl-3xl hover:bg-teal-700"
              >
                Uchrashuvni bron qilish
              </a>
              <span
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
                className="px-6 py-3 border border-teal-600 text-teal-700 font-semibold rounded-tr-3xl rounded-bl-3xl hover:bg-teal-600 hover:text-white"
              >
                Yaqqin studiyani topish
              </span>
            </div>
          </FadeInSection>
        </div>
      </section>
    </FadeInSection>
  );
};

export default CTASection;
