import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const CategoryList = async () => {
  const data = await getData();
  console.log(data);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Popular Categories</h2>
      <div className={styles.categories}>
        {data.map((item) => (
          <Link
            href={`/blog?cat=${item.slug}`}
            className={`${styles.category} ${styles[item.slug]}`}
            key={item._id}
          >
            <Image
              src={item.img}
              alt={item.title}
              width={30}
              height={30}
              className={styles.image}
            />
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
