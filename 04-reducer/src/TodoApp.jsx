import { TodoAdd } from './components/TodoAdd'
import { TodoList } from './components/TodoList'
import './App.css'
import { useTodo } from './hooks/useTodo'

function TodoApp() {
  
  const { todosCount, pendingTodos, todos, onTodoAdd, onDeleteTodo, onToggleTodo } = useTodo([])

  return (
    <main>
      <h1 className='title-app'>TodoApp <span className='total-todos'>{ todosCount }</span>, <small>pending: {pendingTodos}</small></h1>
      <section className='content-section'>
        
        <article className='todo-list-actions'>
          <TodoList todos={ todos } onHandledDelete={ onDeleteTodo } onToggleTodo={onToggleTodo} />
        </article>
        
        <article className='todo-adds'>
          <h2>Add TODO</h2>
          <TodoAdd onSubmit={ onTodoAdd } />
        </article>
        
      </section>
    </main>
  )
}

export default TodoApp
