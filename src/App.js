import React from 'react';
import Header from './components/layout/Header';
import './App.css';
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'




  class App extends React.Component {
    state = {
      todos: [
        {
          id: 1,
          title: 'Take out the trash',
          completed: false
        },
        {
          id: 2,
          title: 'Dinner with spouse',
          completed: false
        },
        {
          id: 3,
          title: 'Meeting with boss',
          completed: false
        }
      ]
    }

    // Toggle Complete
    markComplete = (id) => {
      this.setState({ todos: this.state.todos.map((todo) => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      }) });
    }

    // Delete Todo- user filter method, loops through and based on condition will return another array- return an array of ids that are not passed in
    // [...]- spread operator, copies everything there in that key
    delTodo = (id) => {
      this.setState({ todos: [...this.state.todos.filter(todo => 
        todo.id !== id)] });
    }

    // Add Todo
    addTodo = (title) => {
        const newTodo = {
          id: 4,
          title: title,
          completed: false
        }
        // spread operator makes a copy
        this.setState({todos: [...this.state.todos, newTodo]})
    }

    render() {
      // console.log(this.state.todos)
      return (
        <div className="App">
          <div className="container">
              <Header />
              <AddTodo addTodo={this.addTodo}/>
              <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
          </div>
        </div>
      )
    }
  }



export default App;
