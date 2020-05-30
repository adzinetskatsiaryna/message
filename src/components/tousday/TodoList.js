import React from 'react';

import '../../App.css';

import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";
import {connect} from "react-redux";


class TodoList extends React.Component {

    // constructor(props) {
    //     super(props);
    // }
    //
    // saveState = () => {
    //     let stateAsString = JSON.stringify(this.state);
    //     localStorage.setItem("state" + this.props.id, stateAsString)
    // };
    //
    // restoreState = () => {
    //     let stateAsString = localStorage.getItem("state"+this.props.id);
    //     if (stateAsString) {
    //         let state = JSON.parse(stateAsString);
    //         state.tasks.forEach((t) => {
    //             if (t.id >= this.newTaskId) {
    //                 this.newTaskId = t.id + 1
    //             }
    //         });
    //         this.setState(state)
    //     }
    // };
    //
    // componentDidMount() {
    //     this.restoreState()
    // }

    state = {
        // tasks: [
        //     // { id: 0, title: 'HTML', isDone: true, priority: ['low', 'hight', 'midl']},
        //     // { id: 1, title: 'Css', isDone: false, priority: 'hight'},
        //     // { id: 2, title: 'JS', isDone: true, priority: 'hight'},
        //     // { id:3, title: 'React', isDone: false, priority:'low'},
        // ],
        filterValue:'All'
    };


    // newTaskId = 0;
    addTask = (newText)=>{
        // let newTask = {
        //         id: this.newTaskId,
        //         title: newText,
        //         isDone: false,
        //         priority: 'low',
        //         created: new Date().toLocaleString(),
        //         updated: '',
        //         finished: '',
        //     }

        // ;
        // this.newTaskId++
        // let newTasks = [...this.state.tasks, newTask];
        // this.setState({
        //     tasks: newTasks
        // }, this.saveState);
        this.props.addTask(this.props.id, newText)
    };

    changeFilter = (newFilterValue)=>{
        this.setState({
            filterValue: newFilterValue
        })
    };


    changeStatus = (isDone, taskId)=>{
        // let tasksCopy = this.state.tasks.map((t)=>{
        //     if (t.id===taskId){
        //         return {...t, isDone: isDone, finished: new Date().toLocaleString()}
        //     }
        //     return t
        // });
        // this.setState({
        //     tasks: tasksCopy
        // })
        this.props.chengeStatus(this.props.id, isDone, taskId)
    };

    changesTitle = (title, taskId)=>{
        // let tasksCopy = this.state.tasks.map((t)=>{
        //     if (t.id===taskId){
        //         return {...t, title: title, update: new Date().toLocaleString()}
        //     }
        //     return t
        // });
        // this.setState({
        //     tasks: tasksCopy
        // })
        this.props.changesTitle(this.props.id, title, taskId)
    };

    changesPriority = (status, taskId)=>{
        // let tasksNew = this.state.tasks.map((t)=>{
        //     if(t.id===taskId){
        //         return {...t, priority: status, update: new Date().toLocaleString()}
        //     } else {
        //         return t
        //     }
        // });
        // this.setState({tasks: tasksNew}, ()=> {
        //   this.saveState()
        // })
        this.props.changesPriority(this.props.id, status,taskId)
    };

    deleteTask = (taskId)=>{
        // let tasks = this.state.tasks.filter((t)=>{
        //     return t.id !== taskId
        // });
        // this.setState({tasks})
        this.props.deleteTask(this.props.id, taskId)
    };

    render = () => {

        return (
                <div className="todoList">
                    <TodoListHeader
                        deleteTodolist = {this.props.deleteTodolist}
                        id = {this.props.id}
                        addTask={this.addTask}
                        title = {this.props.title}
                    />
                    <TodoListTasks
                        changesPriority ={this.changesPriority}
                        deleteTask = {this.deleteTask}
                        changeStatus = {this.changeStatus}
                        changesTitle ={this.changesTitle}
                        tasks={this.props.tasks.filter((t)=>{
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

const mapDispatchToProps = (dispatch) => {
    return {
        addTask (todolistId, newText) {
            const action = {
            type: "ADD_TASK",
            todolistId: todolistId,
            title: newText,
            };
            dispatch(action)
        },

        chengeStatus (todolistId, isDone, taskId){
            const action={
                type: "CHENGE_STATUS",
                todolistId: todolistId,
                isDone: isDone,
                taskId: taskId,
            };
            dispatch(action)
        },

        changesTitle (todolistId, title, taskId){
            const action={
                type: "CHANGE_TYTLE",
                todolistId: todolistId,
                title: title,
                taskId: taskId
            };
            dispatch(action)
        },

        changesPriority(todolistId, status, taskId){
            const action={
                type: "CHANGE_PRIORITY",
                todolistId: todolistId,
                priority: status,
                taskId: taskId,
            };
            dispatch(action)
        },

        deleteTask(todolistId, taskId){
            const action={
                type: "DELETE_TASK",
                todolistId: todolistId,
                taskId: taskId,
            };
            dispatch(action)
        }
    }

};


const ConnectedTodoList = connect(null, mapDispatchToProps)(TodoList);
export default ConnectedTodoList;
