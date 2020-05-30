import React from 'react';

import '../../App.css';
import {NavLink} from "react-router-dom";

class Menu extends React.Component {
    state = {
        isMenuOpen: false,
};
    onMenuButtonClick = () => {
        this.setState({isMenuOpen: !this.state.isMenuOpen})
    };

    render = () => {
        let classAdd = this.state.isMenuOpen ? "show" : "nav";
        return (
            <div className='menu'>
                <div className='menu-button' onClick={this.onMenuButtonClick}>
                    <i className="fas fa-bars"></i>
                </div>
                <nav className={`nav + ${classAdd}`}>
                    <div onClick={this.onMenuButtonClick} className='menu-close'>
                        <i className="fas fa-times"></i>
                    </div>
                    <ul className='menu-items'>
                        <li className='menu-list'>
                            <NavLink exact to='/'  activeClassName='active' className='menu-link'>Monday</NavLink>
                        </li>
                        <li className='menu-list'>
                            <NavLink to='/Tuesday'  activeClassName='active' className='menu-link'>Truesday</NavLink>
                        </li>
                        <li className='menu-list'>
                            <NavLink to='/Wednesday'  activeClassName='active' className='menu-link'>Wednesday</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        )

    }
}



export default Menu;
