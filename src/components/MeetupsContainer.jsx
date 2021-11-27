import React from 'react';
import { createUseStyles } from 'react-jss';

import MeetupItem from './MeetupItem';

const useStyles = createUseStyles(() => ({
  meetupsContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 64,
  },

  // Mobile
  '@media only screen and (max-width: 600px)': {
    meetupsContainer: {
      maxWidth: 'calc(100% - 32px)',
    },
  },
}));

const MeetupsContainer = () => {
  const s = useStyles();

  return (
    <div className={s.meetupsContainer}>
      {[0, 1, 2, 3].map((index) => <MeetupItem key={index} />)}
    </div>
  );
};

export default MeetupsContainer;
