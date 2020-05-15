import React from 'react';

import './App.css';

import TodoList from "./TodoList";
import AddNewItemForm from "./AddNewItemForm";


class Tuesday extends React.Component {

    saveState = ()=>{
        let stateAsString = JSON.stringify(this.state);
        localStorage.setItem("todolists"+this.props.id,  stateAsString);
    };

    restoresState = ()=>{
        let state = {
            todolists: [],

        };
        let stateAsString= localStorage.getItem("todolists" + this.props.id);
        if(stateAsString){
            state = JSON.parse(stateAsString);
        }

        this.setState(state, ()=>{
            this.state.todolists.forEach(t=>{
                if(t.id>=this.newTodoListId){
                    this.newTodoListId = t.id + 1
                }
                this.setState({state})
            })
        });
    };

    componentDidMount() {
        this.restoresState()
    };

    state = {
        todolists: [
            {id: 10, title: 'days'},
            {id: 11, title: 'week'}
            ]
    };

    newTodoListId = 0;
    addTodoList = (newText)=>{
        let newTodoList = {
            id: this.newTodoListId,
            title: newText,
        };
        this.newTodoListId++;
        let newTodoLists = [...this.state.todolists, newTodoList];
        this.setState({
            todolists: newTodoLists
        }, this.saveState);
    };


    render = () => {
        let todolists = this.state.todolists.map((t)=>{
          return (
              <TodoList id = {t.id} key = {t.id} title = {t.title} />)
        });

        return (
            <div className='tuesday'>
                <AddNewItemForm addItem = {this.addTodoList} />
                    {todolists}
            </div>
        );
    }
}

export default Tuesday;
