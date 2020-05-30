import React from 'react';
import '../../App.css';

class Input extends React.Component {

    render = () => {

        return (
            <div>

                <input
                    type='text'
                    className={this.props.className}
                    placeholder='add name'
                    //ref = {this.newCounterRef}
                    onKeyPress={this.props.onKeyPress}
                    onChange={this.props.onChange}
                    value={this.props.value}
                />

            </div>
        )

    }
}


//
export default Input;
