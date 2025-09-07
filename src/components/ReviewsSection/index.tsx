"use client";
import React from "react";
import FadeInSection from "../FadeInSection";

const ReviewsSection: React.FC = () => {
  const stats = [
    { id: 1, label: "Google reytingi", value: "4.9/5" },
    { id: 2, label: "Sharhlar soni", value: "10 000+" },
    { id: 3, label: "Bemorlardan tavsiya", value: "98%" },
  ];

  return (
    <section className="bg-teal-900 text-white py-16">
      <FadeInSection>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-teal-200 text-sm">Siz ham yaxshi qo'ldasiz</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Bemorlarimizdan ajoyib fikrlar
            </h2>
            <p className="text-teal-200 mt-2">10 000+ 5 yulduzli sharhlar</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl bg-white/10 border border-white/10 p-6 text-center backdrop-blur"
              >
                <p className="text-3xl font-bold">{item.value}</p>
                <p className="text-teal-200 mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default ReviewsSection;
