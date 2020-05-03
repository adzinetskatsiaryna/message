import React from 'react';
import logo from './logo.svg';
import './App.css';
import Name from "./Name";
import classes from "./names.module.css"


class Names extends React.Component {



    render = () => {

     let Names = this.props.names.map((name)=>{
            return(
                <Name name={name.name}/>
            )
        });
        return (
            <div className={classes.names}>
                {Names}
            </div>
        )

    }
}


//
export default Names;
