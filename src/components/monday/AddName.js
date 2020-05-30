import React from 'react';
import '../../App.css';
import Text from "./Text";
import Button from "./Button";
import classes from "./addName.module.css"


class AddName extends React.Component {



    render = () => {

        return (
            <div className={classes.addName}>
                <Text counter={this.props.counter}/>
                <Button addName={this.props.addName} />
            </div>
        )

    }




}


//
export default AddName;
