import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPenToSquare,
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import styles from "./TodoList.module.scss";

const TodoList = ({ tasks, task, index, setTasks, removeTask }) => {
  const editTitleRef = useRef(null);
  const navigate = useNavigate();

  const [edited, setEdited] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  useEffect(() => {
    console.log(edited);
    if (edited) {
      editTitleRef.current.focus();
    }
  }, [edited]);

  const onNavigate = (id) => {
    !edited && navigate(`/detail/${id}`, { state: id });
  };

  const onClickEditBtn = () => {
    setEdited(true);
  };

  const onClickSubmitBtn = (id) => {
    const nextTodoList = tasks.map((task) => ({
      ...task,
      title: task.id === id ? newTitle : task.title,
      content: task.id === id ? newContent : task.title,
    }));
    setTasks(nextTodoList);
    setEdited(false);
  };

  const onChangeEditTask = (e) => {
    const {
      target: { name, value },
    } = e;
    switch (name) {
      case "title":
        setNewTitle(value);
        break;
      case "content":
        setNewContent(value);
        break;

      default:
    }
  };

  return (
    <>
      <ul className={styles.todo} key={task.index}>
        <div className={styles.paragraph} onClick={() => onNavigate(index)}>
          {edited ? (
            <>
              <input
                type="text"
                name="title"
                value={newTitle}
                ref={editTitleRef}
                onChange={onChangeEditTask}
              />
              <input
                type="text"
                name="content"
                value={newContent}
                onChange={onChangeEditTask}
              />
            </>
          ) : (
            <>
              <span className={styles.todoTitle}>{task.title}</span>
              <p className={styles.todoContent}>{task.content}</p>
            </>
          )}
        </div>

        {edited ? (
          <div className={styles.btns}>
            <FontAwesomeIcon icon={faCircleCheck} onClick={onClickSubmitBtn} />
            <FontAwesomeIcon
              icon={faCircleXmark}
              onClick={() => setEdited(false)}
            />
          </div>
        ) : (
          <div className={styles.btns}>
            <FontAwesomeIcon icon={faPenToSquare} onClick={onClickEditBtn} />
            <FontAwesomeIcon
              icon={faTrash}
              onClick={() => removeTask(index, task.id)}
            />
          </div>
        )}
      </ul>
    </>
  );
};

export default TodoList;
