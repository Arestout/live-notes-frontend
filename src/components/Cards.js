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
import EditPostButton from './Buttons/EditPostButton';

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
    deleteHidden = false,
    editHidden = false,
    titleClassName,
  } = props;
  const {
    auth: { access_token },
  } = useAuth();
  const { entries, dispatchDeleteEntry, dispatchUpdateEntries } = useEntries();

  const onDelete = (id) => {
    const filteredEntries = entries.entriesList.filter(
      (entry) => entry.id !== id
    );
    dispatchUpdateEntries(filteredEntries);
    dispatchDeleteEntry({ id, access_token });
  };

  return (
    <Card>
      <CardHeader
        classes={{ content: titleClassName }}
        avatar={<Avatar src={avatarUrl} />}
        title={title}
        subheader={date}
      />
      <CardMedia
        style={{ height: '150px', backgroundSize: 'contain' }}
        image={image || 'https://picsum.photos/seed/picsum/200/300'}
      />
      <CardContent>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        {!likeHidden && <LikeButton />}
        {!commentHidden && <CommentButton />}
        <ReadMoreButton to={`/diary/${id}`} />
        {!deleteHidden && <DeletePostButton id={id} onDelete={onDelete} />}
        {!editHidden && <EditPostButton to={`/edit/${id}`} />}
      </CardActions>
    </Card>
  );
};

export default Cards;
