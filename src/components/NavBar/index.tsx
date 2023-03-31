import React from "react";
import {medIcon} from "@/assets/icons";
import styles from "./NavBar.module.css";
import Link from "next/link";
import Button from "../Btn";

export default function NavBar() {
    return (
        <nav className = {styles.nav}>
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
                    <Button onClick={() => { } } name={"Sign Up"} />
                </li>
            </ul>
        </nav>
    );
}