import React from 'react';

import '../../App.css';
import TodoListTitle from "./TodoListTitle";
import AddNewItemForm from "./AddNewItemForm";


class TodoListHeader extends React.Component {
    render = () => {
        return (
            <div className="todoList-header">
                <TodoListTitle
                    title={this.props.title}
                    id = {this.props.id}
                    deleteTodolist = {this.props.deleteTodolist}
                />
                <AddNewItemForm addItem={this.props.addTask}/>
            </div>
        );
    }
}

export default TodoListHeader;

