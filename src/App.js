import React from 'react';
import './App.css';
import Todos from './components/Todos'




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
    render() {
      console.log(this.state.todos)
      return (
        <div className="App">
          <Todos />
        </div>
      )
    }
  }



export default App;
