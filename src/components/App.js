import React, { useState } from 'react';
import SideNav from './SideNav';
import MainSection from './MainSection';
import Header from './Header';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';

const App = () => {
  const [activeComponent, setActiveComponent] = useState('inbox');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setActiveComponent('inbox');
  };

  return (
    <div id="main">
      <Header />
      <div className='row'>
        <div className='col-md-2'>
          <SideNav change={setActiveComponent} active={activeComponent} />
        </div>
        <div className='col-md-10'>
          <MainSection
            active={activeComponent}
            tasks={tasks}
            onAddTask={handleAddTask}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
