import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={"/featured_img.jpg"} alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>30-12-2023</span>
          <span className={styles.category}>Technology</span>
        </div>
        <Link href={"/"}>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ea?
          </h3>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          aperiam at eum odit veritatis consequuntur nihil blanditiis hic
          excepturi corporis quidem quod aliquid consectetur corrupti numquam,
          ipsum magnam suscipit enim!
        </p>
        <Link href={"/"} className={styles.link}>Read More</Link>
      </div>
    </div>
  );
};

export default Card;
