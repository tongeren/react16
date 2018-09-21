import React from 'react';
import classes from './Course.css';

const course = (props) => {
    console.log(props)

    return (
        <article 
            className={classes.Course}
            onClick={props.clicked}
            key={props.id}>
            {props.title}
        </article>
    );
}

export default course;