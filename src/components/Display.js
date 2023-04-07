import React from 'react';

const Display = (props) => {
  const { tasks } = props;

  return (
    tasks.map(task => {
        return (
            <div key={task.id}>
                {task.school}, {task.study}, from {task.start} to {task.end}
            </div>
        )
    })
    /* tasks.map((task) => {
        return (
            <div key={task.id}>{task.school}, {task.study}, from {task.start} to {task.end}</div>
        )
    }) */
  )  
}

export default Display;