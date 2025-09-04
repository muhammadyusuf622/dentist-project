"use client"
import { NavbarLayout } from "@/layout";
import React from "react";
import { FaBolt, FaClock, FaPercent, FaComments } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";


const TELEGRAM_BOT_URL = "https://t.me/your_bot_username";

const Doctor = () => {
  return (
    <div>
      <NavbarLayout
        text1="hero"
        text2="benefits"
        text3="testimonials"
        text4="contact"
      />
      <div className="md:w-[1310px] w-[370px] m-auto mt-10 md:mt-20">
        {/* Hero Section */}
        <section
          id="hero"
          className="rounded-2xl p-6 md:p-10 text-center text-white"
          style={{
            background:
              "linear-gradient(135deg, rgba(59,130,246,1) 0%, rgba(34,197,94,1) 60%, rgba(250,204,21,1) 100%)",
          }}
        >
          <h1 className="text-2xl md:text-4xl font-bold">
            Stomatologiya uchun qulay yordamchi — Telegram bot
          </h1>
          <p className="mt-3 md:mt-4 text-sm md:text-base opacity-95">
            Navbat olish, maslahat so'rash va aksiyalarni kuzatish — barchasi
            bitta botda.
          </p>
          <a
            href={TELEGRAM_BOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 mt-5 md:mt-7 px-5 py-3 md:px-7 md:py-4 text-sm md:text-2xl font-semibold rounded-xl bg-white text-sky-700 hover:bg-blue-50 transition-colors shadow"
          >
            <span>Botga o'tish</span>{" "}
            <BsTelegram className="text-4xl rounded-full text-sky-600 bg-white" />
          </a>
        </section>

        {/* Benefits */}
        <section id="benefits" className="mt-10 md:mt-16">
          <h2 className="text-xl md:text-2xl font-semibold text-blue-900 text-center">
            Nega bizning botdan foydalanish qulay?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-6">
            <BenefitCard
              icon={<FaClock className="text-sky-600" />}
              title="Tez navbat olish"
              desc="Keraksiz qo'ng'iroqlarsiz onlayn yozilish."
            />
            <BenefitCard
              icon={<FaBolt className="text-sky-600" />}
              title="24/7 xizmat"
              desc="Istalgan vaqtda foydalanish mumkin."
            />
            <BenefitCard
              icon={<FaPercent className="text-sky-600" />}
              title="Chegirmalar va yangiliklar"
              desc="Aksiyalar haqida birinchilardan bo'lib xabardor bo'ling."
            />
            <BenefitCard
              icon={<FaComments className="text-sky-600" />}
              title="Maslahat olish"
              desc="Tezkor javob va foydali ma'lumotlar."
            />
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="mt-10 md:mt-16">
          <h2 className="text-xl md:text-2xl font-semibold text-blue-900 text-center">
            Biz haqimizda mijozlarimiz nimalar deyishadi?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-6">
            <Quote
              text="Navbat olish juda oson bo'ldi, vaqtimni tejaydi!"
              author="Dilnoza A."
            />
            <Quote
              text="Bot orqali maslahat olib, shifokorga borishga qaror qildim. Juda qulay."
              author="Azizbek R."
            />
            <Quote
              text="Endi qog'oz daftar emas, faqat Telegram orqali yozilaman."
              author="Kamola S."
            />
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="mt-10 md:mt-16">
          <h2 className="text-xl md:text-2xl font-semibold text-blue-900 text-center">
            Biz bilan bog'laning
          </h2>
          <p className="text-center text-slate-600 mt-2">
            Savolingiz bormi? Xodimlarimiz tez orada sizga javob beradi.
          </p>
          <form
            className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="md:col-span-1">
              <label className="block text-sm text-slate-600 mb-1">Ism</label>
              <input
                type="text"
                placeholder="Ismingiz"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-sky-500"
                required
              />
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm text-slate-600 mb-1">
                Telefon raqami
              </label>
              <input
                type="tel"
                placeholder="(+998) 90 123 45 67"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-sky-500"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm text-slate-600 mb-1">Xabar</label>
              <textarea
                placeholder="Xabaringiz"
                rows={5}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-sky-500"
                required
              />
            </div>
            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="px-6 py-2 w-[50%] cursor-pointer rounded-xl text-2xl font-semibold text-white shadow"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(34,197,94,1) 0%, rgba(59,130,246,1) 100%)",
                }}
              >
                Yuborish
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

const BenefitCard = ({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) => {
  return (
    <div className="rounded-2xl border border-slate-200 p-4 md:p-6 bg-white">
      <div className="text-2xl">{icon}</div>
      <p className="mt-3 font-semibold text-slate-800">{title}</p>
      <p className="text-slate-600 text-sm mt-1">{desc}</p>
    </div>
  );
};

const Quote = ({ text, author }: { text: string; author: string }) => {
  return (
    <div className="rounded-2xl p-4 md:p-6 bg-white border border-slate-200">
      <p className="text-slate-700">“{text}”</p>
      <p className="mt-3 text-sm text-slate-500">— {author}</p>
    </div>
  );
};

export default Doctor;
