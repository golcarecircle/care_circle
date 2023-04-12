import React, { FC } from 'react';
import styles from './Feature.module.css';

interface FeatureProps {
  src: string;
  alt: string;
  featureText: string;
  reverseOrder?: boolean;
}

const Feature: FC<FeatureProps> = ({
  src,
  alt,
  featureText,
  reverseOrder = false,
}) => {
  const featureContainerClass = `${styles.feature__container} ${
    reverseOrder ? styles.reverse : ''
  }`;
  return (
    <section className={styles.feature}>
      <div className={featureContainerClass}>
        <div className={styles.feature__text}>
          <p>{featureText}</p>
        </div>
        <div className={styles.feature__img}>
          <img src={src} alt={alt} className={styles.img} />
        </div>
      </div>
    </section>
  );
};

export default Feature;
