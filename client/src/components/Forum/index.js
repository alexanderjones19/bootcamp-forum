import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './components/Header';
import { getAllForums } from '../../actions/forumActions';
import DiscussionPost from './components/DiscussionPost';
// import CreatePost from './components/CreatePost';

class Forum extends Component {
  componentDidMount() {
    this.props.getAllForums();
  }

  componentDidUpdate() {
    // this.props.getOneForum(this.props.match.params.type);
  }

  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <Header 
              forums={this.props.forum.forums}
            />
            <Switch>
              <Route exact path="/forum/:type" component={ DiscussionPost }/>
              {/* <Route exact path="/discussion/:type/new" component={ CreatePost }/> */}
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

const mapDispatchToProps = {
  getAllForums,
}

const mapStateToProps = state => ({
  forum: state.forum
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Forum);