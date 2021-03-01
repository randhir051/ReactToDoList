import React, { useState } from "react";
import InputArea from "./InputArea";
import ToDoItem from "./ToDoItem";

function App() {
  const [items, setItems] = useState([]);
  const [completedItems, setCompleteItems] = useState([]);

  function handleTaskCompleted(index) {
    var newItemList = items.filter((item, idx) => {
      return index !== idx;
    });
    let itemName = items[index];

    setItems(newItemList);
    setCompleteItems((prevItems) => {
      return [...prevItems, itemName];
    });
  }

  function handleTaskIncomplete(index) {
    var newItemList = completedItems.filter((item, idx) => {
      return index !== idx;
    });
    let itemName = completedItems[index];

    setCompleteItems(newItemList);
    setItems((prevItems) => {
      return [...prevItems, itemName];
    });
  }

  return (
    <div className="horizontal">
      <div className="container">
        <div className="heading">
          <h1>To-Do List</h1>
        </div>
        <InputArea key={"uuid"} setItems={setItems} />
        <div>
          <ul>
            {items.map((todoItem, index) => (
              <ToDoItem
                id={index}
                itemName={todoItem}
                strike={false}
                onChecked={handleTaskCompleted}
              />
            ))}
          </ul>
        </div>
      </div>

      <div className="container">
        <div className="heading">
          <h1>Completed</h1>
        </div>

        <div>
          <ul>
            {completedItems.map((todoItem, index) => (
              <ToDoItem
                id={index}
                itemName={todoItem}
                strike={true}
                onChecked={handleTaskIncomplete}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
