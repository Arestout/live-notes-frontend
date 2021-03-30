import React from 'react';

import {
  Typography,
  CardHeader,
  CardActions,
  CardContent,
  Card,
  Avatar,
  CardMedia,
  Box,
} from '@material-ui/core';

import LikeButton from './Buttons/LikeButton';
import CommentButton from './Buttons/CommentButton';
import ReadMoreButton from './Buttons/ReadMoreButton';

import DeletePostButton from './Buttons/DeletePostButton';
import { useAuth } from '../hooks/useAuth';
import { useEntries } from '../hooks/useEntries';
import EditPostButton from './Buttons/EditPostButton';
import styles from './Cards.module.css';
import classNames from 'classnames';
import CategoryButton from './Buttons/CategoryButton';
import ViewsButton from './Buttons/ViewsButton';

const Cards = (props) => {
  const {
    avatarUrl,
    title,
    date,
    description,
    image,
    id,
    views,
    likeHidden = false,
    commentHidden = false,
    deleteHidden = false,
    editHidden = false,
    categoryHidden = false,
    viewsHidden = false,
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
        classes={{ content: classNames(titleClassName, styles.title) }}
        avatar={<Avatar src={avatarUrl} />}
        title={title}
        subheader={date}
      />
      {image ? (
        <CardMedia
          style={{ height: '150px', backgroundSize: 'contain' }}
          image={image}
        />
      ) : (
        <Box mt={3}></Box>
      )}
      <CardContent>
        <Typography className={styles.clamp} variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        {!likeHidden && <LikeButton />}
        {!viewsHidden && <ViewsButton />}
        <Typography variant="caption">{views}</Typography>
        {!commentHidden && <CommentButton />}
        <ReadMoreButton to={`/diary/${id}`} />
        {!deleteHidden && <DeletePostButton id={id} onDelete={onDelete} />}
        {!editHidden && <EditPostButton to={`/edit/${id}`} />}
      </CardActions>
    </Card>
  );
};

export default Cards;
