import React, { useState, useEffect } from "react";
import { medIcon } from "@/assets/icons";
import styles from "./NavBar.module.css";
import Link from "next/link";
import Button from "../Btn";

export default function NavBar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  };

  return (
    <nav style={{ backgroundColor: visible ? "transparent" : "#f8f8f8" }}>
      <div className={styles.nav}>
        <div className={styles.logo}>
          {medIcon()}
          <h1 className={styles.brand}> CareCircle</h1>
        </div>
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
            <Button onClick={() => {}} name={"Sign Up"} />
          </li>
        </ul>
      </div>
    </nav>
  );
}
