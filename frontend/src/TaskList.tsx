import React, { useEffect, useState } from 'react';
import { getTasks } from './api';

// تعریف اینترفیس برای Task بر اساس مدل Django
interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
  user: {
    id: number;
    username: string;
  };
}

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    getTasks()
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.error('Error fetching tasks:', error);
      });
  }, []);

  return (
    <div>
      <h1>Tasks</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
            <p>Assigned to: {task.user.username}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
