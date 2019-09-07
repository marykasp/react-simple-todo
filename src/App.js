import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/layout/Header';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import uuid from 'uuid';




  class App extends React.Component {
    state = {
      todos: [
        {
          id: uuid.v4(),
          title: 'Take out the trash',
          completed: false
        },
        {
          id: uuid.v4(),
          title: 'Dinner with spouse',
          completed: false
        },
        {
          id: uuid.v4(),
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
          id: uuid.v4(),
          title: title,
          completed: false
        }
        // spread operator makes a copy
        this.setState({todos: [...this.state.todos, newTodo]})
    }

    render() {
      // console.log(this.state.todos)
      return (
        <Router>
          <div className="App">
            <div className="container">
                <Header />
                <Route exact path="/" render={props => (
                  <React.Fragment>
                    <AddTodo addTodo={this.addTodo}/>
                    <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
                  </React.Fragment>
                )} />    
                <Route path="/about" component={About} />
            </div>
          </div>
        </Router>
      )
    }
  }



export default App;
