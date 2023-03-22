import Link from "next/link";
import React from "react";
import navStyles from './Navbar.module.css'
import Image from "next/image";
function NavComponent() {
    return(
        <header className={navStyles.header}>
            <h1>CareCircle</h1>
            <nav className={navStyles.nav}>
                <ul className={navStyles['nav-links']}>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href='/about'>About</Link>
                    </li>
                    <li>
                        <Link href='/partners'>Health Habits</Link>
                    </li>
                    <li>
                        <Link href='/partners'>Partners</Link>
                    </li>
                    <li>
                        <Link href='/contact'>Contact Us</Link>
                    </li>
                </ul>
                <div style={{display: 'flex', alignItems:'center'}}>
                    <button className={navStyles.btn}>Book Appointment</button>
                    <button className={navStyles.btn}>
                        <Link href='/auth'>Login/Register</Link>
                    </button>
                    <Image src='/images/cart.webp' alt="image" style={{borderRadius:'50%', cursor:'pointer', margin:'0 10px'}} height={40} width={40}/>
                </div>
            </nav>
        </header>
    )
}
export default NavComponent;