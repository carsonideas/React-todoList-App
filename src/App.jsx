import { useState } from "react";
import "./App.css";

function App() {
  const [item, setItem] = useState("");
  const [description, setDescription] = useState("");
  const [todoList, setTodoList] = useState([]);

  function handleChangeItem(ev) {
    setItem(ev.target.value);
  }

  function handleChangeDescription(ev) {
    setDescription(ev.target.value);
  }

  function handleAddItem(ev) {
    ev.preventDefault();
    if (!item || !description) {
      alert("Both Item and Description are required");
      return;
    }

    const newItem = {
      item: item,
      description: description,
    };

    setTodoList((prevTodoList) => [...prevTodoList, newItem]);

    setItem("");
    setDescription("");
  }

  return (
    <div className="myPageBox">
      <div className="myTodoBox">
        <h1 className="myBigTitle">My Houston React Todo List</h1>
        <form className="myFormBox" onSubmit={handleAddItem}>
          <input
            type="text"
            placeholder="Item"
            className="myTextInput"
            value={item}
            onChange={handleChangeItem}
          />
          <input
            type="text"
            placeholder="Description"
            className="myTextInput"
            value={description}
            onChange={handleChangeDescription}
          />
          <button className="myAddButton" type="submit">
            Add Item
          </button>
        </form>

        <div className="myListArea">
          {todoList.map((todo, index) => (
            <div className="myListItem" key={index}>
              <h3 className="myItemName">{todo.item}</h3>
              <p className="myItemNote">{todo.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
