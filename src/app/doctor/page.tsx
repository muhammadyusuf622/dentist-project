"use client";
import { FooterLayout, NavbarLayout } from "@/layout";
import {
  HeaderSection,
  HeroSection,
  ServicesSection,
  AboutSection,
  LocationsSection,
  OurProcess,
} from "@/components";
import React from "react";

const TELEGRAM_BOT_URL = "https://t.me/stomatolog_booking_bot";

const Doctor = () => {
  return (
    <div className="min-h-screen">
      <HeaderSection telegramBotUrl={TELEGRAM_BOT_URL} />

      <main>
        <HeroSection telegramBotUrl={TELEGRAM_BOT_URL} />
        <AboutSection telegramBotUrl={TELEGRAM_BOT_URL} />
        <ServicesSection />
        <OurProcess telegramBotUrl={TELEGRAM_BOT_URL} />
        <LocationsSection />
      </main>

      <FooterLayout
        text1="xizmatlar"
        text2="joylashuvlar"
        text3="sug'urta"
        text4="biz haqimizda"
        text5="aloqa"
      />
    </div>
  );
};

export default Doctor;
