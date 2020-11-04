import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import gql from "graphql-tag";

import useRequest from "./hooks/useRequest";
import Job from "./components/Job";
import Profile from "./components/Profile";

import "./App.css";

const GET_JOBS = gql`
  {
    jobs {
      id
      title
      type
      company
    }
  }
`;

const App = () => {
  const { data, loading, error } = useRequest(GET_JOBS);

  if (error) return <h1>Something went wrong!</h1>;
  if (loading) return <h1>Loading...</h1>;

  return (
    <Router>
      <div className="App">
        <h1>Github Jobs</h1>
        <Route path="/" exact>
          {data && data.jobs.map(job => <Job key={job.id} job={job} />)}
        </Route>
        <Route path="/profile/:id">
          <Profile />
        </Route>
      </div>
    </Router>
  );
};

export default App;
