import React, { useState } from "react";
import styles from "./TodoForm.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const TodoForm = () => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // value && addTask(value)
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <input
        type="text"
        value={value}
        placeholder="할 일을 작성해보세요."
        onChange={(e) => setValue(e.target.value)}
        className="input-todo"
      />
      <button type="submit">
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </form>
  );
};

export default TodoForm;
