import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="Blogtopia" width={50} height={50} />
          <h1 className={styles.logoText}>Blogtopia</h1>
        </div>
        <p className={styles.desc}>
          Blogtopia is a home for human stories and ideas. Here, anyone can
          share insightful perspectives, useful knowledge, and life wisdom with
          the world. It’s simple, beautiful, collaborative, and helps you find
          the right audience for whatever you have to say.
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="" width={24} height={24} />
          <Image src="/instagram.png" alt="" width={24} height={24} />
          <Image src="/linkedin.png" alt="" width={24} height={24} />
          <Image src="/youtube.png" alt="" width={24} height={24} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Home</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Trending</span>
          <Link href="/">Technology</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Science</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">LinkedIn</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
