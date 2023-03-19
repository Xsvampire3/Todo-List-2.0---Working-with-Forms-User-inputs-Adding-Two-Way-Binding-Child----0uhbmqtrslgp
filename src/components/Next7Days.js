import React from "react";
import ListRender from "./ListRender";

const Next7Days = (props) => {
  const date = new Date();
  const nextWeek = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 7);

  const filteredList = props.list.filter(
    (item) =>
      item.date >= new Date(date.getFullYear(), date.getMonth(), date.getDate()) &&
      item.date <= nextWeek
  );

  return (
    <div id="next-list">
      <ListRender list={filteredList} />
    </div>
  );
};

export default Next7Days;
