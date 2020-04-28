import React from 'react';
import logo from './logo.svg';
import './App.css';
import Avatar from "./components/avatar/avatar";
import Messege from "./components/messege/messege"
import Nik from "./components/nik/nik";

class Button extends React.Component {
    newCounterRef = React.createRef();
    onAddNewName = () => {
        let newAddName = this.newCounterRef.current.value;
        this.newCounterRef.current.value = '';
        this.props.addName(newAddName)
    }


    render = () => {

        return (
            <div>
                <input type='text'  placeholder='add name' ref = {this.newCounterRef} />
                <button onClick={this.onAddNewName}>click me</button>
            </div>
        )

    }
}


//
export default Button;
