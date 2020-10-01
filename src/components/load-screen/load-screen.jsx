import React from 'react';
import style from './load-screen.module.css';


const LoadScreen = () => {

    return (
        <div className={style.gooey}>
        <span className={style.dot}></span>
        <div className={style.dots}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        </div>
    )
}

export default LoadScreen;