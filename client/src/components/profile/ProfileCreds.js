import React, { Component } from "react";
import Moment from "react-moment";

class ProfileCreds extends Component {
  render() {
    const { experience, education } = this.props;

    const expItems = experience.map((exp, index) => (
      <li key={index} className="list-group-item">
        <h4>{exp.company}</h4>
        <p>
          <Moment format="MM/DD/YYYY">{exp.from}</Moment> -
          {exp.to === null ? (
            "Now"
          ) : (
            <Moment format="MM/DD/YYYY">{exp.to}</Moment>
          )}
        </p>
        <p>
          <strong>Position: {exp.title}</strong>
        </p>
        <p>
          {
            (exp.location = "" ? null : (
              <span>
                <strong>Location: {exp.location}</strong>
              </span>
            ))
          }
        </p>
      </li>
    ));

    const eduItems = education.map((edu, index) => (
      <li key={index} className="list-group-item">
        <h4>{edu.school}</h4>
        <p>
          <Moment format="MM/DD/YYYY">{edu.from}</Moment> -
          {edu.to === null ? (
            "Now"
          ) : (
            <Moment format="MM/DD/YYYY">{edu.to}</Moment>
          )}
        </p>
        <p>
          <strong>Degree: {edu.degree}</strong>
        </p>
        <p>
          <strong>Field of Study: {edu.fieldofstudy}</strong>
        </p>
      </li>
    ));

    return (
      <div className="row">
        <div className="col-6">{expItems}</div>
        <div className="col-6">{eduItems}</div>
      </div>
    );
  }
}

export default ProfileCreds;
