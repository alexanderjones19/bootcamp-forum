import React, { Component } from "react";
import PropTypes from "prop-types";
import isEmpty from "../../validation/is-empty";

class ProfileAbout extends Component {
  render() {
    const profile = this.props.profile;

    const firstName = profile.user.name.trim().split(" ")[0];
    const skills = profile.skills.map((skill, index) => (
      <div key={index} className="p-3">
        <i className="fa fa-check" />
        {skill}
      </div>
    ));

    return (
      <div className="row">
        <div className="col-12">
          <div className="card card-body bg-light mb-3">
            <h4 className="text-center text-info">{firstName}'s Bio</h4>
            <p className="lead text-center">
              {isEmpty(profile.bio) ? (
                <span>{firstName} has no bio</span>
              ) : (
                <span>{profile.bio}</span>
              )}
            </p>
            <h4 className="text-center text-info">Skills:</h4>
            <div className="row d-flex flex-wrap justify-content-center">
              {skills}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
