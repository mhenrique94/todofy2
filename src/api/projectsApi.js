import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";

export default {
  getProjects: (callback) => {
    axios
      .get("api/projects")
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      });
  },
  addProject: (callback, project) => {
    axios.post("api/projects", project).then((response) => {
      callback(response.data);
    });
  },
  delProject(callback, id) {
    axios.delete(`api/projects/${id}`).then(() => callback());
  },
};
