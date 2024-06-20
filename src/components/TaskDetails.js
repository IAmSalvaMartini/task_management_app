import React from 'react';

function TaskDetails({ task }) {
  if (!task) {
    return <div>Select a task to view details</div>;
  }

  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Due Date: {task.dueDate}</p>
    </div>
  );
}

export default TaskDetails;