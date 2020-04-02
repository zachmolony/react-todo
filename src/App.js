import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/Layout/Header'
import About from './components/pages/About'
import './App.css';

class App extends React.Component {
  state = {
    todos: [
          {
              id: 1,
              title: "Learn React",
              completed: false
          },
          {
              id: 2,
              title: "Learn React",
              completed: false
          },
          {
              id: 3,
              title: "Learn React",
              completed: false
          }
      ]
  }

  toggleComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })});
  }

  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos].filter(todo => 
        todo.id !== id
      )}
  )}

  addTodo = (title) => {
    const newTodo = {
      id: [...this.state.todos].length += 1,
      title,
      completed: false 
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} delTodo={this.delTodo} />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
