import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import githubAPI from "../../utils/githubAPI";

class Github extends Component {
  state = {
    repos: []
  }

  componentDidMount() {
    this.getRepos();
  }

  getRepos = () => {
    const github = this.props.github;
    githubAPI.getRepos(github)
    .then(res => {
      console.log(res);
      let repoCont = [];
      for(let i=0; i<18 || i<res.length; i++){
        let repo = {};
        repo.name = res.data[i].name;
        repo.url = res.data[i].html_url;
        repo.desc = res.data[i].description;
        repoCont.push(repo);
      }
      console.log(repoCont);
      this.setState({
        repos: repoCont
      })
    });
  }


  render() {
    const repos1 = this.state.repos.map(repo => (
      <div style={{ marginBottom: "20px"}}>
        <div className="card text-center">
          <div className="card-body">
            <h5 className="card-title">{repo.name}</h5>
            <p className="card-text">{repo.desc}</p>
            <a href={repo.url} class="btn btn-dark">Go</a>
          </div>
        </div>
      </div>
    ));

    return (
      <div>
        <h4 className="mb-4">Github Repos</h4>
        <div className="card-columns">
        <p> {repos1} </p>
        </div>
      </div>
    );
  }
}


export default connect(
  null,
)(Github);
