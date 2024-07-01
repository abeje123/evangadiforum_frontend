import axios from "axios";
const axiosBase = axios.create({
  // baseURL: "http://localhost:5000/api",
  baseURL: "https://evangadiforum-backend-z8df.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosBase;
