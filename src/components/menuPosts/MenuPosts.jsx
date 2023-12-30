import Image from "next/image";
import styles from "./menuPosts.module.css";
import Link from "next/link";
const MenuPosts = ({ withImg }) => {
  return (
    <div className={styles.items}>
      <Link href={"/"} className={styles.item}>
        {withImg && (
          <div className={styles.imgContainer}>
            <Image
              src="/featured_img.jpg"
              alt=""
              fill
              className={styles.image}
            />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.technology}`}>
            Technology
          </span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, ut.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Tony Starc</span>
            <span className={styles.date}>30-12-2023</span>
          </div>
        </div>
      </Link>
      <Link href={"/"} className={styles.item}>
        {withImg && (
          <div className={styles.imgContainer}>
            <Image
              src="/featured_img.jpg"
              alt=""
              fill
              className={styles.image}
            />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.health}`}>Health</span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, ut.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Tony Starc</span>
            <span className={styles.date}>30-12-2023</span>
          </div>
        </div>
      </Link>
      <Link href={"/"} className={styles.item}>
        {withImg && (
          <div className={styles.imgContainer}>
            <Image
              src="/featured_img.jpg"
              alt=""
              fill
              className={styles.image}
            />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, ut.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Tony Starc</span>
            <span className={styles.date}>30-12-2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
