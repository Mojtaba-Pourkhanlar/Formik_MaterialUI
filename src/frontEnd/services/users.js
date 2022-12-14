import axios from "axios";
import { Toastify } from "../shared";
import { url } from "./api";

export const LoginUse = async (user) => {
  try {
    const { data, status } = await axios.post(`${url}/login`, user);
    const users = data.result.name;
    const token = data.token;
    const result = data.result;
    localStorage.setItem("user", JSON.stringify(users));
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("result", JSON.stringify(result));
    return status;
  } catch (error) {
    Toastify(`${error.response.data.message} 😒`, "error");
  }
};
