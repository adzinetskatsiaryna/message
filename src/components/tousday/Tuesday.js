import React from 'react';

import '../../App.css';

import TodoList from "./TodoList";
import AddNewItemForm from "./AddNewItemForm";
import {connect} from "react-redux";


class Tuesday extends React.Component {

    // saveState = ()=>{
    //     let stateAsString = JSON.stringify(this.state);
    //     localStorage.setItem("todolists"+this.props.id,  stateAsString);
    // };
    //
    // restoresState = ()=>{
    //     let state = {
    //         todolists: [],
    //
    //     };
    //     let stateAsString= localStorage.getItem("todolists" + this.props.id);
    //     if(stateAsString){
    //         state = JSON.parse(stateAsString);
    //     }
    //
    //     this.setState(state, ()=>{
    //         this.state.todolists.forEach(t=>{
    //             if(t.id>=this.newTodoListId){
    //                 this.newTodoListId = t.id + 1
    //             }
    //             this.setState({state})
    //         })
    //     });
    // };
    //
    // componentDidMount() {
    //     this.restoresState()
    // };

    // state = {
    //     todolists: [
    //         {id: 10, title: 'days'},
    //         {id: 11, title: 'week'}
    //         ]
    // };

    // newTodoListId = 0;
    addTodoList = (newText)=>{
        // let newTodoList = {
        //     id: this.newTodoListId,
        //     title: newText,
        // };
        // this.newTodoListId++;
        // let newTodoLists = [...this.state.todolists, newTodoList];
        this.props.addTodolis(newText)
        // this.setState({
        //     todolists: newTodoLists
        // }, this.saveState);
    };

    deleteTodolist = (todolistId)=>{
        this.props.deleteTodolist(todolistId)
    };

    render = () => {
        let todolists = this.props.todolists.map((tl)=>{
          return (
              <TodoList
                  id = {tl.id}
                  key = {tl.id}
                  title = {tl.title}
                  deleteTodolist={this.deleteTodolist}
                  tasks={tl.tasks}
              />)
        });

        return (
            <div className='tuesday'>
                <AddNewItemForm addItem = {this.addTodoList} />

                    {todolists}

            </div>
        );
    }
}



const mapStateToProps = (state) => {
    return {
        todolists: state.tuesdayPage.todolists
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodolis: (newText) => {
            const action = {
                type: "ADD_TODOLIST",
                title: newText
            };
            dispatch(action)
        },
        deleteTodolist: (todolistId) => {
            const action = {
                type: "DELETE_TODOLIST",
                todolistId: todolistId,
            };
            dispatch(action)
        }

    }

};

const ConnectedTuesday = connect(mapStateToProps,mapDispatchToProps)(Tuesday);
export default ConnectedTuesday;



