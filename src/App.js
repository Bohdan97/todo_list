import { useState } from "react";
import Todo from "./components/todo";
import './App.css';
import Header from "./components/header";
import AddTask from "./components/AddTask";


const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [todo, setTodo] = useState([
    {
      id: 1,
      value: "Shopping",
      description: ",dslkpfmsdfdsfsdfd",
      isActive: false
    },
    {
      id: 2,
      value: "Planing",
      description: ",dslkpfmsdfdsfsdfd",
      isActive: false
    },
    {
      id: 3,
      value: "Running",
      description: ",dslkpfmsdfdsfsdfd",
      isActive: false
    },
    {
      id: 4,
      value: "Dancing",
      description: ",dslkpfmsdfdsfsdfd",
      isActive: false
    },
  ])

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTodo([...todo, newTask])
  }

  const deleteTask = (id) => {
    setTodo(todo.filter(c => c.id !== id))
  }

  const toggleDone = (id) => {
    setTodo(todo.map((todo) => todo.id === id ? { ...todo, isActive: !todo.isActive } : todo))
  }

  return (
    <div className="wraper">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      <div className="main">
        {todo.length > 0 ? <Todo
          todo={todo}
          onDelete={deleteTask}
          onToggle={toggleDone} /> : "No Tasks To Show"}
      </div>

    </div>

  )
}

export default App;

