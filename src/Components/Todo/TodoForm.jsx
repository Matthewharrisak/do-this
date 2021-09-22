import React, {useState} from 'react';

const TodoForm = () => {
    const [todo, setTodo] = useState({
        title: "",
        description: "",
        dueDate: new Date,
    });

    return (
    <div>
<input type="text"/>
<input type="text"/>
<input type="text"/>

    </div>
    )
};

export default TodoForm;