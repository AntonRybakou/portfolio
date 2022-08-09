import React from 'react';
import style from './Nav.module.css';
import {Link} from 'react-scroll';
import CV from '../../../assets/files/CV.pdf'

export const Nav = React.memo(() => {
    return (
        <nav className={style.nav}>
            <Link to='main' spy={true} smooth={true} offset={-70} duration={500}>
                Main
            </Link>

            <Link to='skills' spy={true} smooth={true} offset={-70} duration={500}>
                Skills
            </Link>

            <Link to='projects' spy={true} smooth={true} offset={-70} duration={500}>
                Projects
            </Link>

            <Link to='contacts' spy={true} smooth={true} offset={-70} duration={500}>
                Contacts
            </Link>

            <a href={CV} target='_blank' rel={'noreferrer'} download={'Anton Rybakou CV.pdf'}>
                Resume
            </a>
        </nav>
    )
})
