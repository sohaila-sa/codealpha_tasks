import React, {useState} from "react";
import './App.css';

const TodoList = () =>{
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    const handleAddTodos =() =>{
        if (newTodo.trim() !== "") {
            setTodos([...todos,{ text: newTodo.trim(), checked:false}]);
            setNewTodo("");
        }
    };

    const handleDeleteTodo = (index) =>{
       const newTodos = [...todos];
       newTodos.splice(index, 1);
       setTodos(newTodos);

    };
    const handleToggleTodos = (index) =>{
        const newTodos = [...todos];
        newTodos[index].checked = !newTodos[index].checked;
        setTodos(newTodos);

    };
    
    return (
        <div className="App">
            <div className="first-container">
            <h1> Get Things Done </h1>
            <input className="entery" type="text" value={newTodo} placeholder="What is the task today?" onChange={(e) => setNewTodo(e.target.value)}/>
            <button onClick={handleAddTodos}>Add Task</button>
            
            <ul className="list">
                {todos.map((todo,index) => (
                    <li key={index}>
                        <div className="container">
                            <input className="checkbox1" type="checkbox" 
                            checked={todo.checked} 
                            onChange={() => handleToggleTodos(index)}
                            />
                            <span 
                                style={{
                                    marginRight:"10px",
                                    textDecoration: todo.checked? "line-through": "none",
    
                                }}
                            >
                                {todo.text}
                            </span>
                            <div className="delete">
                            <button className="deletebtn" onClick={()=>handleDeleteTodo(index)}>Delete</button>
                            </div>
                            
 
                        </div>
                    </li> 
                ))}
            </ul>
        </div>
     </div>
    );
};

export default TodoList;
