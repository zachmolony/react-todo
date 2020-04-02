import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '20px',
            borderBottom: '1px #ccc solid',
            textDecoration: this.props.todo.completed ? 
            'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo
        return (
            <div style={this.getStyle()}>
                <input type="checkbox" onChange={this.props.toggleComplete.bind(this, id)} /> {' '}
                <p>{ title }</p>
                <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>x</button>
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem
