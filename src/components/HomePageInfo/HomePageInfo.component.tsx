import React from 'react';
import Image from 'next/image';
import styles from './HomePageInfo.module.css';
function HomePageInfoComponent() {
    const newLocal = "/images/doctor.png";
    return (
        <>
            <section className={styles.section}>
                <div>
                    <h3>Welcome to CareCircle</h3>
                    <p>
                        CareCircle is a cutting-edge platform that Involves the community with their care providers.
                        We are a community of care providers and patients who are dedicated to providing the best care possible.
                    </p>
                    
                    <button className={styles.btn}>Explore</button>
                    <button className={styles.btn2}>Read More</button>
                </div>
                <Image src='/images/children.jpg' alt="Picture of the author" width={500} height={500} />
            </section>
            <section className={styles.section}>
                <div className={styles['function-info']}>
                    <h3>Our Mission</h3>
                    <p>
                        To provide the best care possible to our patients and to provide the best experience possible to our care providers.
                    </p>
                </div>  
                <div className={styles['function-info']}>
                    <h3>Appointments</h3>
                    <p>
                        Book an appointment with a care provider.
                    </p>
                    <p style={{color: 'blue', position:'absolute', bottom: '0'}}>Appointments &rarr; </p>
                </div>  
                <div className={styles['function-info']}>
                    <h3>Emergency Care</h3>
                    <p>
                        Contact the number incase of an emergency
                    </p>
                    <p style={{color: 'blue', position:'absolute', bottom: '0'}} > +254 712-345-789 &rarr; </p>
                </div>  
                <div className={styles['function-info']}>
                    <h3>Medical Diagnostics</h3>
                    <p>
                        AI capabilities provides accurate and fast medical diagnostics.
                    </p>
                    <p style={{color: 'blue', position:'absolute', bottom: '0'}}>Read more &rarr; </p>
                </div>  
            </section>
        </>
    );
}

export default HomePageInfoComponent;