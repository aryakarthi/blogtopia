import Link from "next/link";
import styles from "./menuCategories.module.css";
const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href={"/blog?cat=technology"}
        className={`${styles.categoryItem} ${styles.technology}`}
      >
        Technology
      </Link>
      <Link
        href={"/blog?cat=health"}
        className={`${styles.categoryItem} ${styles.health}`}
      >
        Health
      </Link>
      <Link
        href={"/blog?cat=travel"}
        className={`${styles.categoryItem} ${styles.travel}`}
      >
        Travel
      </Link>
    </div>
  );
};

export default MenuCategories;
