import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";
<<<<<<< HEAD
// import ProfileItem from "./ProfileItem";
import { getProfiles } from "../../actions/profileActions";

class Profiles extends Component {
  componentDidMount() {
    this.props.getProfiles();
  }
=======
import ProfileItem from "./ProfileItem";
import { getProfiles } from "../../actions/profileActions";

class Profiles extends Component {
  componentDidMount = () => {
    this.props.getProfiles();
  };
>>>>>>> d9bef43d1bd4ffdc2678b5ec46708238f9e99983

  render() {
    const { profiles, loading } = this.props.profile;
    let profileItems;

<<<<<<< HEAD
    if (profiles === null || loading === true) {
      profileItems = <Spinner />;
    } else {
      if (profiles.length > 0) {
        // profileItems = <ProfileItem />;
        profileItems = <h1>Profiles Go Here</h1>;
      } else {
        profileItems = <h5>No Profiles Found</h5>;
      }
    }

=======
    if (profiles === null || loading) {
      profileItems = <Spinner />;
    } else {
      if (profiles.length > 0) {
        profileItems = profiles.map(profile => (
          <ProfileItem key={profile._id} profile={profile} />
        ));
      } else {
        profileItems = <h4>No Profiles Found</h4>;
      }
    }
>>>>>>> d9bef43d1bd4ffdc2678b5ec46708238f9e99983
    return (
      <div className="profiles">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Boot Campers</h1>
              <p className="lead text-center">
<<<<<<< HEAD
                Discover and connect with other boot camp people
=======
                Discover and Connect with fellow Bootcampers
>>>>>>> d9bef43d1bd4ffdc2678b5ec46708238f9e99983
              </p>
              {profileItems}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfiles }
)(Profiles);
