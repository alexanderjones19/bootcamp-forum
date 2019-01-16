import React, { Component } from 'react';
import Post from './Post';
import { connect } from 'react-redux';
import { NavLink } from 'reactstrap';
import { getAllDiscussions, getOneDiscussion } from '../../../actions/forumActions';
import { NavLink as RRNavLink } from 'react-router-dom';

class DiscussionPost extends Component {
  componentDidMount() {
    this.props.getAllDiscussions(this.props.match.params.type);
  }
  
  componentDidUpdate(nextProps) {
    if (nextProps.match.params.type !== this.props.match.params.type) {
      this.props.getAllDiscussions(this.props.match.params.type);
    }
  }

  render() {
    let currentForumSlug = this.props.forum.currentForum.forum_slug;
    let currentForumTitle = this.props.forum.currentForum.forum_name;
    return (
      <div>
        <h3 className="mt-3 mb-3">This is a {currentForumTitle} forum. Post/Answer any questions.</h3>
        <NavLink className="btn btn-primary" to={`/forum/discussion/${currentForumSlug}/new`} tag={RRNavLink}>New Question</NavLink>
        <div className="mt-3">
          {this.props.forum.discussions.map(discussion => {
            return (<Post
              key={discussion._id}
              id={discussion._id}
              discussion={discussion}
              getOneDiscussion={this.props.getOneDiscussion}
              />);
          })}
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  getAllDiscussions,
  getOneDiscussion
}

const mapStateToProps = state => ({
  forum: state.forum
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DiscussionPost);