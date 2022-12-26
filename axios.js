import axios from "axios";

const instance = axios.create({
  baseURL: "https://starfish-app-a5xrm.ondigitalocean.app/api/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// instance.defaults.headers.common[
//   "Authorization"
// ] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl9pZCI6IjRmZjM3YzYzLTg4ZjAtNDE5My04MTJkLWU4OTVkZDQ4MzgzNCIsInVzZXJfaWQiOiI2MzU3NzllNTIyYjEwMjE0M2M2ZjNlZTYiLCJpYXQiOjE2NjY5MzY5MzZ9.QxwtjsSzusqE65IHGYDyu2Tb3x16oIiTix4L7mEwFY8`;
// https://tourbackendproject.herokuapp.com/
export default instance;
