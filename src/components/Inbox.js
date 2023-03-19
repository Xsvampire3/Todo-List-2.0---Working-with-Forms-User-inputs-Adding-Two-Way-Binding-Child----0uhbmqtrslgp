import React, { useState, useRef } from 'react';

const Inbox = (props) => {
  const [newTask, setNewTask] = useState(false);
  const titleRef = useRef();
  const dateRef = useRef();

  const handleAddNewClick = () => {
    setNewTask(true);
  };

  const handleAddTask = (event) => {
    event.preventDefault();
    const newTitle = titleRef.current.value;
    const newDate = dateRef.current.value;
    const newTask = {
      title: newTitle,
      date: newDate
    };
    props.onAddTask(newTask);
    setNewTask(false);
    titleRef.current.value = '';
    dateRef.current.value = '';
  };

  const handleCancelClick = () => {
    setNewTask(false);
    titleRef.current.value = '';
    dateRef.current.value = '';
  };

  return (
    <div>
      <h3>Inbox</h3>
      {!newTask && (
        <button className="new" onClick={handleAddNewClick} id='add-new'>
          +Add New
        </button>
      )}
      {newTask && (
        <form className="newtask-box">
          <input type="text" id="title" ref={titleRef}></input>
          <div className="buttons">
            <button className="new" id="add-list" onClick={handleAddTask}>
              Add Task
            </button>
            <button className="new" onClick={handleCancelClick}>
              Cancel
            </button>
            <input
              type="date"
              ref={dateRef}
              defaultValue="2022-09-27"
              id="date"
            ></input>
          </div>
        </form>
      )}
      <div id="inbox">
        {props.list.map((task) => {
          return (
            <div className="box" key={task.title}>
              <div className="task">
                {task.title} ({task.date})
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Inbox;
