import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Pagination } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function DiaresPagination(props) {
  const { count, page, onChange } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Pagination
        count={count}
        page={+page}
        variant="outlined"
        color="primary"
        onChange={onChange}
      />
    </div>
  );
}
