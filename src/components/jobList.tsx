import JobOffer from "../utils/jobOffer";
import "../App.scss";

interface JobListProps {
  jobOffer: JobOffer[];
}

function JobList({ jobOffer }: JobListProps) {
  return (
    <div className="main-div">
      {jobOffer.map(job => (
        <div className="card">
          <ul className="list" key={job.id}>
            <span className="first-span">
              <img className="img" src={job.logo} />
              <div className="info">
                <div className="top-info">
                  <li>{job.company}</li>
                  <li>{job.featured}</li>
                  <li>{job.new}</li>
                </div>
                <div className="center-info">
                  <li>{job.position}</li>
                </div>
                <div className="bottom-info">
                  <li>{job.postedAt}</li>
                  <li>{job.contract}</li>
                  <li>{job.location}</li>
                </div>
              </div>
            </span>
            <span className="second-span">
              <li>
                <button>{job.role}</button>
              </li>
              <li>
                <button>{job.level}</button>
              </li>
              <li>
                <button>{job.languages}</button>
              </li>
              <li>
                <button>{job.tools}</button>
              </li>
            </span>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default JobList;
