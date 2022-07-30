import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Auth.module.scss";

const Auth = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <form className={styles.column}>
        <input
          name="email"
          type="email"
          autoComplete="current-email"
          placeholder="이메일"
          required
          className="input-account"
        />
        <input
          name="password"
          type="password"
          autoComplete="current-password"
          placeholder="비밀번호"
          required
          className="input-account"
        />
        <button className={`btn-main ${styles.loginBtn}`}>로그인</button>
      </form>

      <div className={styles.linkContainer}>
        <p className={styles.link} onClick={() => navigate("/signup")}>
          처음이신가요?
        </p>
      </div>
    </div>
  );
};

export default Auth;
