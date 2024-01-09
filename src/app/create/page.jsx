"use client";
import Image from "next/image";
import styles from "./create.module.css";
import {
  MdAdd,
  MdOutlineImage,
  MdOutlineFileUpload,
  MdOutlineVideocam,
} from "react-icons/md";
import { useEffect, useState } from "react";

import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

// import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";

const Create = () => {
  const { status } = useSession();

  const router = useRouter();

  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    const storage = getStorage(app);
    const upload = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file]);

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }
  if (status === "unauthenticated") {
    router.push("/");
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug || "fashion", //If not selected, choose the general category
      }),
    });

    console.log(res);
    // if (res.status === 200) {
    //   const data = await res.json();
    //   router.push(`/posts/${data.slug}`);
    // }
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Add title..."
        className={styles.input}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className={styles.selectContainer}>
        <label htmlFor="select-category">Category :</label>
        <select
          id="select-category"
          className={styles.select}
          onChange={(e) => setCatSlug(e.target.value)}
        >
          <option value="fashion">Fashion</option>
          <option value="technology">Technology</option>
          <option value="health">Health</option>
          <option value="gaming">Gaming</option>
          <option value="travel">Travel</option>
          <option value="sports">Sports</option>
          <option value="education">Education</option>
          <option value="nature">Nature</option>
          <option value="photography">Photography</option>
          <option value="science">Science</option>
          <option value="politics">Politics</option>
          <option value="productivity">Productivity</option>
        </select>
      </div>
      <div className={styles.editor}>
        <button className={styles.addFileBtn} onClick={() => setOpen(!open)}>
          <MdAdd className={styles.addFileIcon} />
        </button>
        {open && (
          <div className={styles.addContainer}>
            <input
              type="file"
              id="image"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
            <button className={styles.addBtn}>
              <label htmlFor="image" className={styles.addImg}>
                <MdOutlineImage className={styles.addIcon} />
              </label>
            </button>
            <button className={styles.addBtn}>
              <MdOutlineFileUpload className={styles.addIcon} />
            </button>
            <button className={styles.addBtn}>
              <MdOutlineVideocam className={styles.addIcon} />
            </button>
          </div>
        )}
        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Write your blog here..."
        />
      </div>
      <button className={styles.publish} onClick={handleSubmit}>
        Publish
      </button>
    </div>
  );
};

export default Create;
