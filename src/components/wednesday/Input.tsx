import React, {ChangeEvent} from "react";

type PropsType = {
    id: string
    name: string
    checked: boolean
    onChangedStyle : (id: string, status: boolean)=> void
}

class Input extends React.Component<PropsType>{

    onChangedStyle = (e: ChangeEvent<HTMLInputElement>)=>{
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