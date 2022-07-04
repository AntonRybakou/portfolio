import React from 'react';
import style from './Main.module.css';
import styleContainer from '../../common/styles/Container.module.css';

export const Main = React.memo(() => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.content}>
                    <span>Hi there</span>
                    <h1>I'm Anton Rybakou</h1>
                    <p>front-end developer</p>
                </div>
                <div className={style.photo}></div>
            </div>


        </div>
    );
})
