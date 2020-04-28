import React from 'react';
import logo from './logo.svg';
import './App.css';
import Avatar from "./components/avatar/avatar";
import Messege from "./components/messege/messege"
import Nik from "./components/nik/nik";

class Text extends React.Component {



    render = () => {

        return (
            <div>
                <span className='counter'>{this.props.counter}</span>
            </div>

        )

    }
}


//
export default Text;
