import React from 'react';
import { createUseStyles } from 'react-jss';

import MeetupItem from './MeetupItem';

const useStyles = createUseStyles(() => ({
  meetupsListContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 64,
  },

  // Mobile
  '@media only screen and (max-width: 600px)': {
    meetupsListContainer: {
      maxWidth: 'calc(100% - 32px)',
    },
  },
}));

const MeetupsList = () => {
  const s = useStyles();

  return (
    <div className={s.meetupsListContainer}>
      {[0, 1, 2, 3].map((index) => <MeetupItem key={index} />)}
    </div>
  );
};

export default MeetupsList;
