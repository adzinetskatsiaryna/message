import React from 'react';
import logo from './logo.svg';
import './App.css';


class Name extends React.Component {



    render = () => {

        return (
            <div>
                <span>{this.props.name}</span>
            </div>
        )

    }
}


//
export default Name;
