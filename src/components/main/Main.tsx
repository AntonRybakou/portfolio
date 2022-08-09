import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../../common/styles/Container.module.scss';
import photo from '../../assets/images/photo.jpg'
import {ParticlesComp} from "./Particles";


export const Main = React.memo(() => {

    return (
        <div className={`${styleContainer.block} ${style.mainBlock}`} id={'main'}>
            <ParticlesComp/>
            <div className={styleContainer.container}>
                <div className={style.content}>
                    <span>Hello there,</span>
                    <h1>I'm Anton Rybakou</h1>
                    <p>Front-end developer</p>
                </div>
                <div className={style.photo}>
                    <img src={photo} alt={'myPhoto'}/>
                </div>
            </div>
        </div>
    );
})
