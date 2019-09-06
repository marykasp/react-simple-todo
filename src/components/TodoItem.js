import React from 'react';
import PropTypes from 'prop-types';


class TodoItem extends React.Component {
    getStyle = () => {
       return {
           background: '#f4f4f4',
           padding: '10px',
           borderBottom: '1px #ccc dotted',
           textDecoration: this.props.todo.completed ? 'line-through' : 'none'
       }
    }

    render() {
        // console.log(this.props.todo)
      return (
          <div style={this.getStyle()}>
            <p>{ this.props.todo.title }</p>
          </div>
      )
    }
  }

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

// style inside variables or inside a function
// const itemStyle = {
//     backgroundColor: '#f4f4f4'
// }

export default TodoItem;