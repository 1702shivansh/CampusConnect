import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api", // Your Express backend
  withCredentials: true,
});

export default instance;
