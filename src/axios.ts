// src/axios.ts
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001", // 👈 your Express backend port
});

export default instance;
