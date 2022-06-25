import { useState, useEffect } from "react";
import { NavBar } from "./components/navbar";
import jobService from "./services/services";
import JobOffer from "./utils/jobOffer";
import JobList from "./components/jobList";
import "./App.scss";

const App = () => {
  const [jobOffer, setJobOffer] = useState<JobOffer[]>([]);

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {
    const jobs = await jobService.getJobs();
    setJobOffer(jobs);
  };
  return (
    <div className="App">
      <NavBar />
      <JobList jobOffer={jobOffer} />
    </div>
  );
};

export default App;
