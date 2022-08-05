import axios from "axios";

const token = localStorage.getItem("token");

export const getTodos = async () => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return await axios
    .get(`/api/todos`, config)
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => {
      alert(error.response.data.details);
    });
};

export const createTodo = async (title, content) => {
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
      console.log(response);
      return response.data;
    })
    .catch((error) => {
      alert(error.response.data.details);
    });
};
