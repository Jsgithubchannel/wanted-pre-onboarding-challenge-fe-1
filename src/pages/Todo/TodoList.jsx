import React, { useState } from "react";
import TodoForm from "./TodoForm";
import styles from "./TodoList.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const TodoList = () => {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([
    {
      index: 0,
      text: "Task1",
      isCompleted: false,
    },
    {
      index: 1,
      text: "Task2",
      isCompleted: false,
    },
    {
      index: 2,
      text: "Task3",
      isCompleted: false,
    },
  ]);

  const addTask = (text) => setTasks([...tasks, { text }]);

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
          <div className={styles.todo} key={task.index}>
            <span
              className={styles.todoText}
              onClick={() => navigate(`/detail/${index}`, { state: index })}
            >
              {task.text}
            </span>
            <button onClick={() => removeTask(index)}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        ))}
      </div>
      <TodoForm addTask={addTask} />
    </div>
  );
};

export default TodoList;
