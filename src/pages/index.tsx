/* eslint-disable react/no-unescaped-entities */
import Features from "@/component/features";
import Footer from "@/component/footer";
import HeroSection from "@/component/hero_section";
import HowTo from "@/component/how_to";
import Navbar from "@/component/navbar";
import { FC } from "react";

interface indexProps {}

const index: FC<indexProps> = ({}) => {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <Features />
      <HowTo />
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-16 lg:px-6">
          <div className="max-w-screen-sm mx-auto text-center">
            <h2 className="mb-4 text-4xl font-extrabold leading-tight text-gray-900 dark:text-white">
              Take control of your health
            </h2>
            <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
              Explore the features of CareCircle and empower yourself to lead a
              healthier, more informed life.
            </p>
            <a
              href="/auth/register"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Get started
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default index;
