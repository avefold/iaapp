import { useState } from 'react'
import { TodoForm } from './Form'
import deleteButton from '../.././assets/dolist/trash.svg'
import editButton from '../.././assets/dolist/pencil.svg'

export function Todo({ todos, completeTodo, removeTodo, updatedTodo }: any) {
  const [edit, setEdit] = useState({ id: null, value: "" })

  function submitUpdate(value: any) {
    updatedTodo(edit.id, value)
    setEdit({ id: null, value: "" })
  }

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />
  }

  return todos.map((todo: any, index: any) => (
    <div className={todo.isComplete ? 'app-respon dolist-box todo-row complete' : 'app-respon dolist-box todo-row'} key={index}>
      <div key={todo.id} onClick={() => completeTodo(todo.id)} className='list-container-88'>
        <p className='flex-todo'>{todo.text}</p>
      </div >
      <div className='app-row'>
        <button onClick={() => removeTodo(todo.id)} className='app-center list-container-6'>
          <img src={deleteButton} alt='Delete' style={{ height: 26, width: 26 }} />
        </button>
        <button onClick={() => setEdit({ id: todo.id, value: todo.text })} className='app-center list-container-6'>
          <img src={editButton} alt='Edit' style={{ height: 26, width: 26 }} />
        </button>
      </div>
    </div>
  ))
}