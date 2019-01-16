import React, { Component } from "react";
import isEmpty from "../../validation/is-empty";

class ProfileHeader extends Component {
  render() {
    const { profile } = this.props;

    return (
      <div className="row">
        <div className="col-12">
          <div id="profileHeader" className="card card-body text-white mb-3">
            <div className="row">
              <div className="col-4 col-md-3 m-auto">
                <img
                  src={profile.user.avatar}
                  alt="avatar"
                  className="rounded-circle"
                />
              </div>
            </div>
            <div className="text-center">
              <h1 className="display-4 text-center">{profile.user.name}</h1>
              <p className="lead text-center">
                {profile.status}{" "}
                {isEmpty(profile.bootcamp) ? null : (
                  <span> at {profile.bootcamp}</span>
                )}
              </p>
              {isEmpty(profile.location) ? null : (
                <p>Location: {profile.location}</p>
              )}
              <p>
                {isEmpty(profile.website) ? null : (
                  <a href={profile.website} className="text-white p-2">
                    <i className="fas fa-globe fa-2x" />
                  </a>
                )}
                {isEmpty(
                  profile.social && profile.social.stackoverflow
                ) ? null : (
                  <a
                    href={profile.social.stackoverflow}
                    className="text-white p-2"
                  >
                    <i className="fab fa-stack-overflow fa-2x" />
                  </a>
                )}
                {isEmpty(profile.social && profile.social.linkedin) ? null : (
                  <a href={profile.social.linkedin} className="text-white p-2">
                    <i className="fab fa-linkedin fa-2x" />
                  </a>
                )}
                {isEmpty(profile.social && profile.social.facebook) ? null : (
                  <a href={profile.social.facebook} className="text-white p-2">
                    <i className="fab fa-facebook fa-2x" />
                  </a>
                )}
                {isEmpty(profile.social && profile.social.github) ? null : (
                  <a href={profile.social.github} className="text-white p-2">
                    <i className="fab fa-github fa-2x" />
                  </a>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileHeader;
