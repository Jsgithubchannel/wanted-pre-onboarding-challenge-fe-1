import axios from "axios";

export const requestSignup = async (email, pw) => {
  return await axios
    .post(`http://localhost:8080/users/create`, {
      email: email,
      password: pw,
    })
    .catch((e) => {
      alert(e.response.data.details);
      return "error";
    });
};

export const requestLogin = async (email, pw) => {
  return await axios
    .post(
      `http://localhost:8080/users/login`,
      {
        email: email,
        password: pw,
      }
      // { withCredentials: true }
    )
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      console.log(e.response.data);
      return e.response.data;
    });
};
