import React from 'react';
import style from './Skills.module.scss';
import styleContainer from '../../common/styles/Container.module.scss';
import {Skill} from "./skill/Skill";
import {Title} from "../../common/components/title/Title";
import css from '../../assets/images/icons/css.png'
import html from '../../assets/images/icons/html.png'
import js from '../../assets/images/icons/js.png'
import react from '../../assets/images/icons/react.png'
import redux from '../../assets/images/icons/redux.png'
import ts from '../../assets/images/icons/typescript.png'
import git from '../../assets/images/icons/git.png'
import github from '../../assets/images/icons/github.png'
import sass from '../../assets/images/icons/sass.png'
import webstorm from '../../assets/images/icons/webstorm.png'
import mui from '../../assets/images/icons/mui.png'

export const Skills = React.memo(() => {
    const skills = [
        {id: 1, title: 'HTML', icon: html},
        {id: 2, title: 'CSS', icon: css},
        {id: 3, title: 'JavaScript', icon: js},
        {id: 4, title: 'TypeScript', icon: ts},
        {id: 5, title: 'React', icon: react},
        {id: 6, title: 'Redux', icon: redux},
        {id: 7, title: 'Git', icon: git},
        {id: 8, title: 'Github', icon: github},
        {id: 9, title: 'WebStorm', icon: webstorm},
        {id: 10, title: 'Sass/Scss', icon: sass},
        {id: 11, title: 'MUI', icon: mui},

    ];

    return (
        <section className={`${styleContainer.block} ${style.skillsBlock}`} id={'skills'}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={'Skills'}/>
                <div className={styleContainer.contentContainer}>
                    {skills.map(skill =>
                        <Skill key={skill.id}
                               title={skill.title}
                               icon={skill.icon}/>
                    )}
                </div>
            </div>
        </section>
    );
})
