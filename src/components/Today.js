import React from "react";
import ListRender from "./ListRender";

const Today = (props) => {
  const date = new Date();
  const today = date.toLocaleDateString();

  // Filter list to show only tasks with today's date
  const filteredList = props.list.filter(
    (task) => task.date.toLocaleDateString() === today
  );

  return (
    <div id="today-list">
      <ListRender list={filteredList} />
    </div>
  );
};

export default Today;
