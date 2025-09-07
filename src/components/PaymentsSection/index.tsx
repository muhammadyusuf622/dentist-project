"use client";
import React from "react";
import FadeInSection from "../FadeInSection";

interface PaymentSectionProps {
  telegramBotUrl: string;
}

const PaymentsSection: React.FC<PaymentSectionProps> = ({ telegramBotUrl }) => {
  const options = [
    {
      id: 1,
      title: "Ko'pchilik sug'urtalar qabul qilinadi",
      desc: "Sug'urta bilan kelgan bemorlar uchun hisob-kitobni oson va tez amalga oshiramiz.",
      cta: "Qamrovni tekshirish",
    },
    {
      id: 2,
      title: "A'zolik dasturi",
      desc: "Murakkab sug'urta shartlarisiz, arzon narxlarda yil bo'yi parvarish.",
      cta: "A'zolikka yozilish",
    },
    {
      id: 3,
      title: "Moslashuvchan to'lov",
      desc: "Bo'lib-bo'lib to'lash imkoniyatlari bilan davolanishni kechiktirmang.",
      cta: "Moliyalashtirish haqida",
    },
  ];

  return (
    <section className="py-16 bg-amber-50">
      <FadeInSection>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Moslashuvchan to'lov variantlari
            </h2>
            <p className="text-gray-600 mt-2">
              Byudjetingizga mos, sifatdan voz kechmasdan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {options.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl bg-white p-6 shadow border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-3">{item.desc}</p>
                <a
                  href={telegramBotUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="mt-6 inline-flex items-center px-5 py-2 text-teal-700 font-semibold border border-teal-600 rounded-tr-3xl rounded-bl-3xl hover:bg-teal-600 hover:text-white transition"
                >
                  {item.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default PaymentsSection;
