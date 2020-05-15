import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoListTask from "./TodoListTask";


class TodoListTasks extends React.Component {


    render = () => {

        let tasksElemrnts = this.props.tasks.map((task)=>{
            return(
                <TodoListTask
                    key = {task.id}
                    task = {task}
                    changeStatus={this.props.changeStatus}
                    changesTitle={this.props.changesTitle}
                    deleteTask={this.props.deleteTask}
                    changesPriority = {this.props.changesPriority}
                />
            )
        });

        return (
            <div className="todoList-tasks">
                {tasksElemrnts}
                {/*<TodoListTask  title = {this.props.tasks[1].title} isDone={this.props.tasks[1].isDone} />*/}
                {/*<TodoListTask  title = {this.props.tasks[2].title} isDone={this.props.tasks[2].isDone} />*/}
                {/*<TodoListTask  title = {this.props.tasks[3].title} isDone={this.props.tasks[3].isDone} />*/}
            </div>

        );
    }
}

export default TodoListTasks;


