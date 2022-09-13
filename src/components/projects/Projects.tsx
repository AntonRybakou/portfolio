import React from 'react';
import style from './Projects.module.scss';
import styleContainer from '../../common/styles/Container.module.scss';
import { Project } from './project/Project';
import { Title } from '../../common/components/title/Title';
import counterImage from '../../assets/images/projects/counter.png';
import todoImage from '../../assets/images/projects/todolist.png';
import socialImage from '../../assets/images/projects/social-network.png';
import cardsImage from '../../assets/images/projects/cards.png';

export const Projects = React.memo(() => {
  const projects = [
    {
      id: 1,
      title: 'Learning cards',
      description: 'Team work / GitHub / TypeScript / React / Redux-Toolkit / Formik / React-router-dom / Material-ui / Deploy (In progress)',
      url: 'https://alexnewhere.github.io/friday-project/',
      style: {
        backgroundImage: `url(${cardsImage})`,
      },
    },
    {
      id: 2,
      title: 'Social network',
      description: 'TypeScript / React / MUI / Storybook / Redux / Redux-Thunk / Axios / Formik / React-router-dom / Unit tests / Deploy (In progress)',
      url: 'https://github.com/ToshaBY/it-incubator-samurai-way',
      style: {
        backgroundImage: `url(${socialImage})`,
      },
    },
    {
      id: 3,
      title: 'To-Do List',
      description: 'TypeScript / React / MUI / Storybook / Redux / Redux-Thunk / Axios / Formik / React-router-dom / Unit tests / Deploy',
      url: 'https://toshaby.github.io/todo-list/',
      style: {
        backgroundImage: `url(${todoImage})`,
      },
    },
    {
      id: 4,
      title: 'Counter',
      description: 'TypeScript / React / Redux',
      url: 'https://toshaby.github.io/counter/',
      style: {
        backgroundImage: `url(${counterImage})`,
      },
    },
    {
      id: 5,
      title: 'Friend\'s portfolio',
      description: 'React / React-router / MUI / emailjs',
      url: 'https://arhifranki.github.io/portfolio',
      style: {
        backgroundImage: `url(${socialImage})`,
      },
    },
  ];

  return (
    <div className={`${styleContainer.block} ${style.projectsBlock}`} id={'projects'}>
      <div className={`${styleContainer.container} ${style.projectsContainer}`}>
        <Title title='Projects' />

        <div className={styleContainer.contentContainer}>
          {
            projects.map(el => {
              return (
                <Project key={el.id}
                         title={el.title}
                         description={el.description}
                         url={el.url}
                         style={el.style} />
              );
            })
          }
        </div>
      </div>
    </div>
  );
});
