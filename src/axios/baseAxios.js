import axios from "axios";

const baseAxios = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default baseAxios;
