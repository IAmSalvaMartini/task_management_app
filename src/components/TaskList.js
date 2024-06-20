import React from 'react';

function TaskList({ tasks, onTaskSelect, onTaskEdit, onTaskCreate }) {
  return (
    <div>
      <h3>Task List</h3>
      <button className="btn btn-primary mb-3" onClick={onTaskCreate}>
        Add Task
      </button>
      <ul className="list-group">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>{task.title}</span>
            <div>
              <button
                className="btn btn-sm btn-primary mr-2"
                onClick={() => onTaskSelect(task)}
              >
                View
              </button>
              <button
                className="btn btn-sm btn-secondary"
                onClick={() => onTaskEdit(task)}
              >
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;