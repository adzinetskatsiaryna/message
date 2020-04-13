import React from 'react';
import classes from './messege.module.css'


const Message = (props) => {

        let spanQualities = props.quality.map(q => {
            return <span key={q.id} className={q.type ? classes.activeClass : ''}> {q.title + ' / '}</span>
        });

    return (
        <div className={classes.message}>
            <p className={classes.subject}>Одинец Екатерина</p>
            <p className={classes.content}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit olore eu fugiat nulla pariatur. lorem jdfhakjsfn jfdskhlwjdskv vdjasbvkja.bg.aefd dnsmabvajk.dfakj kdjsbgvkajsdbvaedflkjbekaerj.bv fjkbhkjaseaq fbgdskjlfb
            </p>
            <div className={classes.quality}>{spanQualities}</div>
            <p className={classes.time}>{new Date().toLocaleTimeString( 'ru-RU', {hour: '2-digit', minute: '2-digit'})}
            </p>
        </div>

    );
}
export default Message;