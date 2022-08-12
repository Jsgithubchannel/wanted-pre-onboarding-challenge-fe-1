import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPenToSquare,
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import styles from "./TodoList.module.scss";

interface IProps {
  tasks: Array<{ [key: string]: string }>;
  task: Object;
  index: number;
  setTasks: Dispatch<
    SetStateAction<
      {
        [key: string]: string;
      }[]
    >
  >;
  removeTask: Function;
  updateTask: Function;
}

const TodoList = (props: IProps) => {
  // property 'x' does not exist on type '{}' 해결
  let taskCopy: any = {};
  taskCopy = Object.assign({}, props.task);

  const editTitleRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const [edited, setEdited] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  useEffect(() => {
    if (edited) {
      editTitleRef.current?.focus();
    }
  }, [edited]);

  const onNavigate = (index: number) => {
    !edited && navigate(`/detail/${index}`, { state: props.tasks[index] });
  };

  const onClickEditBtn = () => {
    setEdited(true);
  };

  const onClickSubmitBtn = async (id: string) => {
    if (window.confirm("해당 내용으로 수정하시겠습니까?")) {
      if (
        editTitleRef?.current?.value &&
        editTitleRef.current.value.length > 0
      ) {
        const nextTodoList = props.tasks.map((task) => ({
          ...task,
          title: task.id === id ? newTitle : task.title,
          content: task.id === id ? newContent : task.content,
        }));

        props.setTasks(nextTodoList);

        await props.updateTask(id, newTitle, newContent);
        setEdited(false);
      } else {
        alert("제목을 입력해주세요.");
      }
    }
  };

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value);
  };
  const onContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewContent(e.target.value);
  };

  return (
    <>
      <ul className={styles.todo} key={props.index}>
        <div
          className={styles.paragraph}
          onClick={() => onNavigate(props.index)}
        >
          {edited ? (
            <>
              <input
                type="text"
                name="title"
                value={newTitle}
                ref={editTitleRef}
                onChange={onTitleChange}
                className="input-todo"
                placeholder={taskCopy.title}
              />
              <textarea
                name="content"
                value={newContent}
                onChange={onContentChange}
                className={`${styles.content} input-todo`}
                placeholder={taskCopy.content}
              />
            </>
          ) : (
            <>
              <span className={styles.todoTitle}>{taskCopy.title}</span>
              <p className={styles.todoContent}>{taskCopy.content}</p>
            </>
          )}
        </div>

        {edited ? (
          <div className={styles.btns}>
            <FontAwesomeIcon
              icon={faCircleCheck}
              onClick={() => onClickSubmitBtn(taskCopy.id)}
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
              onClick={() => props.removeTask(props.index, taskCopy.id)}
              className={styles.trashIcon}
            />
          </div>
        )}
      </ul>
    </>
  );
};

export default TodoList;
