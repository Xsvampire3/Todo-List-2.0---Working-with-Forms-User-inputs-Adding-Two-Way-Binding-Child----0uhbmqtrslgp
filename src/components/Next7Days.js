import React from "react";
import ListRender from "./ListRender";

const Next7Days = (props) => {
  const today = new Date("10/4/2022");
  const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000); // add 7 days to the current date

  const nseven = props.list.filter((itm) => {
    const d = new Date(itm.date);
    return d <= nextWeek && d >= today;
  });

  return (
    <div id="next-list">
      <ListRender list={nseven} />
    </div>
  );
};

export default Next7Days;
