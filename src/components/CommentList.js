import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import { CardHeader } from '@material-ui/core';
import ImageAvatar from './Avatar/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function CommentList() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <CardHeader
          avatar={<ImageAvatar />}
          title={'finny85'}
          subheader={Date.now()}
        />
        <Typography
          component="span"
          variant="body2"
          className={classes.inline}
          color="textPrimary"
        >
          {' — Do you have Paris recommendations? Have you ever…'}
        </Typography>
      </ListItem>
    </List>
  );
}
