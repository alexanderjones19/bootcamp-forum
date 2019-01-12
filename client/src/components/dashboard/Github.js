import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import githubAPI from "../../utils/githubAPI";

class Github extends Component {
  repos = [];

  getRepos = () => {
    const github = this.props.github;
    githubAPI.getRepos(github)
    .then(res => {
      console.log(res.data);
      for(let i=0; i<5 || i<res.length; i++){
        let repo = {};
        repo.name = res.data[i].name;
        repo.url = res.data[i].url;
        repo.desc = res.data[i].description;
        this.repos.push(repo);
      }
      return this.repos;
    });
  }


  render() {
    // const repos = this.repos.map(repo => (
    //   <tr>
    //     <td>{repo.name}</td>
    //     <td>{repo.desc}</td>
    //     <td>{repo.url}</td>
    //   </tr>
    // ));
    return (
      <div>
        <h4 className="mb-4">Github Repos</h4>
        <h5> {this.repos} </h5>
      </div>
    );
  }
}


export default connect(
  null,
)(Github);
