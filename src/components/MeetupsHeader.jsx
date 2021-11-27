import React from 'react';
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';

import ArrowRight from '../icons/ArrowRight';

const useStyles = createUseStyles((theme) => ({
  meetupsHeader: {
    textAlign: 'center',
    padding: '104px 16px 0',
    marginTop: -50,
    backgroundImage: 'linear-gradient(to bottom,#1f364d,#0e2439)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  meetupsHeaderTitle: {
    color: theme.colors.white,
    fontSize: 40,
    fontWeight: 600,
    lineHeight: '1.25em',
    margin: 0,
  },
  meetupsHeaderDescription: {
    color: theme.colors.rockBlue,
    fontSize: 22,
    lineHeight: '1.35em',
    margin: 0,
    marginTop: 14,
  },
  meetupsHeaderActions: {
    display: 'flex',
    margin: '36px auto 0px',
  },
  meetupHeaderAction: {
    padding: '10px 15px',
    fontSize: 18,
    borderRadius: 3,
    textDecoration: 'none',
    '&:hover': {
      background: theme.colors.amaranth,
    },
  },
  meetupHeaderActionOne: {
    border: `2px solid ${theme.colors.cloudBurst}`,
    color: theme.colors.periwinkleGray,
    marginRight: 16,
    fontWeight: 400,
  },
  meetupHeaderActionTwo: {
    background: theme.colors.pictonBlue,
    color: theme.colors.white,
    fontWeight: 600,
    position: 'relative',
  },
  arrowIcon: {
    position: 'absolute',
    right: -35,
    height: 18,
    color: theme.colors.pictonBlue,
    '&:hover': {
      color: theme.colors.amaranth,
      cursor: 'pointer',
    },
  },

  // Mobile
  '@media only screen and (max-width: 600px)': {
    meetupsHeaderTitle: {
      fontSize: 32,
    },
    meetupsHeaderDescription: {
      fontSize: 20,
    },
    meetupsHeaderActions: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    meetupHeaderActionOne: {
      marginRight: 0,
      marginBottom: 16,
    },
  },
}));

const MeetupsHeader = () => {
  const s = useStyles();

  return (
    <div className={s.meetupsHeader}>
      <h1 className={s.meetupsHeaderTitle}>Upcoming Meetups</h1>
      <p className={s.meetupsHeaderDescription}>
        Find other indie hackers in your area so you can learn, share, and work together.
      </p>
      <div className={s.meetupsHeaderActions}>
        <a href="*" className={clsx(s.meetupHeaderAction, s.meetupHeaderActionOne)}>
          <span>Code of Conduct</span>
        </a>
        <a href="*" className={clsx(s.meetupHeaderAction, s.meetupHeaderActionTwo)}>
          <span>Host a Meetup</span>
          <span className={s.arrowIcon}>
            <ArrowRight height="18" width="18" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default MeetupsHeader;
