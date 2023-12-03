import React, { useState } from "react";
import { TextField, Button } from "@mui/material/";

export default function Form({addTodo}) {
  const [text, setText] = useState(null);
  const [id, setId] = useState(0);
  const todoCreate = (text) => {
    const todoObj= {text: text, id: id}
    setId(id + 1);
    addTodo(todoObj);
    document.getElementById("outlined-basic").value = null
  }
  return (
    <section>
      <h1>Lista de tarefas</h1>
      <div className="form">
        <TextField
          id="outlined-basic"
          label="Tarefa"
          variant="outlined"
          onChange={(e) => setText(e.target.value)}
        />
        <Button variant="text" onClick={() => todoCreate(text)}>
          Enviar
        </Button>
      </div>
    </section>
  );
}
