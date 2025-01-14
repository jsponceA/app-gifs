import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://api.giphy.com/v1/gifs/",
});

export { axiosInstance };
