import React, { useState } from 'react';
import { Container, TextField, Tooltip, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import { useAuth } from '../../hooks/useAuth';
import Api from '../../api/api';

const useStyles = makeStyles((theme) => ({
  loader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    marginBottom: theme.spacing(4),
  },
  errorMessage: { color: 'red' },
}));

export default function CommentForm({ blog_id, comments, setUserComments }) {
  const classes = useStyles();
  const { auth } = useAuth();
  const [comment, setComment] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onChangeHandler = (event) => {
    const { value } = event.target;
    setComment(value);
  };

  const formSubmitHandler = async () => {
    const data = {
      blog_id,
      comment,
    };
    setIsLoading(true);
    try {
      const result = await Api.post('/comment', data, {
        headers: {
          Authorization: 'bearer' + auth.access_token,
        },
      });
      setComment('');
      setUserComments([result.data, ...comments]);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container maxWidth="md" className="DiaryForm">
      <form className={classes.form}>
        <TextField
          multiline
          rows="6"
          fullWidth
          margin="dense"
          label="Ваш комментарий"
          variant="outlined"
          name="text"
          value={comment}
          onChange={onChangeHandler}
        />

        <Tooltip title={'Добавить комментарий'}>
          <span>
            <IconButton
              color="primary"
              aria-label="Создать запись"
              variant="contained"
              onClick={formSubmitHandler}
              disabled={isLoading}
            >
              <AddCircleIcon fontSize="default" />
            </IconButton>
          </span>
        </Tooltip>
      </form>
    </Container>
  );
}
