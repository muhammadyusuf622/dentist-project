"use client";
import { AboutUsComponents, HeaderComponents, ServiceComponents } from "@/components";
import React from "react";

export default function Home() {
  return (
    <div className="h-700">
      <HeaderComponents />
      <div className="md:w-[1300px] m-auto mt-30">
        <ServiceComponents />
        <AboutUsComponents />
      </div>
    </div>
  );
}
