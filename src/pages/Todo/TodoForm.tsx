import React, { useState } from "react";
import styles from "./TodoForm.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

interface IProp {
  addTask: Function;
}

const TodoForm = ({ addTask }: IProp) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.length > 0) {
      addTask(title, content);
      setTitle("");
      setContent("");
    } else alert("제목을 입력해주세요.");
  };

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const onContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <div className={styles.wrapper}>
        <input
          type="text"
          name="title"
          value={title}
          placeholder="할 일을 작성해보세요."
          onChange={onTitleChange}
          className="input-todo"
        />
        <input
          type="text"
          name="content"
          value={content}
          placeholder="상세 내용을 작성해보세요."
          onChange={onContentChange}
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
