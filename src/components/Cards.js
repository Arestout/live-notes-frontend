import React from 'react';

import {
  Typography,
  CardHeader,
  CardActions,
  CardContent,
  Card,
  Avatar,
  CardMedia,
} from '@material-ui/core';

import LikeButton from './Buttons/LikeButton';
import CommentButton from './Buttons/CommentButton';
import ReadMoreButton from './Buttons/ReadMoreButton';

import DeletePostButton from './Buttons/DeletePostButton';
import { useAuth } from '../hooks/useAuth';
import { useEntries } from '../hooks/useEntries';

const Cards = (props) => {
  const {
    avatarUrl,
    title,
    date,
    description,
    image,
    id,
    likeHidden = false,
    commentHidden = false,
    titleClassName,
  } = props;
  const {
    auth: { access_token },
  } = useAuth();
  const { dispatchDeleteEntry } = useEntries();

  const data = {
    access_token,
    id,
  };

  return (
    <Card>
      <CardHeader
        classes={{ content: titleClassName }}
        avatar={<Avatar src={avatarUrl} />}
        title={title}
        subheader={date}
      />
      <CardMedia style={{ height: '150px' }} image={image} />
      <CardContent>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        {!likeHidden && <LikeButton />}
        {!commentHidden && <CommentButton />}
        <ReadMoreButton to={`/diary/${id}`} />
        <DeletePostButton data={data} onDelete={dispatchDeleteEntry} />
      </CardActions>
    </Card>
  );
};

export default Cards;
