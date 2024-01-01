import Image from "next/image";
import styles from "./readPost.module.css";
import Menu from "@/components/menu/Menu";
import Comments from "@/components/comments/Comments";
const ReadPost = () => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            tempore?
          </h2>
          <div className={styles.user}>
            <div className={styles.userImgContainer}>
              <Image src={"/logo.png"} alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.userName}>Peter Parker</span>
              <span className={styles.date}>31-12-2023</span>
            </div>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src={"/featured_img.jpg"}
            alt=""
            fill
            className={styles.image}
          />
        </div>
      </div> */}
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.infoContainer}>
            <div className={styles.imgContainer}>
              <Image
                src={"/featured_img.jpg"}
                alt=""
                fill
                className={styles.image}
              />
            </div>
            <div className={styles.textContainer}>
              <h2 className={styles.title}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                tempore?
              </h2>
              <div className={styles.user}>
                <div className={styles.userImgContainer}>
                  <Image
                    src={"/logo.png"}
                    alt=""
                    fill
                    className={styles.avatar}
                  />
                </div>
                <div className={styles.userTextContainer}>
                  <span className={styles.userName}>Peter Parker</span>
                  <span className={styles.date}>31-12-2023</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur enim, in maxime rem earum nesciunt incidunt! Neque
              harum nulla asperiores dolores reprehenderit nostrum consequuntur
              beatae corrupti deserunt debitis, itaque doloribus, provident
              veniam, quis sint fugiat doloremque est! Molestiae, cumque veniam
              libero, dignissimos autem, debitis sed voluptates placeat
              inventore nihil nostrum?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur enim, in maxime rem earum nesciunt incidunt! Neque
              harum nulla asperiores dolores reprehenderit nostrum consequuntur
              beatae corrupti deserunt debitis, itaque doloribus, provident
              veniam, quis sint fugiat doloremque est! Molestiae, cumque veniam
              libero, dignissimos autem, debitis sed voluptates placeat
              inventore nihil nostrum?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur enim, in maxime rem earum nesciunt incidunt! Neque
              harum nulla asperiores dolores reprehenderit nostrum consequuntur
              beatae corrupti deserunt debitis, itaque doloribus, provident
              veniam, quis sint fugiat doloremque est! Molestiae, cumque veniam
              libero, dignissimos autem, debitis sed voluptates placeat
              inventore nihil nostrum?
            </p>
          </div>
          <div className={styles.comments}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default ReadPost;
