"use client";
import Image from "next/image";
import styles from "./create.module.css";
import {
  MdAdd,
  MdOutlineImage,
  MdOutlineFileUpload,
  MdOutlineVideocam,
} from "react-icons/md";
import { useState } from "react";

import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

// import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

const Create = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" className={styles.input} />
      <div className={styles.editor}>
        <button className={styles.addFileBtn} onClick={() => setOpen(!open)}>
          <MdAdd className={styles.addFileIcon} />
        </button>
        {open && (
          <div className={styles.addContainer}>
            <button className={styles.addBtn}>
              <MdOutlineImage className={styles.addIcon} />
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
          placeholder="Write your blog here.."
        />
      </div>
      <button className={styles.publish}>Publish</button>
    </div>
  );
};

export default Create;
