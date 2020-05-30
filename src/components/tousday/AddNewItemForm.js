import React from 'react';

import '../../App.css';


class AddNewItemForm extends React.Component {
    state = {
        error: false,
        title: ' '
    };

    onAddItemButtonClick=()=>{
        let newText = this.state.title

        if(newText != '') {
            this.props.addItem(newText);
            this.setState({error: false, title: ''})

        } else {
            this.setState({error:true})
        }
    };
    onKeyPress = (e)=>{
        if(e.key === 'Enter'){
            this.onAddItemButtonClick()
        }
    };
    onTitleCenged = (e)=>{
        this.setState({error: false,
            title: e.currentTarget.value,
        })
    };
    render = () => {
        let addClassError = this.state.error === true ? 'error' : '';
        return (

                <div className="todoList-newTaskForm">
                    <input
                        className={addClassError}
                        type="text" placeholder="New task name"
                        onKeyPress={this.onKeyPress}
                        value={this.state.title}
                        onChange={this.onTitleCenged}
                    />
                    <button onClick={this.onAddItemButtonClick}>Add</button>
                </div>
        );
    }
}

export default AddNewItemForm;

