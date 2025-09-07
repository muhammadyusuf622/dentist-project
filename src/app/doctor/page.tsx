"use client";
import { FooterLayout, NavbarLayout } from "@/layout";
import {
  HeaderSection,
  HeroSection,
  ServicesSection,
  AboutSection,
  LocationsSection,
  OurProcess,
  ReviewsSection,
  PaymentsSection,
  InstagramSection,
  BlogSection,
  CTASection,
  FooterDoctor,
} from "@/components";
import React from "react";

const TELEGRAM_BOT_URL = "https://t.me/stomatolog_booking_bot";

const Doctor = () => {
  return (
    <div className="min-h-screen">
      <HeaderSection telegramBotUrl={TELEGRAM_BOT_URL} />

      <main>
        <HeroSection telegramBotUrl={TELEGRAM_BOT_URL} />
        <ReviewsSection />
        <AboutSection telegramBotUrl={TELEGRAM_BOT_URL} />
        <ServicesSection />
        <PaymentsSection telegramBotUrl={TELEGRAM_BOT_URL} />
        <InstagramSection />
        <BlogSection />
        <OurProcess telegramBotUrl={TELEGRAM_BOT_URL} />
        <LocationsSection />
        <CTASection telegramBotUrl={TELEGRAM_BOT_URL} />
        <FooterDoctor telegramBotUrl={TELEGRAM_BOT_URL} />
      </main>
    </div>
  );
};

export default Doctor;
