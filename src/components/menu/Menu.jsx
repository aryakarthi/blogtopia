import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";
const Menu = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.subtitle}>{"What's new!"}</h3>
      <h2 className={styles.title}>Trending on Blogtopia</h2>
      <MenuPosts withImg={false} />

      <h3 className={styles.subtitle}>Discover by topic.</h3>
      <h2 className={styles.title}>Categories</h2>
      <MenuCategories />

      <h3 className={styles.subtitle}>Chosen by the editor.</h3>
      <h2 className={styles.title}>Editor's Pick</h2>
      <MenuPosts withImg={true} />
    </div>
  );
};

export default Menu;
