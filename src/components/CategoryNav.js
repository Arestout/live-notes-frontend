import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBarRoot: {
    display: 'flex',
    justifyContent: 'center',
  },
  menuButton: {
    marginRight: theme.spacing(5),
  },
}));

export default function CategoryNav() {
  const classes = useStyles();
  return (
    <>
      <Toolbar classes={{ root: classes.appBarRoot }}>
        <Box className={classes.menuButton}>
          <Button color="inherit">Животные</Button>
          <Button color="inherit">Красота</Button>
          <Button color="inherit">Политика</Button>
          <Button color="inherit">Путешествия</Button>
          <Button color="inherit">Семья</Button>
        </Box>
      </Toolbar>
    </>
  );
}
