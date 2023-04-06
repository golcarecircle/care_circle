import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaPhone, FaEnvelope } from 'react-icons/fa'

import styles from './Footer.module.css'
import Logo from '../Logo'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__column}>
          <Link href="/" className={styles.footer__logo}>
            <Logo size='small' />
          </Link>
         <p>Take control of your health with cutting-edge technology at your fingertips</p>
          <div className={styles.footer__socials}>
            <Link href="https://www.facebook.com/"><FaFacebook /></Link>
            <Link href="https://www.twitter.com/"><FaTwitter /></Link>
            <Link href="https://www.instagram.com/"><FaInstagram /></Link>
            <Link href="https://www.linkedin.com/"><FaLinkedin /></Link>
            <Link href="https://www.youtube.com/"><FaYoutube /></Link>
          </div>
        </div>
        <div className={styles.footer__column}>
          <h3>Product</h3>
          <ul>
            <li><Link href="/product/features">Features</Link></li>
            <li><Link href="/product/pricing">Pricing</Link></li>
            <li><Link href="/product/testimonials">Testimonials</Link></li>
          </ul>
        </div>
        <div className={styles.footer__column}>
          <h3>Company</h3>
          <ul>
            <li><Link href="/company/about">About Us</Link></li>
            <li><Link href="/company/careers">Careers</Link></li>
            <li><Link href="/company/partners">Partners</Link></li>
          </ul>
        </div>
        <div className={styles.footer__column}>
          <h3>Support</h3>
          <ul>
            <li><Link href="/support/faq">FAQs</Link></li>
            <li><Link href="/support/helpdesk">Help Desk</Link></li>
            <li><Link href="/support/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className={styles.footer__column}>
          <h3>Contact</h3>
          <ul>
            <li><a href="tel:123-456-7890"><FaPhone /> 123-456-7890</a></li>
            <li><a href="mailto:info@mycompany.com"><FaEnvelope /> info@mycompany.com</a></li>
          </ul>
        </div>
      </div>
      <p>Copyright &copy; {new Date().getFullYear()} carecircle</p>
    </footer>
  )
}

export default Footer
