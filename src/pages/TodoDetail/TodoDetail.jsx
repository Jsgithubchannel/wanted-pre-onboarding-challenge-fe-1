import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./TodoDetail.module.scss";

const TodoDetail = () => {
  const { state } = useLocation();
  return (
    <div className={styles.container}>
      <h1>{state.title}</h1>
      <hr />
      <p>{state.content}</p>
    </div>
  );
};

export default TodoDetail;
