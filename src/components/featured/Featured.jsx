import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
const Featured = () => {
  return (
    <div className={styles.container}>
      <p className={styles.greet}>Hello Everyone.!</p>
      <h1 className={styles.title}>
        I'm <span className={styles.authorName}>aryakarthi</span>.
      </h1>
      <p className={styles.authorMsg}>
        Discover my stories and creative ideas..!
      </p>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/featured_img.jpg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Welcome to Blogtopia</h1>
          <p className={styles.postDesc}>
            We are passionate about sharing our knowledge and experiences with
            the world. Our goal is to create a platform where we can connect
            with people who share our interests and inspire them to learn and
            grow.
            <br />
            <br />
            We believe that everyone has something valuable to contribute, and
            we want to help you share your voice with the world. Join us on our
            journey and let’s explore the world together!
          </p>
          <button className={styles.button}>Explore</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
