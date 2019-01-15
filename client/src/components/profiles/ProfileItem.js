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
          <div className="col-2 d-md-block d-none text-center">
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

          <div className="col-lg-6 col-md-8 col-sm-10">
            <h3 className="d-none d-md-block">{profile.user.name}</h3>
            {/* name & profile display on small */}
            <div className="d-block d-md-none d-flex">
              <img
                src={profile.user.avatar}
                alt="avatar"
                className="rounded-circle smallPic mr-3"
              />
              <h3>{profile.user.name}</h3>
            </div>

            <p>
              {profile.status}{" "}
              {isEmpty(profile.bootcamp) ? null : (
                <span>at {profile.bootcamp}</span>
              )}
            </p>
            <Link
              to={`/profile/${profile.handle}`}
              className="btn btn-success btn-sm mt-2 px-1 d-block d-md-none"
            >
              View Profile
            </Link>
            <hr />
            <div className="d-flex flex-wrap justify-content-left">
              {skills}
            </div>
          </div>

          {/* User About Info List ---- only displays on large */}
          <div className="col-lg-4 d-none d-lg-block">
            <ul className="list-group list-group-flush">
              {isEmpty(profile.githubusername) ? null : (
                <li className="list-group-item">
                  <small>Handle:</small> {profile.githubusername}
                </li>
              )}
              {isEmpty(profile.location) ? null : (
                <li className="list-group-item">
                  <small>Location:</small> {profile.location}
                </li>
              )}
              {isEmpty(profile.website) ? null : (
                <li className="list-group-item">
                  <small>Website:</small>{" "}
                  <a href={profile.website}>{profile.website}</a>
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
