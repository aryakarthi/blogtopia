import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";
const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Popular Categories</h2>
      <div className={styles.categories}>
        <Link href={"/blog?cat=style"} className={styles.category}>
          <Image
            src={"/technology.png"}
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Technology
        </Link>
        <Link href={"/blog?cat=style"} className={styles.category}>
          <Image
            src={"/health.png"}
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Health
        </Link>
        <Link href={"/blog?cat=style"} className={styles.category}>
          <Image
            src={"/gaming.png"}
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Gaming
        </Link>
        <Link href={"/blog?cat=style"} className={styles.category}>
          <Image
            src={"/travel.png"}
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Travel
        </Link>
        <Link href={"/blog?cat=style"} className={styles.category}>
          <Image
            src={"/sports.png"}
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Sports
        </Link>
        <Link href={"/blog?cat=style"} className={styles.category}>
          <Image
            src={"/education.png"}
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Education
        </Link>
        <Link href={"/blog?cat=style"} className={styles.category}>
          <Image
            src={"/nature.png"}
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Nature
        </Link>
        <Link href={"/blog?cat=style"} className={styles.category}>
          <Image
            src={"/fashion.png"}
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Fashion
        </Link>
        <Link href={"/blog?cat=style"} className={styles.category}>
          <Image
            src={"/photography.png"}
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Photography
        </Link>
        <Link href={"/blog?cat=style"} className={styles.category}>
          <Image
            src={"/science.png"}
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Science
        </Link>
        <Link href={"/blog?cat=style"} className={styles.category}>
          <Image
            src={"/politics.png"}
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Politics
        </Link>
        <Link href={"/blog?cat=style"} className={styles.category}>
          <Image
            src={"/productivity.png"}
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Productivity
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
