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
  button: {
    '&.active': {
      background: 'primary',
    },
  },
}));

export default function CategoryNav(props) {
  const { setCategory } = props;
  const classes = useStyles();
  return (
    <>
      <Toolbar classes={{ root: classes.appBarRoot }}>
        <Box className={classes.menuButton} onClick={setCategory}>
          <Button color="inherit">
            <span data-id="1">Животные</span>
          </Button>
          <Button color="inherit">
            <span data-id="2">Красота</span>
          </Button>
          <Button color="inherit">
            <span data-id="3">Политика</span>
          </Button>
          <Button color="inherit">
            <span data-id="4">Путешествия</span>
          </Button>
          <Button color="inherit">
            <span data-id="5">Семья</span>
          </Button>
        </Box>
      </Toolbar>
    </>
  );
}
