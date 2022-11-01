import React from "react";

import { Routes, Route } from "react-router-dom";

import { JobList, JobDetails } from "./pages";
import { ROUTES } from "./utils/constans/routes";

export const App = () => {
  const [jobID, setJobId] = React.useState(0);

  const describeJobId = (id:number) => {
    setJobId(id)
  }

  return (
    <div >
    
      <Routes>
        <Route path={ROUTES.HOME} element={<JobList describeJobId={describeJobId} />} />
        <Route path={ROUTES.JOB_DETAILS} element={<JobDetails id={jobID} />} />
      </Routes>

    </div>
  );
};
