import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { Tooltip } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

export default function UploadPhotoButton(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <input
        accept="image/*"
        className={classes.input}
        id="icon-button-file"
        type="file"
        onChange={props.handleChange}
      />
      <label htmlFor="icon-button-file">
        <Tooltip title="Загрузить фото">
          <IconButton
            color="primary"
            aria-label="Загрузить фото"
            component="span"
            fontSize="large"
          >
            <PhotoCamera />
          </IconButton>
        </Tooltip>
      </label>
    </div>
  );
}
