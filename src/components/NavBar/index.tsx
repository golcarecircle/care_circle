import React, { FC, useState, useEffect } from "react";
import styles from "./NavBar.module.css";
import Link from "next/link";
import Button from "../Btn";
import Logo from "../Logo";

const NavBar: FC = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setVisible(
        (prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) ||
          currentScrollPos < 10
      );

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={visible ? styles.navCont : `${styles.navCont} ${styles.scrolled}`}>
      <div className={styles.nav}>
        <Link href={"/"}>
          <Logo size="medium"/>
        </Link>
        
        <ul className={styles.links}>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/how-to-use"}>How to Use</Link>
          </li>
          <li>
            <Button onClick={() => {}} text={"Sign Up"} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
