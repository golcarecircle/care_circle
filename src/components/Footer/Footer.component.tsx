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
                <FaFacebook style={{color: 'blue', fontSize: '20px', margin: '10px'}}/>
                <FaTwitter style={{color: 'blue', fontSize: '20px', margin: '10px'}}/>
                <FaInstagram style={{color: 'blue',  fontSize: '20px', margin: '10px'}}/>
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
                <h3>Further Information</h3>
                <ul>
                    <li>Terms and Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Cookie Policy</li>
                </ul>
            </div>
        </footer>
    );
}

export default FooterComponent;