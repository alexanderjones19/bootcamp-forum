import axios from "axios";

export default {
  getRepos: function(user) {
    return axios.get(
      "https://api.github.com/" + user + "/repos?page=1&per_page=6",
      {
        headers: {
          Authorization: "token 1c341d9f1d37604d7e6de49969143bf2c4b02379 "
        }
      }
    );
  }
};
