import { TodoItem } from "./TodoItem";

export function TodoList ({ todos, onHandledDelete, onToggleTodo }) {
    
    return(
        <ul>
          {
            todos.map((todoItem) => {
              return (
                <TodoItem key={todoItem.id}
                    id={todoItem.id} 
                    description={todoItem.description}
                    done={todoItem.done} 
                    onHandledDelete={onHandledDelete} 
                    onToggleTodo={onToggleTodo} />
              )
            })
          }
          </ul>
    );
}