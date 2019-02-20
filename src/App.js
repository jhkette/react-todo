import React, { Component } from 'react';
import './App.css';
import Todos from  './components/Todos';


class App extends Component {

  state = {
    todos: [
      { id: 1,
        title: 'Take out the trash',
        completed: false
      },
      { id: 2,
        title: 'and another thing',
        completed: false
      },
      { id: 3,
        title: 'another thing',
        completed: false
      }
    ]
  }
  // toggle complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }
  //delete to do

  delToDo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }
  


  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete = {this.markComplete}
        delToDo = {this.delToDo}/>
      </div>
    );
  }
}

export default App;
