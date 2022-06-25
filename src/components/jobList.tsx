import JobOffer from "../utils/jobOffer";

interface JobListProps {
  jobOffer: JobOffer[];
}

function JobList({ jobOffer }: JobListProps) {
  return (
    <div>
      {jobOffer.map(job => (
        <ul key={job.id}>
          <li>{job.company}</li>
          <li>{job.logo}</li>
          <li>{job.new}</li>
          <li>{job.featured}</li>
          <li>{job.position}</li>
          <li>{job.role}</li>
          <li>{job.level}</li>
          <li>{job.postedAt}</li>
          <li>{job.contract}</li>
          <li>{job.location}</li>
          <li>{job.languages}</li>
          <li>{job.tools}</li>
        </ul>
      ))}
    </div>
  );
}

export default JobList;
