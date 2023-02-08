import React from 'react';
import style from './Header.module.scss';
import {Nav} from './nav/Nav';

export const Header = React.memo(() => {
    return (
        <header className={style.header} id={'nav'}>
            <Nav/>
        </header>
    );
})
