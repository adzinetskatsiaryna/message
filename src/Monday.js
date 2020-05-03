import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddName from "./AddName";
import Names from "./Names";


class Monday extends React.Component {



    render = () => {

        return (
            <div>
                <AddName addName={this.props.addName} counter={this.props.counter}/>
                <Names names={this.props.names} />
            </div>
        )

    }
}


//
export default Monday;
