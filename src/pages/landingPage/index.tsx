import React from "react";
import { features } from "./features";
import {
  HeroSection,
  NewsLetter,
  Features
} from "./components";
import { Footer, NavBar } from "@/components";


export default function LandingPage() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Features features={features}/>
      <NewsLetter />
      <Footer />
    </>
  );
}
