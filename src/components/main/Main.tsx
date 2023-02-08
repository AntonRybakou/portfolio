import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../../common/styles/Container.module.scss';
import CV from '../../assets/files/CV.pdf';
import photo from '../../assets/images/photo.jpg'
import {ParticlesComp} from "./ParticlesComp";

export const Main = React.memo(() => {
    return (
        <main className={`${styleContainer.block} ${style.mainBlock}`} id={'main'}>
            <ParticlesComp/>
            <div className={styleContainer.container}>
                <div className={style.content}>
                    <span>Hello there,</span>
                    <h1>I'm Anton Rybakou</h1>
                    <p>Front-end developer</p>
                    <a href={CV} target='_blank' rel={'noreferrer'}
                       download={'Anton Rybakou CV.pdf'}>
                        Download my CV
                    </a>
                </div>
                <div className={style.photo}>
                    <img src={photo} alt={'myPhoto'}/>
                </div>
            </div>
        </main>
    );
})
