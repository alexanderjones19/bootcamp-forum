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
      for (let i = 0; i < 8; i++) {
        let article = {};
        article.title = res.data.articles[i].title;
        article.url = res.data.articles[i].url;
        article.desc = res.data.articles[i].description;
        // console.log("article" + article);
        newsCont.push(article);
      }
      // console.log("newscont" + newsCont);
      this.setState({
        articles: newsCont
      });
    });
  };

  render() {
    const newsLog = this.state.articles.map((article, index) => (
      <div key={index}>
        <div className="row">
          <div className="col-md-12">
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
