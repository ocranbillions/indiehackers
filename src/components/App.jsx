import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
  app: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    background: theme.background,
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <div>App here</div>
    </div>
  );
};

export default App;
