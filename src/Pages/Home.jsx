import React, { useState } from "react";
import Form from "../components/Form";
import TodoItem from "../components/TodoItem";
import { Container, List } from "@mui/material/";
export default function Home() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };
  const deleteTodo = (id) => {
    var filtered = todos.filter((todo)  => todo.id !== id);
    setTodos(filtered);
  }
  const editTodo = (id) => {

  }
  return (
    <main>
      <Container maxWidth="xs">
        <Form addTodo={addTodo} />
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} editTodo={editTodo} deleteTodo={deleteTodo} />
          ))}
        </List>
      </Container>
    </main>
  );
}
