import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/AuthLinks";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Image src="/logo.png" alt="Youtube" width={50} height={50} />
        <span className={styles.logo}>Blogtopia</span>
      </div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/" className={styles.link}>
          About
        </Link>
        <Link href="/" className={styles.link}>
          Contact
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
