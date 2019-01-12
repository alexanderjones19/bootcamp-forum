import axios from "axios";
const BASEURL = "https://api.github.com/users/";

export default {
  getRepos: function(user) {
    return axios.get(BASEURL + user + "/repos", {headers: {"Authorization" : "token 1c341d9f1d37604d7e6de49969143bf2c4b02379 "}});
  }
};
