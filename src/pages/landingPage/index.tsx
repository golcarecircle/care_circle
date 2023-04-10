import React from "react";
import { features } from "./features";
import {
  HeroSection,
  NewsLetter,
  Features
} from "./components";
import { Footer } from "@/components";


export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <Features features={features}/>
      <NewsLetter />
      <Footer />
    </>
  );
}
