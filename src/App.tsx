import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import styled from "@emotion/styled";
import { AddInput } from "./components/TodoList/AddInput";
import { TodoItem } from "./components/TodoList/TodoItem";
import { TodoList } from "./components/TodoList";
import { Header } from "./components/Header";
import "./App.css";

const Wrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: 300
});

const initialData = [
  {
    id: uuid(),
    label: "Buy groceries",
    checked: false
  },
  {
    id: uuid(),
    label: "Reboot computer",
    checked: false
  },
  {
    id: uuid(),
    label: "Ace CoderPad interview",
    checked: true
  }
];

function App() {
  const [todos, setTodos] = useState(initialData);

  const addTodo = (label: string) => {
    //implement adding another item to the list here
    const newItem = {
      id: uuid(),
      label: label,
      checked: false
    };
    setTodos([...todos, newItem]);
    setTodos([newItem, ...todos]);

  };

  const handleChange = (target: any) => {
    // handle the check/uncheck logic
    const itemIndex = todos.findIndex((item) => item.id === target.id);
    const newCheckedValue = !todos[itemIndex].checked;
    if (newCheckedValue) {
    }
    todos[itemIndex].checked = newCheckedValue;
    setTodos([...todos]);
  };

  return (
    <Wrapper>
      <Header>Todo List</Header>
      <AddInput onAdd={addTodo} />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem {...todo} onChange={handleChange} />
        ))}
      </TodoList>
    </Wrapper>
  );
}

export default App;
