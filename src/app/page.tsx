"use client";
import { AboutUsComponents, HeaderComponents, ServiceComponents, TestmonialsComponents } from "@/components";
import React from "react";

export default function Home() {
  return (
    <div className="">
      <HeaderComponents />
      <div className="md:w-[1300px] w-[370px] m-auto mt-30">
        <ServiceComponents />
        <AboutUsComponents />
        <TestmonialsComponents />
      </div>
    </div>
  );
}
