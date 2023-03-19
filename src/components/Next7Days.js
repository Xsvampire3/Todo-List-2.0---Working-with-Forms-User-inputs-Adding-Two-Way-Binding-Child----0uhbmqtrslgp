import React from "react";
import ListRender from "./ListRender";

const Next7Days = (props) => {
  const today = new Date();
  const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000); // add 7 days to the current date

  const nseven = props.list.filter((itm) => {
    const d = new Date(itm.date);
    console.log(d,"ddddd");
    return d <= nextWeek && d >= today;
  });
  console.log(nseven)

  return (
    <div id="next-list">
      <ListRender list={nseven} />
    </div>
  );
};

export default Next7Days;
