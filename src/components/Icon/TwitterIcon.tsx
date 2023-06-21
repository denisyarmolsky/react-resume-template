import {FC, memo} from 'react';

import Icon, {IconProps} from './Icon';

const TwitterIcon: FC<IconProps> = memo(props => (
  <Icon {...props}>
    <path
      d="https://static-00.iconduck.com/assets.00/telegram-icon-1024x1024-bkzf373i.png"
      fill="currentColor"></path>
  </Icon>
));

export default TwitterIcon;
