import React from 'react';
import { createUseStyles } from 'react-jss';

import Navbar from './Navbar';
import MeetupsHeader from './MeetupsHeader';

const useStyles = createUseStyles((theme) => ({
  app: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    background: theme.colors.elephant,
  },
}));

const App = () => {
  const s = useStyles();

  return (
    <div className={s.app}>
      <Navbar />
      <MeetupsHeader />
    </div>
  );
};

export default App;
