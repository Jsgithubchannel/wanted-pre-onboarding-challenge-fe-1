import axios from "axios";

const token = localStorage.getItem("token");

export const getTodos = async () => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return await axios
    .get(`/api/todos`, config)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      alert(error.response.data.details);
    });
};

export const createTodo = async (title: string, content: string) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return await axios
    .post(
      `/api/todos`,
      {
        title: title,
        content: content,
      },
      config
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      alert(error.response.data.details);
    });
};

export const updateTodo = async (
  id: string,
  title: string,
  content: string
) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return await axios
    .put(
      `/api/todos/${id}`,
      {
        title: title,
        content: content,
      },
      config
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      alert(error.response.data.details);
    });
};

export const deleteTodo = async (id: string) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return await axios
    .delete(`/api/todos/${id}`, config)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      alert(error.response.data.details);
    });
};
