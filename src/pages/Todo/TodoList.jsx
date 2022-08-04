import React, { useState, useEffect, useRef } from "react";
import TodoForm from "./TodoForm";
import styles from "./TodoList.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPenToSquare,
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const TodoList = () => {
  const navigate = useNavigate();
  const [edited, setEdited] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  const editTitleRef = useRef(null);

  useEffect(() => {
    if (edited) {
      editTitleRef.current.focus();
    }
  }, [edited]);

  const [tasks, setTasks] = useState([
    {
      index: 0,
      title: "Task1",
      content: "task1_content입니다",
      isCompleted: false,
    },
    {
      index: 1,
      title: "Task2",
      content: "task2_content입니다",
      isCompleted: false,
    },
    {
      index: 2,
      title: "Task3",
      content: "task3_content입니다",
      isCompleted: false,
    },
  ]);

  const onNavigate = (id) => {
    !edited && navigate(`/detail/${id}`, { state: id });
  };

  const onClickEditBtn = () => {
    setEdited(true);
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
  const onClickSubmitBtn = (id) => {
    const nextTodoList = tasks.map((task) => ({
      ...task,
      title: task.id === id ? newTitle : task.title,
      content: task.id === id ? newContent : task.title,
    }));
    setTasks(nextTodoList);
    setEdited(false);
  };

  const addTask = (title, content) => {
    setTasks([...tasks, { title, content }]);
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className={styles.container}>
      <h1>오늘 할 일</h1>
      <div className={styles.todoList}>
        {tasks.map((task, index) => (
          <li className={styles.todo} key={task.index}>
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
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  onClick={onClickSubmitBtn}
                />
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  onClick={() => setEdited(false)}
                />
              </div>
            ) : (
              <div className={styles.btns}>
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  onClick={onClickEditBtn}
                />
                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => removeTask(index)}
                />
              </div>
            )}
          </li>
        ))}
      </div>
      <TodoForm addTask={addTask} />
    </div>
  );
};

export default TodoList;
