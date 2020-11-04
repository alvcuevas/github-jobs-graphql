import React from "react";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const { id, title, type, company } = job;
  return (
    <div className="card">
      <h1 className="card--title">{title}</h1>
      <ul>
        <li>Company: {company}</li>
        <li>Type: {type}</li>
      </ul>
      <Link to={`/profile/${id}`}>Read more</Link>
    </div>
  );
};

export default Job;
