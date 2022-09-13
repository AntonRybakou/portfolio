import React from 'react';
import style from './Footer.module.scss';
import styleContainer from '../../common/styles/Container.module.scss';
import { Title } from '../../common/components/title/Title';
import { faGithub, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { SocialItem } from './socialItem/SocialItem';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


export const Footer = React.memo(() => {
  const socialLinks = [
    { id: 1, icon: faGithub, link: 'https://github.com/ToshaBY' },
    { id: 2, icon: faLinkedin, link: 'https://www.linkedin.com/in/antonrybakov/' },
    { id: 3, icon: faTelegram, link: 'https://t.me/untosha' },
    { id: 4, icon: faEnvelope, link: 'mailto:anton.rybakou@gmail.com' },
  ];

  return (
    <div className={`${styleContainer.block} ${style.footerBlock}`}>
      <div className={`${styleContainer.container} ${style.footerContainer}`}>
        <Title title={'Anton Rybakou'} />
        <div className={style.socialBlock}>
          {socialLinks.map(el => {
            return (
              <SocialItem key={el.id}
                          icon={el.icon}
                          link={el.link} />
            );
          })}
        </div>
        <div className={style.copyright}>
          © 2022 All rights reserved
        </div>
      </div>
    </div>
  );
});
