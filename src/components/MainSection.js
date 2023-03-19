import React, { useState } from "react";
import Inbox from "./Inbox";
import Next7Days from "./Next7Days";
import Today from "./Today";

const list = [
  { number: 1, title: "Let's complete this", date: new Date("9/27/2022") },
  { number: 2, title: "Should sleep at 9pm", date: new Date("9/28/2022") },
  { number: 3, title: "Should complete react", date: new Date("10/5/2022") },
];

const MainSection = (props) => {
  const [inboxList, setInboxList] = useState(list);

  const appendToList = (newItem) => {
    setInboxList([...inboxList, newItem]);
  };

  return (
    <div className="main-section">
      {props.active === "INBOX" && (
        <Inbox list={inboxList} append={appendToList} />
      )}
      {props.active === "TODAY" && <Today list={inboxList} />}
      {props.active === "NEXT" && <Next7Days list={inboxList} />}
    </div>
  );
};

export default MainSection;
