import Button from '@/components/Btn';
import React, { FC } from 'react';
import styles from './NewsLetterForm.module.css';

const NewsLetterForm: FC = ({}) => {
  return (
    <div className={styles.news__letter__form}>
      <form>
        <input type="email" placeholder="Enter your email address" />
        <Button text="Subscribe" onClick={() => {}} />
      </form>
    </div>
  );
};

export default NewsLetterForm;
