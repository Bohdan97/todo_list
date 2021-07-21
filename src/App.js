import React, { Component } from 'react';
import List from './components/list';
import './App.css';


class App extends Component {
  state = {
    todo: [
      { id: 1, value: "Shopping", isActive: false },
      { id: 2, value: "Planing", isActive: false },
      { id: 3, value: "Running", isActive: false },
      { id: 4, value: "Dancing", isActive: false },
    ]
  }
  handleToggle = counter => {
    // this.setState({ isActive: !this.state.todo.isActive });
    const todo = [...this.state.todo];
    const index = todo.indexOf(counter);
    //todo[index] = { ...counter };
    let active = todo[index].isActive;
    todo[index].isActive = !active;
    this.setState({ todo })
  }


  render() {
    //const isActive = this.state.todo.isActive;
    return (
      <React.Fragment>
        <div className="wraper">
          <div className="nav">
            <h1>My ToDo List</h1>
          </div>
          <div className="main">
            {this.state.todo.map(list => (
              <List
                onIcrement={this.handleToggle}
                key={list.id}
                todo={this.state.todo}
                onDelete={this.deleteList}
                list={list}
                handleActive={this.handleActive}
              />
            ))}
            {console.log(this.state)}
            <div>
              <button className="btn btn-lg button" onClick={() => this.addList()}>+ New Task</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }


  addList = () => {
    let newId = Date.now();
    let todo = this.state.todo;
    let result = prompt();
    if (result !== "" && result !== null) {
      todo.push({ id: newId, value: result, isActive: false });
      this.setState({ todo: todo })
    }
  }



  deleteList = (todoId) => {
    const todo = this.state.todo.filter(c => c.id !== todoId);
    this.setState({ todo })
  }
}

export default App;

