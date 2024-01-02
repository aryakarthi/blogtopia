"use client";
import styles from "./login.module.css";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FcGoogle } from "react-icons/fc";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const { data, status } = useSession();
  // console.log(data, status);

  const router = useRouter();

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }
  if (status === "authenticated") {
    router.push("/");
  }
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Sign In</h2>
        <div className={styles.socialBtn} onClick={() => signIn("google")}>
          <span>
            <FcGoogle className={styles.socialIcon} />
          </span>
          <span>Google</span>
        </div>
        <div className={styles.socialBtn}>
          <span>
            <TbBrandGithubFilled className={styles.socialIcon} />
          </span>
          <span>Github</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
