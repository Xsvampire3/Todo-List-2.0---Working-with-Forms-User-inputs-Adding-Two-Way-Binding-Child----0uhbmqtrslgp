import React, { useState, useRef } from "react";

const Inbox = (props) => {
  const [newTask, setNewTask] = useState(false);
  const titleRef = useRef();
  const dateRef = useRef();

  const addNewTask = () => {
    setNewTask(true);
  };

  const cancelNewTask = () => {
    setNewTask(false);
  };

  const handleAddNewTask = (event) => {
    event.preventDefault();
    const newTitle = titleRef.current.value;
    const newDate = dateRef.current.value;
    if (newTitle !== "") {
      props.append({ title: newTitle, date: newDate });
    }
    setNewTask(false);
  };

  return (
    <div>
      <h3>Inbox</h3>
      {!newTask && (
        <button className="new" onClick={addNewTask} id="add-new">
          +Add New
        </button>
      )}
      {newTask && (
        <form className="newtask-box">
          <input type="text" id="title" ref={titleRef}></input>
          <div className="buttons">
            <button className="new" id="add-list" onClick={handleAddNewTask}>
              Add Task
            </button>
            <button className="new" onClick={cancelNewTask}>
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
        {props.list.map((list) => {
          return (
            <div className="box" key={list.title}>
              <div className="task">
                {list.title} ({list.date})
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Inbox;
