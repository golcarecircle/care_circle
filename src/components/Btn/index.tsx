import React from 'react';
import styles from './Button.module.css'

type Props = {
  onClick: () => void;
  name: string;
};

export default function Button({ onClick,  name}: Props) {
  return (
    <button className={styles.button}  onClick={onClick}>
        {name}
    </button>
  );
}
