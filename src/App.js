import { useState } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Todo from "./components/Todo";
import './App.css';
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Info from "./components/Info";


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
      description: ",dfsfgfdfdvffvfh",
      isActive: false
    },
    {
      id: 3,
      value: "Running",
      description: ",kjkjjghghgfdgfdf",
      isActive: false
    },
    {
      id: 4,
      value: "Dancing",
      description: ",gfghghghgbngbvb",
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

  const findArray = (value) => {
    return todo.filter(c => c.value === value)
  }


  return (
    <Router>
      <div className="wraper">
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
        {showAddTask && <AddTask onAdd={addTask} />}
        <div className="main">
          <Route path="/" exact>{todo.length > 0 ?
            <Todo
              todo={todo}
              onDelete={deleteTask}
              onToggle={toggleDone}
            /> : "No Tasks To Show"}
          </Route>
          <Route path="/:value">
            <Info
              findArray={findArray}
              todo={todo}
            />
          </Route>
        </div>
      </div>
    </Router>
  )
}

export default App;

