import React, { useState } from "react";

function ToDoItem(props) {
  const [isDone, setStatus] = useState(true);
  const completeTask = { "text-decoration": "line-through" };

  function changeItemStatus() {
    setStatus(!isDone);
    props.onChecked(props.id);
  }

  return (
    <li
      style={props.strike ? completeTask : null}
      contentEditable={false}
      onClick={changeItemStatus}
    >
      {props.itemName}
    </li>
  );
}

export default ToDoItem;
