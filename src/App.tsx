import React, { useState } from "react";
import Select from "react-select";

//Todo Item Type
interface TodoItem {
  id: string;
  name: string;
}

//Dummy Todo items
const TodoOptions: TodoItem[] = [
  {
    id: "1",
    name: "Setup CI/CD pipeline.",
  },
  {
    id: "2",
    name: "Write Unit Tests.",
  },
  {
    id: "3",
    name: "Learn Azure Devops.",
  },
  {
    id: "4",
    name: "Learn New UI Library for React.",
  },
  {
    id: "5",
    name: "Learn Next JS.",
  },
];

const TodoComponent: React.FunctionComponent = () => {
  const [selectedItem, setSelectedItem] = useState<TodoItem | null>(null);//Selected Todo Item

  const [todoList, setTodoList] = useState<TodoItem[] | []>([]); //Todo Item List

  const handleChange = (option: any) => {
    setSelectedItem(option); //Updating selected value.
  };

  const addToList = () => {
    if (selectedItem) {
      setTodoList([...todoList, { ...selectedItem }]);//Add item to list.
      setSelectedItem(null); //Reset dropdown selected value after updating list.
    }
  };

  return (
    <>
      <div className="wrapper">
        <div className="task-input">
          <Select<TodoItem>
            value={selectedItem}
            getOptionLabel={(todoItem: TodoItem) => todoItem.name}
            getOptionValue={(todoItem: TodoItem) => todoItem.id}
            options={TodoOptions}
            isClearable={true}
            backspaceRemovesValue={true}
            onChange={handleChange}
          />
        </div>
        <div className="controls">
          <button className="button-style" onClick={addToList}>
            Add to List
          </button>
          <button
            className="button-style"
            onClick={() => {
              setTodoList([]);
            }}
          >
            Clear All
          </button>
        </div>
        <ul className="task-box">
          <ul>
            {todoList.length > 0
              ? todoList.map((item, index) => {
                  return (
                    <li key={index}>
                      {" "}
                      {index + 1}
                      {". "}
                      {item.name}
                    </li>
                  );
                })
              : "ADD ITEMS TO SHOW!!"}
          </ul>
        </ul>
      </div>
    </>
  );
};

const App: React.FunctionComponent = () => (
  <div>
    <TodoComponent />
  </div>
);

export default App;
