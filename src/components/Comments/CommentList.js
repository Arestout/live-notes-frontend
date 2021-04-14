import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import { Box, CardHeader } from '@material-ui/core';
import ImageAvatar from '../Avatar/Avatar';
import DeletePostButton from '../Buttons/DeletePostButton';
import Api from '../../api/api';
import { useAuth } from '../../hooks/useAuth';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(4),
  },
  commentsList: {
    width: '100%',
  },
  singleComment: {
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
  },
  commentText: {
    display: 'flex',
    alignSelf: 'center',
    marginLeft: '20px',
  },
  deleteButton: {
    marginLeft: 'auto',
    display: 'flex',
    alignSelf: 'center',
  },
}));

export default function CommentList({ comments, setUserComments }) {
  console.log('comments: ', comments);
  const classes = useStyles();
  const { auth } = useAuth();
  console.log(auth.user.id);

  const onDelete = (id) => {
    try {
      const updatedComments = comments.filter((comment) => comment.id !== id);
      setUserComments(updatedComments);
      Api.delete(`/comment/${id}`, {
        headers: {
          Authorization: 'bearer' + auth.access_token,
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Box className={classes.root}>
      {comments.length ? (
        <List className={classes.commentsList}>
          {comments.map((comment) => (
            <ListItem
              key={comment.id}
              alignItems="flex-start"
              className={classes.singleComment}
            >
              <CardHeader
                avatar={<ImageAvatar />}
                title={comment.name}
                subheader={new Date(comment.updated_at).toLocaleString('ru')}
              />
              <Typography
                component="p"
                variant="body2"
                className={classes.commentText}
                color="textPrimary"
              >
                {comment.comment}
              </Typography>
              <Box className={classes.deleteButton}>
                {auth.user.id === comment.user_id && (
                  <DeletePostButton id={comment.id} onDelete={onDelete} />
                )}
              </Box>
            </ListItem>
          ))}
        </List>
      ) : null}
    </Box>
  );
}
