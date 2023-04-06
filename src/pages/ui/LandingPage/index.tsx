import HeroSection from "@/pages/ui/LandingPage/components/HeroSection";
import React from "react";
import Features from "@/pages/ui/LandingPage/components/Feature";
import { features } from "./features";
import { NewsLetter } from "./components/NewsLetter";

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <div className="features">
        {features.map((feature, index) => (
          <Features
            key={index}
            src={feature.src}
            alt={feature.alt}
            featureText={feature.featureText}
            reverseOrder={feature.reverseOrder}
          />
        ))}
      </div>
      <NewsLetter />
    </>
  );
}
