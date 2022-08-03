import React from "react";
import { useLocation } from "react-router-dom";

const TodoDetail = () => {
  const { state } = useLocation();
  return <div>detail</div>;
};

export default TodoDetail;
