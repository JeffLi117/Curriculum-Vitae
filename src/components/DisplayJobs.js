import React from 'react';

const DisplayJobs = (props) => {
    const { finalJobs } = props;

    return (
        <ul>
            {finalJobs.map((job) => {
                return (
                <li key={job.id} className="workList">{job.company} as {job.position}<br></br>
                From {job.startWork} to {job.endWork}<br></br>
                Main Tasks: {job.mainTasks}</li>
                )
            })}
        </ul>
    )
}

export default DisplayJobs