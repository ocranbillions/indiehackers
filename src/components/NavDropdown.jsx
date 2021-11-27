/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const dropdownItems = [
  {
    title: 'COMMUNITY',
    description: 'Talk shop with other indie hackers.',
    icon: null,
    color: '#4799eb',
  },
  {
    title: 'INTERVIEWS',
    description: 'Learn from transparent startup stories.',
    icon: null,
    color: '#a082c9',
  },
  {
    title: 'PODCASTS',
    description: 'Raw conversations with founders.',
    icon: null,
    color: '#e6709f',
  },
  {
    title: 'MEETUPS',
    description: 'Meet indie hackers across the globe.',
    icon: null,
    color: '#ff476c',
  },
  {
    title: 'PRODUCTS',
    description: 'See what everyone\'s working on.',
    icon: null,
    color: '#fe7f25',
  },
  {
    title: 'STORE',
    description: 'Buy an Indie Hackers t-shirt.',
    icon: null,
    color: '#f9af1a',
  },
  {
    title: 'NEWSLETTER',
    description: 'Stay up-to-date in 5 minutes or less.',
    icon: null,
    color: '#48c772',
  },
  {
    title: 'CONTRIBUTE',
    description: 'Share your knowledge and experiences.',
    icon: null,
    color: '#fff',
  },
];

const useStyles = createUseStyles((theme) => ({
  dropdownContainer: {
    position: 'absolute',
    top: 40,
    left: 0,
    backgroundColor: theme.colors.rhino,
    boxShadow: '0 0 24px rgb(12 31 49 / 35%)',
    paddingTop: 10,
  },
  dropdownItem: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    padding: '10px 15px',
    '&:hover': {
      background: theme.colors.sanJuan,
    },
  },
  itemIcon: {
    width: 50,
    height: 50,
    background: theme.colors.white,
    borderRadius: '50%',
  },
  itemTextWrapper: {
    marginLeft: 12,
    display: 'flex',
    flexDirection: 'column',
    '& *': {
      fontSize: 15,
      fontWeight: 600,
    },
  },
  description: {
    color: theme.colors.rockBlue,
    fontWeight: 500,
  },
  dropdownCancel: {
    display: 'none',
  },
  hidden: {
    display: 'none',
  },

  // Mobile styles
  '@media only screen and (max-width: 900px)': {
    hidden: {
      display: 'flex',
    },
  },
  '@media only screen and (max-width: 600px)': {
    dropdownContainer: {
      width: '100%',
    },
    dropdownCancel: {
      background: theme.colors.sanJuan,
      display: 'flex',
      marginTop: -50,
      height: 50,
      alignItems: 'center',
      paddingRight: 10,
      justifyContent: 'flex-end',
    },
  },
}));

const NavDropdown = (props) => {
  const { closeDropdown } = props;
  const s = useStyles();

  return (
    <div className={s.dropdownContainer} onMouseLeave={closeDropdown}>
      <span className={s.dropdownCancel}>
        <span onClick={closeDropdown}>Close</span>
      </span>
      {dropdownItems.map((item) => (
        <a href="*" className={clsx(s.dropdownItem, (item.title === 'INTERVIEWS' || item.title === 'PODCASTS') && s.hidden)}>
          <div
            className={s.itemIcon}
            style={{ background: item.color }}
          />
          <div className={s.itemTextWrapper}>
            <span style={{ color: item.color }}>
              {item.title}
            </span>
            <span className={s.description}>{item.description}</span>
          </div>
        </a>
      ))}
    </div>
  );
};

NavDropdown.propTypes = {
  closeDropdown: PropTypes.func.isRequired,
};

export default NavDropdown;
