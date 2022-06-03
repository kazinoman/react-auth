import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.reserveitbd.com/api",
});

instance.interceptors.request.use({});
instance.interceptors.response.use(null, (error) => {});

export default instance;
