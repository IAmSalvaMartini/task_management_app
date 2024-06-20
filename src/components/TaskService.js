import axios from 'axios';

const API_URL = 'http://localhost:3001/api/tasks';

const TaskService = {
  getTasks: async () => {
    try{
      const response = await axios.get(API_URL);
      console.log('Tasks from database:', response.data);
      return Array.isArray(response.data) ? response.data : [];
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
  },

  getTaskById: async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  },

  createTask: async (task) => {
    const response = await axios.post(API_URL, task);
    return response.data;
  },

  updateTask: async (task) => {
    const response = await axios.put(`${API_URL}/${task._id}`, task);
    return response.data;
  },
  
  deleteTask: async (task) => {
    const response = await axios.delete(`${API_URL}/${task._id}`);
    return response.data;
  },
  
};

export default TaskService;