import React from 'react';
import classes from './messege.module.css'


const Message = () => {
    return (
        <div className={classes.message}>
            <p className={classes.subject}>Одинец Екатерина</p>
            <p className={classes.content}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit olore eu fugiat nulla pariatur.
            </p>
            <p className={classes.time}>{new Date().toLocaleTimeString( 'ru-RU', {hour: '2-digit', minute: '2-digit'})}
            </p>
        </div>

    );
}
export default Message;