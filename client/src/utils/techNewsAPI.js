import axios from "axios";

export default {
  getNews: function() {
    return axios.get(
      "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=dc62e708bc974876b5990813969905a4"
    );
  }
};
