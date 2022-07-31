import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { requestLogin } from "../../services/AuthService";
import styles from "./Auth.module.scss";

const Auth = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [isDisabled, setDisabled] = useState(true);

  const changeInput = (e) => {
    const {
      target: { name, value },
    } = e;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPw(value);
        break;

      default:
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await requestLogin(email, pw);
    if (response === "success") {
      alert("성공적으로 로그인 했습니다");
      navigate("/");
    }
  };

  useEffect(() => {
    if (email.includes("@") && email.includes(".") && pw.length >= 8) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, pw.length]);

  return (
    <div className={styles.container}>
      <form className={styles.column} onSubmit={onSubmit}>
        <input
          name="email"
          type="email"
          autoComplete="current-email"
          placeholder="이메일"
          onChange={changeInput}
          required
          className="input-account"
        />
        <input
          name="password"
          type="password"
          autoComplete="current-password"
          placeholder="비밀번호"
          onChange={changeInput}
          required
          className="input-account"
        />
        <button
          type="submit"
          disabled={isDisabled}
          className={`btn-main ${styles.loginBtn}`}
        >
          로그인
        </button>
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
