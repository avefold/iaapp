import { useEffect, useState } from 'react'
import { TodoForm } from './compon/Form'
import { Todo } from './compon/List'

import './dolist.css'

export function DoList() {
  const [todos, setTodos] = useState<any>(() => {
    const savedTodos = localStorage.getItem("dolist:todos")
    if (savedTodos) { return JSON.parse(savedTodos) }
    else { return [] }
  })
  useEffect(() => {
    localStorage.setItem("dolist:todos", JSON.stringify(todos))
  }, [todos])

  function addTodo(todo: any) {
    const str = todo.toString()
    if (!str.text || /^\s*$/.test(str.text)) {
      setTodos([...todos, { text: str.trim() }])
    }
    const newTodos = [todo, ...todos]
    setTodos(newTodos)
  }

  function updatedTodo(todoId: any, newValue: any) {
    if (!newValue.text || /^\s*$/.test(newValue.text)) { return false }
    setTodos((prev: any) => prev.map((item: any) => (item.id === todoId ? newValue : item)))
  }

  function removeTodo(id: any) {
    const removeArr = [...todos].filter((todo) => todo.id !== id)
    setTodos(removeArr)
  }

  function completeTodo(id: any) {
    let updatedTodos = todos.map((todo: any) => {
      if (todo.id === id) { todo.isComplete = !todo.isComplete }
      return todo
    })
    setTodos(updatedTodos)
  }

  return <>
    <TodoForm onSubmit={addTodo} />
    <Todo
      todos={todos}
      completeTodo={completeTodo}
      removeTodo={removeTodo}
      updatedTodo={updatedTodo}
    />
  </>
}