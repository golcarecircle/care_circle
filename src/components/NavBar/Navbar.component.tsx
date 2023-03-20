import Link from "next/link";
import React from "react";
import navStyles from './Navbar.module.css'
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
                <button className={navStyles.btn}>Book Appointment</button>
                <button className={navStyles.btn}>Login/SignUp</button>
            </nav>
        </header>
    )
}
export default NavComponent;