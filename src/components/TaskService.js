import axios from 'axios';

const API_URL = 'http://localhost:3001/api/tasks';

const TaskService = {
  getTasks: async () => {
    const response = await axios.get(API_URL);
    return response.data;
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
    const response = await axios.put(`${API_URL}/${task.id}`, task);
    return response.data;
  },

  deleteTask: async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  },
};

export default TaskService;