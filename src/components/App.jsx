import React from 'react';
import { createUseStyles } from 'react-jss';

import Navbar from './Navbar';
import MeetupsHeader from './MeetupsHeader';
import MeetupsContainer from './MeetupsContainer';

const useStyles = createUseStyles((theme) => ({
  app: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    paddingBottom: 30,
    background: theme.colors.elephant,
  },
}));

const App = () => {
  const s = useStyles();

  return (
    <div className={s.app}>
      <Navbar />
      <MeetupsHeader />
      <MeetupsContainer />
    </div>
  );
};

export default App;
