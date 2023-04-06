import React, { FC } from "react";
import Feature from "../Feature";

interface FeaturesProps {
  features: {
    src: string;
    alt: string;
    featureText: string;
    reverseOrder?: boolean;
  }[];
}

const Features: FC<FeaturesProps> = ({ features }) => {
  return (
    <section>
      <div className="features">
        {features.map((feature, index) => (
          <Feature
            key={index}
            src={feature.src}
            alt={feature.alt}
            featureText={feature.featureText}
            reverseOrder={feature.reverseOrder}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
