import React, {
  Component
} from 'react';
import Todo from './components/Todo';
import Addtodo from './components/Addtodo';
import Header from './components/Header';
import axios from 'axios';


import './App.css';

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({
        todos: res.data
      }))
  }

  //toggle complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }

  // Delete Todo
  deleteTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      }));
  }

  // Add Todo
  Addtodo = (
    title
  ) => {
    axios.post("https://jsonplaceholder.typicode.com/todos?", {
        title,
        completed: false
      })
      .then(res => this.setState({
        todos: [...this.state.todos, res.data]
      }));
  }

  render() {
    return ( <
      div className = "App" >
      <
      div className = "container" >
      <
      Header / >
      <
      Addtodo Addtodo = {
        this.Addtodo
      }
      / > <
      Todo todos = {
        this.state.todos
      }
      markComplete = {
        this.markComplete
      }
      deleteTodo = {
        this.deleteTodo
      }
      / > < /div > < /div >
    );
  }
}

export default App;