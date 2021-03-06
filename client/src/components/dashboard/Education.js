import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { deleteEducation } from "../../actions/profileActions";

class Education extends Component {
  onDeleteClick(id) {
    this.props.deleteEducation(id);
  }

  render() {
    const education = this.props.education.map(edu => (
      <tr key={edu._id}>
        <td>{edu.school}</td>
        <td>{edu.degree}</td>
        <td>
          <Moment format="MM/DD/YYYY">{edu.from}</Moment> -{" "}
          {edu.to === null ? (
            "Present"
          ) : (
            <Moment format="MM/DD/YYYY">{edu.to}</Moment>
          )}
        </td>
        <button
          className="btn btn-danger"
          onClick={this.onDeleteClick.bind(this, edu._id)}
        >
          Delete
        </button>
      </tr>
    ));

    return (
      <div>
        <h4 className="mb-4">Education Experience</h4>
        <table className="table">
          <thead>
            <tr>
              <th>school</th>
              <th>degree</th>
              <th>Years</th>
              <th />
            </tr>
          </thead>
          <tbody>{education}</tbody>
        </table>
      </div>
    );
  }
}

Education.propTypes = {
  deleteEducation: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteEducation }
)(Education);
