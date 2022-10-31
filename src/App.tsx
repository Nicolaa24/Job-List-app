import React from "react";

import { Routes, Route } from "react-router-dom";

import { JobList } from "./pages/JobList";
import { JobDetails } from "./pages/JobDetails";

export const App = () => {
  const [jobID, setJobId] = React.useState(0);

  const describeJobId = (id:number) => {
    setJobId(id)
  }

  return (
    <div >
    
      <Routes>
        <Route path='/' element={<JobList describeJobId={describeJobId} />} />
        <Route path='/details' element={<JobDetails id={jobID} />} />
      </Routes>

    </div>
  );
};
