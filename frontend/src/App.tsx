import React from 'react';
import './App.css';
import TaskList from './TaskList';  // اضافه کردن TaskList

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Task Manager</h1>
      </header>
      
      {/* حذف محتوای قدیمی و نمایش لیست تسک‌ها */}
      <main>
        <TaskList />  {/* اضافه کردن TaskList به این بخش */}
      </main>

      <footer>
        <p>Powered by React & Redux</p>
      </footer>
    </div>
  );
};

export default App;
