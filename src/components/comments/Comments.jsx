import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";
const Comments = () => {
  const status = "authenticated";
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
            ></textarea>
            <button className={styles.button}>Comment</button>
          </div>
        </>
      ) : (
        <>
          <Link href={"/login"}>Login to write a comment</Link>
        </>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src={"/logo.png"}
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.userName}>Tony Starc</span>
              <span className={styles.date}>01-01-2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam,
            eligendi. Ut facilis explicabo voluptatibus sunt odit quisquam
            assumenda reprehenderit voluptates.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src={"/logo.png"}
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.userName}>Tony Starc</span>
              <span className={styles.date}>01-01-2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam,
            eligendi. Ut facilis explicabo voluptatibus sunt odit quisquam
            assumenda reprehenderit voluptates.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src={"/logo.png"}
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.userName}>Tony Starc</span>
              <span className={styles.date}>01-01-2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam,
            eligendi. Ut facilis explicabo voluptatibus sunt odit quisquam
            assumenda reprehenderit voluptates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
