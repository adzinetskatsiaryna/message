import React from 'react';
import logo from './logo.svg';
import './App.css';


class TodoListTask extends React.Component {

    state = {
        editMod: false,
        // priority: ['hight', 'midl', 'low'],
        onShow: false,
    };

    activatedOnShow = ()=>{
        this.setState({onShow: true})
    };

    deactivatedOnShow = ()=>{
        this.setState({onShow: false})
    };

    activatedEditMod = ()=>{
        this.setState({editMod: true})
    };

    deactivatedEditMod = ()=>{
        this.setState({editMod: false})
    };

    onIsDoneChanget = (e)=>{
        this.props.changeStatus(e.currentTarget.checked, this.props.task.id);
    };

    onTitleChanged = (e)=>{
        this.props.changesTitle(e.currentTarget.value, this.props.task.id)
    };

    onDeleteTask = ()=>{
        this.props.deleteTask(this.props.task.id)
    };

    onPriorityChanged = (e)=>{
        this.props.changesPriority(e.currentTarget.value, this.props.task.id);

    };


    render = () => {
        let priority = [{id: 0, priority: 'high'}, {id: 1, priority: 'medium'}, {id: 2, priority: 'low'}];

        let option = priority.map(p => <option key={p.id} value={p.priority}> {p.priority} </option>);

        let classIsDoneClass = this.props.task.isDone ? "todoList-task done" : "todoList-task";
        return (
            <div>
                <div className={classIsDoneClass} onMouseOver={this.activatedOnShow}
                     onMouseOut={this.deactivatedOnShow}>
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
                    <span> priority:
                        <select onChange={this.onPriorityChanged} value={this.props.task.priority}>
                            {option}
                            {/*<option value={this.state.priority[0]}>{this.state.priority[0]}</option>*/}
                            {/*<option value={this.state.priority[1]}>{this.state.priority[1]}</option>*/}
                            {/*<option value={this.state.priority[2]}>{this.state.priority[2]}</option>*/}
                        </select>
                        {this.props.task.priority}
                    </span>
                    <span onClick={this.onDeleteTask}> <i className="fas fa-times"></i></span>
                    {this.state.onShow === true ? <div className='status'>
                        <p>task {this.props.task.title}</p>
                        <span>created: {this.props.task.created} </span>
                        <span>updated: {this.props.task.update} </span>
                        <span>finished: {this.props.task.finished} </span>
                    </div> : null}
                </div>
            </div>
        );
    }
}

export default TodoListTask;

