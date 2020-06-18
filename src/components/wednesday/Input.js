import React from "react";
import style from './wednes.module.css'
class Input extends React.Component{

    onChangedStyle = (e)=>{
        this.props.onChangedStyle(this.props.id, e.currentTarget.checked)
    };

    render=()=> {

        return (

            <div>
                <input type='radio' name='radio' id={this.props.id} checked={this.props.checked} onChange={this.onChangedStyle} />
                <label htmlFor={this.props.id}>{this.props.name}</label>
            </div>
        );
    }
}
export default Input