import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Signup.module.scss";

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <form className={styles.column}>
        <input
          name="email"
          type="email"
          autoComplete="new-email"
          placeholder="이메일"
          className="input-account"
          required
        />
        <input
          name="password"
          type="password"
          autoComplete="new-password"
          placeholder="비밀번호"
          className="input-account"
          required
        />
        <input
          name="reEnterPassword"
          type="password"
          autoComplete="new-password"
          placeholder="비밀번호 확인"
          className="input-account"
          required
        />
        <button className={`btn-main ${styles.btn}`}>회원가입</button>
      </form>

      <div className={styles.linkContainer}>
        <p className={styles.link} onClick={() => navigate("/auth")}>
          이미 가입하셨나요?
        </p>
      </div>
    </div>
  );
};

export default SignUp;
