import React from "react";
import { useParams } from 'react-router-dom';
import useRequest from '../hooks/useRequest';
import gql from 'graphql-tag';

const GET_JOB = gql`
  query job($id: ID!) {
      job(id: $id) {
          id
          title
          type
          company
          description
          url
          location
      }
}`;

const Profile = () => {
  const { id } = useParams();
  const { data, loading, error } = useRequest(GET_JOB, id);

  if (error) return <h1>Something went wrong!</h1>;
  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="profile">
      <h1 className="profile--title">{data.job.title}</h1>
      <p className="profile--description">
        Job Description: {data.job.description}
      </p>
      <ul>
        <li>Company: {data.job.company}</li>
        <li>Job Type: {data.job.type}</li>
        <li>Job Location: {data.job.location}</li>
      </ul>
      <a href={data.job.url}>See more</a>
    </div>
  );
};

export default Profile;
