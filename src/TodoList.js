import React from 'react';

import './App.css';

import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";


class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }

    saveState = () => {
        let stateAsString = JSON.stringify(this.state);
        localStorage.setItem("state" + this.props.id, stateAsString)
    };

    restoreState = () => {
        let stateAsString = localStorage.getItem("state"+this.props.id);
        if (stateAsString) {
            let state = JSON.parse(stateAsString);
            state.tasks.forEach((t) => {
                if (t.id >= this.newTaskId) {
                    this.newTaskId = t.id + 1
                }
            });
            this.setState(state)
        }
    };

    componentDidMount() {
        this.restoreState()
    }

    state = {
        tasks: [
            // { id: 0, title: 'HTML', isDone: true, priority: ['low', 'hight', 'midl']},
            // { id: 1, title: 'Css', isDone: false, priority: 'hight'},
            // { id: 2, title: 'JS', isDone: true, priority: 'hight'},
            // { id:3, title: 'React', isDone: false, priority:'low'},
        ],
        filterValue:'All'
    };


    newTaskId = 0;
    addTask = (newText)=>{
        let newTask = {
            id: this.newTaskId,
            title: newText,
            isDone: false,
            priority: 'low',
        };
        this.newTaskId++
        let newTasks = [...this.state.tasks, newTask];
        this.setState({
            tasks: newTasks
        }, this.saveState);

    };

    changeFilter = (newFilterValue)=>{
        this.setState({
            filterValue: newFilterValue
        })
    };

    changeStatus = (isDone, taskId)=>{
        let tasksCopy = this.state.tasks.map((t)=>{
            if (t.id===taskId){
                return {...t, isDone: isDone}
            }
            return t
        });
        this.setState({
            tasks: tasksCopy
        })
    };

    changesTitle = (title, taskId)=>{
        let tasksCopy = this.state.tasks.map((t)=>{
            if (t.id===taskId){
                return {...t, title: title}
            }
            return t
        });
        this.setState({
            tasks: tasksCopy
        })
    };

    changesPriority = (status, taskId)=>{
        let tasksNew = this.state.tasks.map((t)=>{
            if(t.id===taskId){
                return {...t, priority: status}
            } else {
                return t
            }
        });
        this.setState({tasks: tasksNew}, ()=> {
          this.saveState()
        })

    };

    deleteTask = (taskId)=>{
        let tasks = this.state.tasks.filter((t)=>{
            return t.id !== taskId
        });
        this.setState({tasks})
    };


    render = () => {

        return (
                <div className="todoList">
                    <TodoListHeader
                        addTask={this.addTask}
                        title = {this.props.title}
                    />
                    <TodoListTasks
                        changesPriority ={this.changesPriority}
                        deleteTask = {this.deleteTask}
                        changeStatus = {this.changeStatus}
                        changesTitle ={this.changesTitle}
                        tasks={this.state.tasks.filter((t)=>{
                                if(this.state.filterValue==='All'){
                                    return true
                                }
                                if(this.state.filterValue==='Completed'){
                                    if(t.isDone===true){
                                        return true
                                    }else{
                                        return false
                                    }
                                }
                                if(this.state.filterValue==='Active'){
                                    if(t.isDone===true){
                                        return false
                                    }else {
                                        return true
                                    }
                                }
                            }
                        )} />
                    <TodoListFooter changeFilter = {this.changeFilter} filterValue={this.state.filterValue} />
                </div>
        );
    }
}

export default TodoList;
