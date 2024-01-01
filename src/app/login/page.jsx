import styles from "./login.module.css";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Sign In</h2>
        <div className={styles.socialBtn}>
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
