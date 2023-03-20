import React from 'react';
import styles from './Footer.module.css';
import Image from 'next/image';
import {FaFacebook ,FaInstagram, FaTwitter} from 'react-icons/fa';

function FooterComponent() {
    return (
        <footer className={styles.footer}>
            <div className={styles["footer-section"]}>
                <h3>CareCircle</h3>
                <p>
                    CareCircle is a cutting-edge platform that Involves the community with their care providers.
                </p>
                <FaFacebook style={{color: 'white', fontSize: '20px', margin: '10px'}}/>
                <FaTwitter style={{color: 'white', fontSize: '20px', margin: '10px'}}/>
                <FaInstagram style={{color: 'white',  fontSize: '20px', margin: '10px'}}/>
            </div>
            <div className={styles["footer-section"]}>
                <h3>Menu</h3>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Partners</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className={styles["footer-section"]}>
                <h3>Services</h3>
                <ul>
                    <li>Book Appointment</li>
                    <li>Health Habits</li>
                    <li>Medical Diagnostics</li>
                    <li>Incident Responses</li>
                </ul>
            </div>
            <div className={styles["footer-section"]}>
                <h3>Subscribe to Newsletter</h3>
                <input type="text" placeholder='Enter your Email' />
                <button className={styles.btn}>Subscribe</button>
            </div>
        </footer>
    );
}

export default FooterComponent;