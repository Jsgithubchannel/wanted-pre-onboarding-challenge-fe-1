import React, { useState } from "react";
import TodoForm from "./TodoForm";
import styles from "./Todos.module.scss";
import { useQuery } from "react-query";

import {
  createTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../../services/TodoService";
import TodoList from "./TodoList";
import { useNavigate } from "react-router-dom";
const Todos = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState<
    Array<{
      [key: string]: string;
    }>
  >([]);

  useQuery(["data"], getTodos, {
    onSuccess: ({ data }) => setTasks(data),
  });

  const addTask = (title: string, content: string): void => {
    setTasks([...tasks, { title, content }]);
    createTodo(title, content);
  };

  const removeTask = (index: number, taskId: string): void => {
    if (window.confirm("삭제하시겠습니까?")) {
      const newTasks = [...tasks];
      newTasks.splice(index, 1);
      setTasks(newTasks);
      deleteTodo(taskId);
    }
  };

  const updateTask = (id: string, title: string, content: string): void => {
    updateTodo(id, title, content);
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/auth");
  };

  return (
    <div className={styles.container}>
      <h1>오늘 할 일</h1>
      <div className={styles.todoList}>
        {tasks.map((task, index) => (
          <TodoList
            tasks={tasks}
            task={task}
            index={index}
            setTasks={setTasks}
            removeTask={removeTask}
            updateTask={updateTask}
            key={task.id}
          />
        ))}
      </div>
      <TodoForm addTask={addTask} />
      <button className={`${styles.button} btn-main`} onClick={logout}>
        로그아웃
      </button>
    </div>
  );
};

export default Todos;
