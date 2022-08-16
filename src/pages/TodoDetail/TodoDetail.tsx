import { useLocation, useNavigate } from "react-router-dom";
import styles from "./TodoDetail.module.scss";

interface LocationState {
  state: {
    [key: string]: string;
  };
}

const TodoDetail: React.FC = () => {
  const navigate = useNavigate();
  const { state } = useLocation() as LocationState;

  return (
    <div className={styles.container}>
      <h1>{state?.title}</h1>
      <hr />
      <p>{state?.content}</p>
      <button className="btn-main" onClick={() => navigate("/")}>
        홈으로 가기
      </button>
    </div>
  );
};

export default TodoDetail;
