import React from "react";
import ListRender from "./ListRender";

const Next7Days = (props) => {
  const date = new Date();
  const nextWeek = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 7);

  const next7DaysList = props.list.filter((item) => {
    const itemDate = new Date(item.date);
    return itemDate >= date && itemDate <= nextWeek;
  });

  return (
    <div id="next-list">
      <ListRender list={next7DaysList} />
    </div>
  );
};

export default Next7Days;
