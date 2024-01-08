import Image from "next/image";
import styles from "./readPost.module.css";
import Menu from "@/components/menu/Menu";
import Comments from "@/components/comments/Comments";

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const ReadPost = async ({ params }) => {
  const { slug } = params;
  const data = await getData(slug);
  // console.log(data);
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.infoContainer}>
            {/* <div className={styles.imgContainer}>
              <Image
                src={"/featured_img.jpg"}
                alt=""
                fill
                className={styles.image}
              />
            </div> */}
            {data?.img && (
              <div className={styles.imgContainer}>
                <Image src={data?.img} alt="" fill className={styles.image} />
              </div>
            )}
            <div className={styles.textContainer}>
              <h2 className={styles.title}>{data?.title}</h2>
              <div className={styles.user}>
                {data?.user?.image && (
                  <div className={styles.userImgContainer}>
                    <Image
                      src={data.user.image}
                      alt=""
                      fill
                      className={styles.avatar}
                    />
                  </div>
                )}
                <div className={styles.userTextContainer}>
                  <span className={styles.userName}>{data?.user?.name}</span>
                  <span className={styles.date}>
                    {data?.createdAt.substring(0, 10)}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: data?.desc }}
          />

          <div className={styles.comments}>
            <Comments postSlug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default ReadPost;
