import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
  meetupItem: {
    display: 'flex',
    background: theme.colors.rhino,
    borderRadius: 3,
    boxShadow: `0 0 8px ${theme.colors.firefly}`,
    position: 'relative',
    width: '100%',
    padding: '36px 24px 36px 36px',
    marginBottom: 4,
    '&:hover': {
      transform: 'scale(1.05)',
      zIndex: 1,
    },
    cursor: 'pointer',
    transition: 'transform 160ms',
  },
  meetupDateIcon: {
    height: 60,
    width: 58,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 28,
    background: theme.colors.white,
    borderRadius: 3,
    fontWeight: 600,
    lineHeight: '1em',
  },
  meetupMonth: {
    fontSize: 15,
    textTransform: 'uppercase',
    color: theme.colors.thundora,
  },
  meetupDay: {
    color: theme.colors.pictonBlue,
    margin: '3px auto 0',
    fontSize: 22,
  },
  meetupDetails: {
    width: 'calc(100% - 86px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  meetupTitle: {
    color: theme.colors.white,
    margin: 0,
    fontSize: 24,
  },
  meetupFooter: {
    display: 'flex',
    marginTop: 8,
    flexWrap: 'wrap',
    alignItems: 'center',
    '& *': {
      fontSize: 16,
      color: theme.colors.baliHai,
    },
  },
  userAvatar: {
    marginRight: 6,
    height: 24,
    width: 24,
    background: theme.colors.white,
    borderRadius: '50%',
  },
  separator: {
    margin: '0px 6px',
  },

  // Mobile
  '@media only screen and (max-width: 600px)': {
    meetupItem: {
      padding: 20,
    },
    meetupTitle: {
      fontSize: 20,
    },
    meetupFooter: {
      '& *': {
        fontSize: 15,
      },
    },
    userAvatar: {
      display: 'none',
    },
  },
}));

const MeetupItem = () => {
  const s = useStyles();

  return (
    <div className={s.meetupItem}>
      <div className={s.meetupDateIcon}>
        <span className={s.meetupMonth}>Nov</span>
        <span className={s.meetupDay}>29</span>
      </div>
      <div className={s.meetupDetails}>
        <h3 className={s.meetupTitle}>Investor Office Hours</h3>
        <div className={s.meetupFooter}>
          <span className={s.userAvatar} />
          <span>Sean Sydney</span>
          <span className={s.separator}><span>.</span></span>
          <span>Monday, November 29th</span>
          <span className={s.separator}>.</span>
          <span>Remote/Worldwide</span>

        </div>
      </div>
    </div>
  );
};

export default MeetupItem;
