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
import IntegrationPage from "./Integration";
import TestimonialsPage from "./Testimonials";
import FeaturesPage from "./Features";

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Header />
      <DashboardPage />
      <WhatItDoesPage />
      <TalkToWorkSmarterPage />
      <HowItWorksPage />
      <FeaturesPage />
      <TestimonialsPage />
      <IntegrationPage />
      <PricingPage />
      <FaqPage />
      <ReadyToWorkPage />
      <Footer />
    </div>
  );
}
