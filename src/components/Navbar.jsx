import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';

import NavDropdown from './NavDropdown';
import HamburgerMenuIcon from '../icons/Hamburger';
import SearchIcon from '../icons/SearchIcon';
import IndieHackerSquareIcon from '../icons/IndieHackerSquareIcon';
import IndieHackerTextIcon from '../icons/IndieHackerTextIcon';

const useStyles = createUseStyles((theme) => ({
  navbar: {
    position: 'relative',
    background: 'transparent',
    display: 'flex',
    justifyContent: 'space-between',
    width: '1000px',
    marginTop: 5,
    margin: '0px auto',
    maxWidth: 'calc(100% - 32px)',
    zIndex: 1,
  },
  nav: {
    flex: 2,
    display: 'flex',
    padding: 0,
    listStyle: 'none',
  },
  navItem: {
    marginLeft: 24,
    '&:nth-child(2)': {
      marginLeft: 0,
    },
  },
  hiddenAbove500: {
    display: 'none',
  },
  navItemLabel: {
    color: theme.colors.rockBlue,
    fontSize: 15,
    fontWeight: 600,
    '&:hover': {
      color: theme.colors.white,
      cursor: 'pointer',
    },
  },
  displayBelow900: {
    display: 'none',
  },
  hiddenBelow900: {
    display: 'block',
  },
  navbarLogo: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    color: theme.colors.white,
    '& svg:nth-child(1)': {
      marginRight: 10,
    },
  },
  authButtonsContainer: {
    flex: 2,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    color: theme.colors.white,
  },
  authButton: {
    marginLeft: 12,
    padding: '8px 15px',
    borderRadius: 2,
    textDecoration: 'none',
    fontSize: 14,
    fontWeight: 600,
    textTransform: 'uppercase',
    color: theme.colors.white,
    '&:nth-child(2)': {
      boxShadow: `inset 0 0 0 3px ${theme.colors.blueDianne}`,
    },
    '&:nth-child(3)': {
      backgroundImage: 'linear-gradient(to right,#e052a0,#f15c41)',
    },
    '&:hover': {
      boxShadow: 'none',
      backgroundImage: 'linear-gradient(to right,#3ec7e0,#526bf4)',
    },
  },
  svgIcon: {
    color: theme.colors.rockBlue,
    '&:hover': {
      color: theme.colors.white,
      cursor: 'pointer',
    },
  },

  // Mobile
  '@media only screen and (max-width: 900px)': {
    displayBelow900: {
      display: 'block',
    },
    hiddenBelow900: {
      display: 'none',
    },
    authButton: {
      boxShadow: 'none !important',
      backgroundImage: 'none !important',
      color: theme.colors.rockBlue,
      textTransform: 'unset',
      paddingLeft: 0,
      paddingRight: 0,
      '&:hover': {
        color: theme.colors.white,
      },
    },
  },
  '@media only screen and (max-width: 500px)': {
    navbar: {
      background: theme.colors.elephant,
      maxWidth: '100%',
      padding: '0px 16px',
    },
    nav: {
      alignItems: 'center',
    },
    navbarLogo: {
      display: 'none',
    },
    hiddenAbove500: {
      display: 'block',
    },
    navItem: {
      '&:nth-child(1)': {
        marginLeft: 0,
      },
      '&:nth-child(2)': {
        marginLeft: 24,
      },
    },
  },
}));

const Navbar = () => {
  const s = useStyles();

  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div className={s.navbar}>
      <ul className={s.nav}>
        <li className={clsx(s.navItem, s.hiddenAbove500)}>
          <span className={s.navItemLabel}>
            <IndieHackerSquareIcon height={24} width={24} />
          </span>
        </li>
        <li
          className={s.navItem}
          onMouseEnter={() => setOpenDropdown(true)}
        >
          <span className={clsx(s.navItemLabel, s.svgIcon)}>
            <HamburgerMenuIcon height={18} width={15} />
          </span>
        </li>
        <li className={clsx(s.navItem, s.displayBelow900)}>
          <span className={clsx(s.navItemLabel, s.svgIcon)}>
            <SearchIcon height={18} width={18} />
          </span>
        </li>
        <li className={clsx(s.navItem, s.hiddenBelow900)}>
          <span className={s.navItemLabel}>Start Here</span>
        </li>
        <li className={clsx(s.navItem, s.hiddenBelow900)}>
          <span className={s.navItemLabel}>Interviews</span>
        </li>
        <li className={clsx(s.navItem, s.hiddenBelow900)}>
          <span className={s.navItemLabel}>Podcasts</span>
        </li>
      </ul>

      <a className={s.navbarLogo} href="*">
        <IndieHackerSquareIcon height={24} width={24} />
        <IndieHackerTextIcon height={11} width={110} />
      </a>

      <div className={s.authButtonsContainer}>
        <span className={clsx(s.hiddenBelow900, s.svgIcon)}>
          <SearchIcon height={18} width={18} />
        </span>
        <a href="*" className={s.authButton}>Log In</a>
        <a href="*" className={s.authButton}>Sign Up</a>
      </div>
      {openDropdown && <NavDropdown closeDropdown={() => setOpenDropdown(false)} />}
    </div>
  );
};

export default Navbar;
