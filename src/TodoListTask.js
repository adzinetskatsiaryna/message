import React from 'react';
import logo from './logo.svg';
import './App.css';


class TodoListTask extends React.Component {

    state = {
        editMod: false,
        priority: ['hight', 'midl', 'low']
    };

    activatedEditMod = ()=>{
        this.setState({editMod: true})
    };

    deactivatedEditMod = ()=>{
        this.setState({editMod: false})
    };

    onIsDoneChanget = (e)=>{
        this.props.changeStatus(e.currentTarget.checked, this.props.task.id)
    };

    onTitleChanged = (e)=>{
        this.props.changesTitle(e.currentTarget.value, this.props.task.id)
    };

    onDeleteTask = ()=>{
        this.props.deleteTask(this.props.task.id)
    };

    onPriorityChanged = (e)=>{
        debugger
        this.props.changesPriority(e.currentTarget.value, this.props.task.id);
        // this.setState({priority: e.currentTarget.value})
    };

    render = () => {
        let classIsDoneClass = this.props.task.isDone ? "todoList-task done" : "todoList-task";
        return (
            <div className={classIsDoneClass}>
                <input
                    type="checkbox"
                    checked={this.props.task.isDone}
                    onChange={this.onIsDoneChanget}
                />
                {this.state.editMod
                    ? <input
                        value={this.props.task.title}
                        autoFocus={true}
                        onBlur={this.deactivatedEditMod}
                        onChange={this.onTitleChanged}
                    />
                    : <span onClick={this.activatedEditMod}>
                    {this.props.task.id}, {this.props.task.title},</span>}
                    <span > priority:
                        <select onChange={this.onPriorityChanged} value={this.props.task.priority}>
                            <option value={this.state.priority[0]} >{this.state.priority[0]}</option>
                            <option value={this.state.priority[1]} >{this.state.priority[1]}</option>
                            <option value={this.state.priority[2]}>{this.state.priority[2]}</option>
                        </select>
                        {this.props.task.priority}
                    </span>
                <span onClick={this.onDeleteTask}> <i className="fas fa-times"></i></span>
            </div>
        );
    }
}

export default TodoListTask;

