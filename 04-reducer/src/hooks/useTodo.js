import { useReducer, useEffect } from "react"
import { todoReducer } from "../todoReducer"

export function useTodo(initialTodos){
    
    function init(){
        return JSON.parse(localStorage.getItem('todos')) || initialTodos    
    }
      
    const [todos, dispatch] = useReducer(todoReducer, initialTodos, init)
    
    function onTodoAdd( description ){
        
        const newTodo = {
          id: new Date().getTime() + Math.ceil(Math.random() * 100),
          description,
          done:false
        }
        
        const action = {
          type: '[TODO] Add todo',
          payload: newTodo
        }    
        
        dispatch(action)
      }
      
      function onToggleTodo(id){
        dispatch(
          {
            type: '[TODO] Toggle status',
            payload: id
          }
        )
      }
      
      function onDeleteTodo(id){
        
        dispatch(
          {
            type: '[TODO] Delete todo',
            payload: id
          }
        )
      }
      
      useEffect(()=> {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    
    const todosCount = todos.length;
    const pendingTodos = todos.filter(todo => !todo.done).length;
    
    return { todosCount, pendingTodos, todos, onTodoAdd, onDeleteTodo, onToggleTodo }    
}