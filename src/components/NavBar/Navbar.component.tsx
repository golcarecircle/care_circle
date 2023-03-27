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
                        <Link href='/health-habits'>Health Habits</Link>
                    </li>
                    <li>
                        <Link href='/partners'>Partners</Link>
                    </li>
                    <li>
                        <Link href='/my-dashboard'>My Dashboard</Link>
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
                    <div style={{border:'1px solid #ccc', display:'flex', padding: '5px', borderRadius: '30px'}}>
                        <Image src='/images/cart.webp' alt="image" style={{borderRadius:'50%', cursor:'pointer', margin:'0 10px'}} height={40} width={40}/>
                        <div>
                            <h4>Oliver Kipkemei</h4>
                            <p>+254741954426</p>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default NavComponent;