import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  const [completedItems, setCompleteItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

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
        <div className="form">
          <input onChange={handleChange} type="text" value={inputText} />
          <button onClick={addItem}>
            <span>Add</span>
          </button>
        </div>
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