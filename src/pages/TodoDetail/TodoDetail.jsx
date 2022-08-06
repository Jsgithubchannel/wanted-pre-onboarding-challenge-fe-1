import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./TodoDetail.module.scss";

const TodoDetail = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  return (
    <div className={styles.container}>
      <h1>{state.title}</h1>
      <hr />
      <p>{state.content}</p>
      <button className="btn-main" onClick={() => navigate("/")}>
        홈으로 가기
      </button>
    </div>
  );
};

export default TodoDetail;
