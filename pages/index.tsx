"use client";
import { useState } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DashboardPage from "./Dashboard";
import WhatItDoesPage from "./WhatItDoes";
import TalkToWorkSmarterPage from "./TalkToWorkSmarter";
import PricingPage from "./Pricing";
import FaqPage from "./Faq";
import ReadyToWorkPage from "./ReadyToWork";
import HowItWorksPage from "./HowItWorks";

export default function Home() {

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-[1440px] mx-auto">
      <Header />
      <DashboardPage />
      <WhatItDoesPage />
      <TalkToWorkSmarterPage />
      <HowItWorksPage />
      <PricingPage />
      <FaqPage />
      <ReadyToWorkPage />
      <Footer />
    </div>
  );
}
