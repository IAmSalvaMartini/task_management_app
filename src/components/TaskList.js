import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function TaskList({ tasks, onTaskSelect, onTaskEdit, onTaskCreate, onTaskDelete }) {
  console.log('Tasks:', tasks);
  return (
    <div>
      <h3>Task List</h3>
      <button className="btn btn-primary mb-3" onClick={onTaskCreate}>
        Add Task
      </button>
      <ul className="list-group">
        {tasks.map((task) => (
          <li
            key={task._id}
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
              <button className="btn btn-sm btn-danger" onClick={() => task && task._id && onTaskDelete(task)}>
                <FontAwesomeIcon icon={faTrash} />
              </button>

            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;