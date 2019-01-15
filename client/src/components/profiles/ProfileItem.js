import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import isEmpty from "../../validation/is-empty";

class ProfileItem extends Component {
  render() {
    const { profile } = this.props;
    const skills = profile.skills.map((skill, index) => (
      <span key={index} className="px-1">
        <i className="fa fa-check" />
        {skill}
      </span>
    ));

    return (
      <div className="card card-body mb-3">
        <div className="row">
          <div className="col-2 text-center d-none d-md-block">
            <img
              src={profile.user.avatar}
              alt="avatar"
              className="rounded-circle"
            />
            <Link
              to={`/profile/${profile.handle}`}
              className="btn btn-success btn-sm mt-2 px-1"
            >
              View Profile
            </Link>
          </div>
          <div className="col-md-6 col-sm-12">
            <h3>{profile.user.name}</h3>
            <p>
              {profile.status}{" "}
              {isEmpty(profile.bootcamp) ? null : (
                <span>at {profile.bootcamp}</span>
              )}
            </p>
            <hr />
            <div className="row">
              <div className="d-flex flex-wrap justify-content-center">
                {skills}
              </div>
            </div>
          </div>
          <div className="d-none d-lg-block">
            <ul className="list-group list-group-flush">
              {isEmpty(profile.githubusername) ? null : (
                <li className="list-group-item">
                  Handle: {profile.githubusername}
                </li>
              )}
              {isEmpty(profile.location) ? null : (
                <li className="list-group-item">
                  Location: {profile.location}
                </li>
              )}
              {isEmpty(profile.website) ? null : (
                <li className="list-group-item">
                  Website: <a href={profile.website}>{profile.website}</a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
