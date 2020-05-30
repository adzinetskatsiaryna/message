import React from 'react';
import '../../App.css';


class TodoListTitle extends React.Component {
    onDeleteTodolist =()=>{
        this.props.deleteTodolist(this.props.id)
    };
    render = () => {
        return (
                <h3 className="todoList-header__title">
                    {this.props.title}
                    <button onClick={this.onDeleteTodolist}>delete</button>
                </h3>
        );
    }
}

export default TodoListTitle;

