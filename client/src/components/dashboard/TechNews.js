import React, { Component } from "react";
import { connect } from "react-redux";
import newsAPI from "../../utils/techNewsAPI";

class TechNews extends Component {
  state = {
    articles: []
  };
  componentDidMount() {
    this.getNews();
  }

  getNews = () => {
    newsAPI.getNews().then(res => {
      console.log(res);
      let newsCont = [];
      for (let i = 0; i < res.length; i++) {
        let article = {};
        article.title = res.data.articles[i].title;
        article.url = res.data.articles[i].url;
        article.desc = res.data.articles[i].description;
        newsCont.push(article);
      }
      return newsCont;
    });
  };

  render() {
    const newsLog = this.state.articles.map(article => (
      <div>
        <div className="row">
          {/* <p className="lead">{article.name}</p> */}
          <a
            href={article.url}
            rel="noopener noreferrer"
            target="_blank"
            className="ml-4"
          >
            <p className="lead">{article.title}</p>
          </a>
          <p>{article.desc}</p>
        </div>
        {/* <p className="text-sm">{article.desc}</p> */}
      </div>
    ));

    return (
      <div>
        <li className="list-group-item p-0 m-0">{newsLog}</li>
      </div>
    );
  }
}

export default connect(null)(TechNews);
