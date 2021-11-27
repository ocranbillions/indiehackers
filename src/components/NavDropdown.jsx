import React from 'react';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import CloseIcon from '../icons/CloseIcon';
import CommunityIcon from '../icons/dropdown-icons/CommunityIcon';
import InterviewsIcon from '../icons/dropdown-icons/InterviewsIcon';
import PodcastIcon from '../icons/dropdown-icons/PodcastIcon';
import MeetupIcon from '../icons/dropdown-icons/MeetupIcon';
import ProductIcon from '../icons/dropdown-icons/ProductIcon';
import StoreIcon from '../icons/dropdown-icons/StoreIcon';
import NewsletterIcon from '../icons/dropdown-icons/NewsletterIcon';
import ContributeIcon from '../icons/dropdown-icons/ContributeIcon';

const dropdownItems = [
  {
    title: 'COMMUNITY',
    description: 'Talk shop with other indie hackers.',
    icon: <CommunityIcon />,
    color: '#4799eb',
  },
  {
    title: 'INTERVIEWS',
    description: 'Learn from transparent startup stories.',
    icon: <InterviewsIcon />,
    color: '#a082c9',
  },
  {
    title: 'PODCASTS',
    description: 'Raw conversations with founders.',
    icon: <PodcastIcon />,
    color: '#e6709f',
  },
  {
    title: 'MEETUPS',
    description: 'Meet indie hackers across the globe.',
    icon: <MeetupIcon />,
    color: '#ff476c',
  },
  {
    title: 'PRODUCTS',
    description: 'See what everyone\'s working on.',
    icon: <ProductIcon />,
    color: '#fe7f25',
  },
  {
    title: 'STORE',
    description: 'Buy an Indie Hackers t-shirt.',
    icon: <StoreIcon />,
    color: '#f9af1a',
  },
  {
    title: 'NEWSLETTER',
    description: 'Stay up-to-date in 5 minutes or less.',
    icon: <NewsletterIcon />,
    color: '#48c772',
  },
  {
    title: 'CONTRIBUTE',
    description: 'Share your knowledge and experiences.',
    icon: <ContributeIcon color="#000" />,
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.colors.white,
  },
  iconSize: {
    height: 25,
    width: 25,
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
      '& span': {
        color: 'white',
      },
    },
  },
}));

const NavDropdown = (props) => {
  const { closeDropdown } = props;
  const s = useStyles();

  return (
    <div className={s.dropdownContainer} onMouseLeave={closeDropdown}>
      <span className={s.dropdownCancel}>
        <span onClick={closeDropdown}>
          <CloseIcon height={16} width={16} />
        </span>
      </span>
      {dropdownItems.map((item) => (
        <a href="*" className={clsx(s.dropdownItem, (item.title === 'INTERVIEWS' || item.title === 'PODCASTS') && s.hidden)}>
          <div
            className={s.itemIcon}
            style={{ background: item.color }}
          >
            <span className={s.iconSize}>{item.icon}</span>
          </div>
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
