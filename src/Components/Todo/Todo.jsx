import React from 'react';
import TodoForm from './TodoForm';
const Todo = () => {
    return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center",flexFlow: "column wrap"}}>
        <h1> Todo Page</h1>
        <TodoForm/>
    </div>
    )
};

export default Todo;

