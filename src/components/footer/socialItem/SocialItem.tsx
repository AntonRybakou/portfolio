import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type SocialItemPropsType = {
  link: string,
  icon: IconProp
}

export const SocialItem: React.FC<SocialItemPropsType> = React.memo(({ link, icon }) => {
  return (
    <a href={link} target={'_blank'} rel='noreferrer'>
      <FontAwesomeIcon icon={icon}
                       size={'3x'}
                       color={'white'} />
    </a>
  );
});
