import React, { Component } from "react";
import { connect } from "react-redux";
import githubAPI from "../../utils/githubAPI";

class Github extends Component {
  state = {
    repos: []
  };

  componentDidMount() {
    this.getRepos();
  }

  getRepos = () => {
    const github = this.props.github;
    if (github) {
      githubAPI.getRepos(github).then(res => {
        console.log(res);
        let repoCont = [];
        for (let i = 0; i < 6 || i < res.length; i++) {
          let repo = {};
          repo.name = res.data[i].name;
          repo.url = res.data[i].html_url;
          repo.desc = res.data[i].description;
          repoCont.push(repo);
        }
        console.log(repoCont);
        this.setState({
          repos: repoCont
        });
      });
    }
  };

  render() {
    const repos1 = this.state.repos.map((repo, index) => (
      <div key={index}>
        <div className="row">
          {/* <p className="lead">{repo.name}</p> */}
          <a
            href={repo.url}
            rel="noopener noreferrer"
            target="_blank"
            className="ml-4"
          >
            <p className="lead">{repo.name}</p>
          </a>
        </div>
        <p className="text-sm">{repo.desc}</p>
        <hr />
      </div>
    ));

    return (
      <div>
        <li className="list-group-item p-0 m-0">{repos1}</li>
      </div>
    );
  }
}

export default connect(null)(Github);
