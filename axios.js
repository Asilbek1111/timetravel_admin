import axios from "axios";

const instance = axios.create({
  baseURL: "https://starfish-app-a5xrm.ondigitalocean.app/api/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default instance;
