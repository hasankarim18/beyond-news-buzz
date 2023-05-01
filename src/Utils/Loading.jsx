import React from 'react';
import classes from './Loading.module.css'

const Loading = () => {
    return (
        <div className={classes.spinner_container}>
            <h1 style={{fontSize:"80px"}} >L<span className={classes.loading}></span>ading....</h1>
        </div>
    );
};

export default Loading;