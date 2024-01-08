"use client";
import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useState } from "react";

const fetcher = async (url) => {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
};

const Comments = ({ postSlug }) => {
  // const status = "authenticated";

  const { status } = useSession();

  const { data, isLoading, mutate } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const [desc, setDesc] = useState("");

  const handleSubmit = async () => {
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
    });
    mutate();
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Comments</h3>
      {status === "authenticated" ? (
        <>
          <div className={styles.write}>
            <textarea
              className={styles.input}
              placeholder={"Write your comment..."}
              name="comment"
              id="comment"
              rows={3}
              onChange={(e) => setDesc(e.target.value)}
            />
            <button className={styles.button} onClick={handleSubmit}>
              Comment
            </button>
          </div>
        </>
      ) : (
        <>
          <Link href={"/login"}>Login to write a comment</Link>
        </>
      )}
      <div className={styles.comments}>
        {isLoading
          ? "loading..."
          : data?.map((item) => (
              <div className={styles.comment} key={item._id}>
                <div className={styles.user}>
                  {item?.user?.image && (
                    <Image
                      src={item.user.image}
                      alt=""
                      width={50}
                      height={50}
                      className={styles.image}
                    />
                  )}
                  <div className={styles.userInfo}>
                    <span className={styles.userName}>{item.user.name}</span>
                    <span className={styles.date}>
                      {item.createdAt}
                    </span>
                  </div>
                </div>
                <p className={styles.desc}>{item.desc}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Comments;
