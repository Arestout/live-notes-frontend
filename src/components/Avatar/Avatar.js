import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function ImageAvatar(props) {
  const { className } = props;
  const classes = useStyles();

  return (
    <div className={classNames(classes.root, className)}>
      <Avatar
        alt="user name"
        src="/images/image-8.jpg"
        className={classes.large}
      />
    </div>
  );
}
