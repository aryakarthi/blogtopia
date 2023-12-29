"use client";
import React, { useState } from "react";
import styles from "./authLinks.module.css";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";

const AuthLinks = () => {
  const [open, setOpen] = useState();
  const status = "unauthenticated";
  return (
    <div>
      {status === "unauthenticated" ? (
        <>
          <Link href="/login" className={styles.link}>
            Login
          </Link>
        </>
      ) : (
        <div className={styles.authLinks}>
          <Link href="/write" className={styles.link}>
            Write
          </Link>
          <span className={styles.link}>Logout</span>
        </div>
      )}
      <HiMenu className={styles.hamburger} onClick={() => setOpen(!open)} />
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {status === "unauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <div className={styles.logout}>Logout</div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default AuthLinks;
