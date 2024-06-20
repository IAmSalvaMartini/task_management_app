import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TaskList from '../components/TaskList';
import TaskDetails from '../components/TaskDetails';
import TaskForm from '../components/TaskForm';
import TaskService from '../components/TaskService';

function HomePage() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await TaskService.getTasks();
      if (response === undefined) {
        throw new Error('API response is undefined');
      }
      if (!Array.isArray(response)) {
        throw new Error('API response is not an array of tasks');
      }
      setTasks(response);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };  
  

  const handleTaskUpdate = async (updatedTask) => {
    try {
      if (updatedTask.id) {
        // Update an existing task
        await TaskService.updateTask(updatedTask);
      } else {
        // Create a new task
        const newTask = await TaskService.createTask(updatedTask);
        setTasks([...tasks, newTask]);
      }
      setIsEditing(false);
      setSelectedTask(null);
    } catch (error) {
      console.error('Error updating/creating task:', error);
    }
  };

  const handleTaskSelect = (task) => {
    setSelectedTask(task);
    setIsEditing(false);
  };

  const handleTaskCreate = () => {
    const newTask = {
      id: uuidv4(),
      title: '',
      description: '',
      dueDate: '',
    };
    setTasks([...tasks, newTask]);
    setSelectedTask(newTask);
    setIsEditing(true);
  };

  const handleTaskEdit = (task) => {
    setSelectedTask(task);
    setIsEditing(true);
  };
  
  const handleTaskDelete = async (task) => {
    try {
      await TaskService.deleteTask(task);
      setTasks(tasks.filter((t) => t._id !== task._id));
      setSelectedTask(null);
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };    

  // ... (other functions for handling task updates and deletions)

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <TaskList
            tasks={tasks}
            onTaskSelect={handleTaskSelect}
            onTaskEdit={handleTaskEdit}
            onTaskCreate={handleTaskCreate}
            onTaskDelete={handleTaskDelete}
          />
        </div>
        <div className="col-md-8">
          {isEditing ? (
            <TaskForm
            ask={selectedTask}
            onTaskSubmit={handleTaskUpdate}
            onTaskCancel={() => setIsEditing(false)}
            />
          ) : (
            <TaskDetails task={selectedTask} />
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;