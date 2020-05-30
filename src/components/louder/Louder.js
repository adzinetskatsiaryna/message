import React from 'react';

import '../../App.css';
import louder from './louder.gif'

class Louder extends React.Component {

    render = () => {

        return (
            <div className='louder'>
                <img src={louder}/>
            </div>

        )
    }
}

export default Louder;
