import React from 'react';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';

const useStyles = createUseStyles(() => ({
  dropdownContainer: {
    position: 'absolute',
    top: 40,
    left: 0,
    backgroundColor: '#274059',
    boxShadow: '0 0 24px rgb(12 31 49 / 35%)',
    paddingTop: 10,
  },
  dropdownItem: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    padding: '10px 15px',
    '&:hover': {
      background: 'grey',
    },
  },
  itemIcon: {
    width: 50,
    height: 50,
    background: '#fff',
    borderRadius: '50%',
  },
  itemText: {
    marginLeft: 12,
    display: 'flex',
    flexDirection: 'column',
  },
}));

const NavDropdown = (props) => {
  const { closeDropdown } = props;
  const s = useStyles();

  return (
    <div className={s.dropdownContainer} onMouseLeave={closeDropdown}>
      <a href="*" className={s.dropdownItem}>
        <div className={s.itemIcon} />
        <div className={s.itemText}>
          <span>Community</span>
          <span>Talk shop with other indie hackers.</span>
        </div>
      </a>
      <a href="*" className={s.dropdownItem}>
        <div className={s.itemIcon} />
        <div className={s.itemText}>
          <span>Community</span>
          <span>Talk shop with other indie hackers.</span>
        </div>
      </a>
      <a href="*" className={s.dropdownItem}>
        <div className={s.itemIcon} />
        <div className={s.itemText}>
          <span>Community</span>
          <span>Talk shop with other indie hackers.</span>
        </div>
      </a>
    </div>
  );
};

NavDropdown.propTypes = {
  closeDropdown: PropTypes.func.isRequired,
};

export default NavDropdown;
