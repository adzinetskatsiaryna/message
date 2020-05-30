import React from 'react';

import '../../App.css';


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
