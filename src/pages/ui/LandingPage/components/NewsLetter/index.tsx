import NewsLetterForm from '@/components/Forms/NewsLetterForm'
import { FC } from 'react'
import styles from './NewsLetter.module.css'
export const NewsLetter: FC = ({}) => {
  return <section>
    <div className={styles.newsletter__container}>
        <div className={styles.newsletter__text}>
            <h2>Subscribe to our newsletter</h2>
            <p>Join our mailing list today to stay up-to-date on the latest healthcare trends and gain exclusive access to our latest features and updates.</p>
            <NewsLetterForm />
        </div>
    </div>
  </section>
}
