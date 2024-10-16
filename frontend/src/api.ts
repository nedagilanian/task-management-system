import axios from 'axios';

// تغییر آدرس baseURL به آدرس مناسب برای GitHub Codespace
const api = axios.create({
  baseURL: 'https://super-duper-waddle-q7q9rgxv9pjqh4xp4.github.dev/api', // تغییر این خط
  headers: {
    'Content-Type': 'application/json',
  },
});

// درخواست‌ها به API
export const getTasks = () => api.get('/tasks/');
export const login = (username: string, password: string) =>
  api.post('/token/', { username, password });

export default api;
