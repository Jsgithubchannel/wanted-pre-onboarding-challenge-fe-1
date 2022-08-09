import axios from "axios";

export const requestSignup = async (email, pw) => {
  return await axios
    .post(`/api/users/create`, {
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
    .post(`/api/users/login`, {
      email: email,
      password: pw,
    })
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      return "success";
    })
    .catch((e) => {
      alert(e.response.data.details);
      return "error";
    });
};
