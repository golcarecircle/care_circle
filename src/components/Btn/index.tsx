import React from 'react';
import styles from './Button.module.css'

type Props = {
  onClick: () => void;
  text: string;
};

export default function Button({ onClick,  text}: Props) {
  return (
    <button className={styles.button}  onClick={onClick}>
        {text}
    </button>
  );
}
