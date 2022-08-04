import React, { useState } from "react";
import styles from "./TodoForm.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const TodoForm = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.title.value && addTask(title, content);
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <div className={styles.wrapper}>
        <input
          type="text"
          name="title"
          value={title}
          placeholder="할 일을 작성해보세요."
          onChange={(e) => setTitle(e.target.value)}
          className="input-todo"
        />
        <input
          type="text"
          name="content"
          value={content}
          placeholder="상세 내용을 작성해보세요."
          onChange={(e) => setContent(e.target.value)}
          className={`input-todo ${styles.paragraph}`}
        />
      </div>
      <button type="submit">
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </form>
  );
};

export default TodoForm;
