import React, { Component } from 'react';

/* const dddd = (props) => {
  const { tasks } = props;

  return (
    tasks.map(task => {
        return (
            <div key={task.id}>
                {task.school}, {task.study}, from {task.start} to {task.end}
            </div>
        )
    })
  )  
} */

export default function DisplayName(props) {
    /* Display each one individually so that I can set their values....? */
    const userName = props.info.userName;

    if (userName !== "") {
        return (
            <div className="displayResults">
                Name: {userName}
            </div>
        )
    }
}
