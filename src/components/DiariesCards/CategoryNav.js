import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Box, IconButton, InputBase, Divider, Paper } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  appBarRoot: {
    display: 'flex',
    justifyContent: 'center',
  },
  menuButton: {
    marginRight: theme.spacing(5),
  },
  iconButton: {
    padding: 10,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
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
        <Paper component="form" className={classes.appBarRoot}>
          <InputBase
            className={classes.input}
            placeholder="Поиск"
            inputProps={{ 'aria-label': 'search ' }}
          />
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      </Toolbar>
    </>
  );
}
