import React from 'react';


class Todos extends React.Component {
    render() {
    console.log(this.props.todos)
      return (
        <div className="App">
          <h1>Todos</h1>
        </div>
      )
    }
  }

export default Todos;

