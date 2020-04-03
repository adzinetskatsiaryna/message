import React from 'react';
import photo from './photo.png'
import classes from './avatar.module.css'

const Avatar = () =>{
    return (
        <div className={classes.avatar}><img src={photo}  alt="avatar"/></div>
    )
}
export default Avatar;