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

const TodoList = ({ tasks, task, index, setTasks, removeTask, updateTask }) => {
  const editTitleRef = useRef(null);
  const navigate = useNavigate();

  const [edited, setEdited] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  useEffect(() => {
    if (edited) {
      editTitleRef.current.focus();
    }
  }, [edited]);

  const onNavigate = (index) => {
    !edited && navigate(`/detail/${index}`, { state: tasks[index] });
  };

  const onClickEditBtn = () => {
    setEdited(true);
  };

  const onClickSubmitBtn = async (id) => {
    if (window.confirm("해당 내용으로 수정하시겠습니까?")) {
      if (editTitleRef.current.value.length > 0) {
        const nextTodoList = tasks.map((task) => ({
          ...task,
          title: task.id === id ? newTitle : task.title,
          content: task.id === id ? newContent : task.content,
        }));

        setTasks(nextTodoList);

        await updateTask(id, newTitle, newContent);
        setEdited(false);
      } else {
        alert("제목을 입력해주세요.");
      }
    }
  };

  const onTitleChange = (e) => {
    setNewTitle(e.target.value);
  };
  const onContentChange = (e) => {
    setNewContent(e.target.value);
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
                onChange={onTitleChange}
                className="input-todo"
                placeholder={task.title}
              />
              <textarea
                type="text"
                name="content"
                value={newContent}
                onChange={onContentChange}
                className={`${styles.content} input-todo`}
                placeholder={task.content}
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
            <FontAwesomeIcon
              icon={faCircleCheck}
              onClick={() => onClickSubmitBtn(task.id)}
              className={styles.checkIcon}
            />
            <FontAwesomeIcon
              icon={faCircleXmark}
              onClick={() => setEdited(false)}
              className={styles.xmarkIcon}
            />
          </div>
        ) : (
          <div className={styles.btns}>
            <FontAwesomeIcon
              icon={faPenToSquare}
              onClick={onClickEditBtn}
              className={styles.penIcon}
            />
            <FontAwesomeIcon
              icon={faTrash}
              onClick={() => removeTask(index, task.id)}
              className={styles.trashIcon}
            />
          </div>
        )}
      </ul>
    </>
  );
};

export default TodoList;
