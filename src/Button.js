import React from 'react';

import './App.css';
import Input from "./Input";
import classes from './button.module.css'



class Button extends React.Component {
    state={
       error: false,
        title: ''
}
    //newCounterRef = React.createRef();
    onAddNewName = () => {
        let newAddName = this.state.title; //this.newCounterRef.current.value
                                            //this.newCounterRef.current.value = '';

        if(newAddName != '') {
            this.props.addName(newAddName);
            this.setState({error: false,
                           title: '',
            });
        }else {
            this.setState({error: true})
        }
    };
    onKeypress = (e)=>{
        if(e.key === 'Enter'){
            this.onAddNewName()
        }
    };
    onCenged = (e)=>{
        this.setState({title: e.currentTarget.value,
                        error:false,
        })
    }
    render = () => {
        let errorClass = this.state.error === true ? 'error' : "";
        return (
            <div className={classes.button}>
                <Input className = {errorClass}
                       onKeyPress={this.onKeypress}
                       onChange={this.onCenged}
                       value={this.state.title}
                />
                {/*<input*/}
                {/*    className={errorClass}*/}
                {/*    type='text'*/}
                {/*    placeholder='add name'*/}
                {/*    //ref = {this.newCounterRef}*/}
                {/*    onKeyPress={this.onKeypress}*/}
                {/*    onChange={this.onCenged}*/}
                {/*    value={this.state.title}*/}
                {/*/>*/}
                <button onClick={this.onAddNewName}>click me</button>
            </div>
        )

    }
}


//
export default Button;
