
export function TodoItem ({ id, description, done, onHandledDelete, onToggleTodo }) {
    
    function onTodoDelete(){
        onHandledDelete(id)
    }
    return (
        <li key={id} className='todo-item'>
            <span className={`todo-description ${done? 'todo-done':''}`}
                onClick={ () => onToggleTodo( id ) }
            >{description}</span>
            <button 
                className='todo-action-delete'
                onClick={onTodoDelete} >X</button>
        </li>
    );
}