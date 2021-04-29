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

export default function CategoryNav(props) {
  const { setCategory, curCatId } = props;
  const classes = useStyles();
  const categories = [
    { id: 1, name: 'Животные' },
    { id: 2, name: 'Красота' },
    { id: 3, name: 'Политика' },
    { id: 4, name: 'Путешествия' },
    { id: 5, name: 'Семья' },
  ];
  return (
    <>
      <Toolbar classes={{ root: classes.appBarRoot }}>
        <Box className={classes.menuButton} onClick={setCategory}>
          {categories.map((item) => {
            return (
              <Button
                color={+curCatId === item.id ? 'primary' : 'inherit'}
                key={item.id}
              >
                <span data-id={item.id}>{item.name}</span>
              </Button>
            );
          })}
        </Box>
      </Toolbar>
    </>
  );
}
