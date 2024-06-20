import React, { useState } from 'react';

function TaskForm({ task, onTaskSubmit, onTaskCancel }) {
  const [title, setTitle] = useState(task ? task.title : '');
  const [description, setDescription] = useState(task ? task.description : '');
  const [dueDate, setDueDate] = useState(task ? task.dueDate : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: task ? task._id : null,
      title,
      description,
      dueDate,
    };
    onTaskSubmit(newTask);
    resetForm();
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setDueDate('');
  };

  const handleTaskCancel = () => {
    onTaskCancel();
    window.location.reload();
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          className="form-control"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="dueDate">Due Date</label>
        <input
          type="date"
          className="form-control"
          id="dueDate"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary mr-2">
        {task ? 'Update Task' : 'Create Task'}
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={handleTaskCancel}
      >
        Cancel
      </button>
    </form>
  );
}

export default TaskForm;