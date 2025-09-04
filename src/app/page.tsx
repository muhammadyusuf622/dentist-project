"use client";
import { AboutUsComponents, HeaderComponents, ServiceComponents, TestmonialsComponents } from "@/components";
import { FooterLayout, NavbarLayout } from "@/layout";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <NavbarLayout
        text1="home"
        text2="services"
        text3="about"
        text4="testimonials"
      />
      <div>
        <HeaderComponents />
        <div className="md:w-[1300px] w-[370px] m-auto mt-30">
          <ServiceComponents />
          <AboutUsComponents />
          <TestmonialsComponents />
        </div>
      </div>
      <FooterLayout
        text1="home"
        text2="services"
        text3="about"
        text4="testimonials"
      />
    </div>
  );
}
