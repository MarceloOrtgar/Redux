import { useState } from "react";
import { useGetTodosQuery,useGetTodoQuery } from "./store/apis"



export const TodoApp = () => {

    const [todoId, setTodoId] = useState(1)


    // const {data:todos=[],IsLoading}=useGetTodosQuery();
    const {data:todo,IsLoading}=useGetTodoQuery(todoId);

    const nextTodo=()=>{
        setTodoId(todoId+1)
    }

    const prevTodo=()=>{
        if(todoId===1) return;
        setTodoId(todoId-1)
    }

  return (
    <>
        <h1>Todos - RTK Query</h1>
        <hr/>
        <h4>IsLoading:{ IsLoading ? 'True':'False'}</h4>
        <pre>{JSON.stringify(todo)}</pre>

        <button onClick={prevTodo}>Prev Todo</button>

        <button onClick={nextTodo}>Next Todo</button>

        {/* <ul>
            {todos.map(todo=>(
                <li key={todo.id}>
                <strong>{todo.completed ? 'DONE':'Pending'}</strong>
                    {todo.title}
                </li>
            ))}
        </ul> */}
      
    </>
  )
}
