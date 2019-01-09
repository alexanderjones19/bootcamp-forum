import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import forumAPI from '../../utils/forumAPI';
// import DiscussionPost from './DiscussionPost';
// import CreatePost from './CreatePost';

class Forum extends Component {
  state = {
    forums: [],
    discussions: [],
    replies: []
  }

  componentDidMount() {
    this.loadForums();
  }

  loadForums = () => {
    forumAPI.getAllForums()
      .then(res =>
          this.setState({ forums: res.data })
        )
        .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="container">

        <Router>
          <div>
            <Header 
              forums={this.state.forums}
            />
            <Switch>
              {/* <Route exact path="/discussion/:type" component={ DiscussionPost }/> */}
              {/* <Route exact path="/discussion/:type/new" component={ CreatePost }/> */}
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default Forum;