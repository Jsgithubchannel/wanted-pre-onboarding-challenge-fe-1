import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { requestSignup } from "../../services/AuthService";
import styles from "./Signup.module.scss";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [rePw, setRePw] = useState("");
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
      case "reEnterPassword":
        setRePw(value);
        break;
      default:
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (pw !== rePw) {
      alert("비밀번호가 일치하지 않습니다.");
    } else {
      const response = await requestSignup(email, pw);
      if (response !== "error") {
        alert("회원 가입되었습니다.");
        navigate("/auth");
      }
    }
  };

  useEffect(() => {
    if (
      email.includes("@") &&
      email.includes(".") &&
      pw.length >= 8 &&
      rePw.length >= 8
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, pw.length, rePw.length]);

  return (
    <div className={styles.container}>
      <form className={styles.column} onSubmit={onSubmit}>
        <input
          name="email"
          type="email"
          autoComplete="new-email"
          placeholder="이메일 ( @ . 포함 )"
          onChange={changeInput}
          className="input-account"
          required
        />
        <input
          name="password"
          type="password"
          autoComplete="new-password"
          placeholder="비밀번호 ( 8자리 이상 )"
          onChange={changeInput}
          className="input-account"
          required
        />
        <input
          name="reEnterPassword"
          type="password"
          autoComplete="new-password"
          placeholder="비밀번호 확인"
          onChange={changeInput}
          className="input-account"
          required
        />
        <button
          type="submit"
          disabled={isDisabled}
          className={`btn-main ${styles.btn}`}
        >
          회원가입
        </button>
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
