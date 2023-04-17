import React from 'react';

const DisplayJobs = (props) => {
    const { finalJobs } = props;

    return (
        <ul>
            {finalJobs.map((job) => {
                return (
                <div key={job.id} className="eachEduHolder">
                    <div className="eduLeft">
                        <li key={job.id} className="workList">{job.company} as {job.position}<br></br>
                        From {job.startWork} to {job.endWork}<br></br>
                        Main Tasks: {job.mainTasks}</li>
                    </div>
                    <div className="eduRight">
                            <button type="button" onClick={() => {props.outerJobClick(job)}}>Edit</button>
                    </div>
                </div>
                )
            })}
        </ul>
    )
}

export default DisplayJobs