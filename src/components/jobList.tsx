import JobOffer from "../utils/jobOffer";
import "../App.scss";

interface JobListProps {
  jobOffer: JobOffer[];
}

function JobList({ jobOffer }: JobListProps) {
  return (
    <div>
      {jobOffer.map(job => (
        <div className="card">
          <ul className="list" key={job.id}>
            <span className="first-span">
              <li>{job.logo}</li>
              <li>{job.company}</li>
              <li>{job.new}</li>
              <li>{job.position}</li>
              <li>{job.featured}</li>
              <li>{job.postedAt}</li>
              <li>{job.contract}</li>
              <li>{job.location}</li>
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
