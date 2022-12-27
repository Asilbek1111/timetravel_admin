import axios from "axios";

const instance = axios.create({
  baseURL: "https://starfish-app-a5xrm.ondigitalocean.app/api/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

instance.defaults.headers.common[
  "Authorization"
] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl9pZCI6ImJlODdiMjYwLTFhMTEtNDY0MC1iMzdkLTk4ZmI5YzQ5ZmI2NSIsInVzZXJfaWQiOiI2Mzg4ZWU0NWIxMzk5MTU2OWM0ZTdiMzAiLCJpYXQiOjE2NzIwNjYyNzd9.v22ZaaX_ZFrVIlWf6gaF7w1q1U3x0VJxiGYTKpDpeEI`;



export default instance;
