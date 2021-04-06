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
import CategoryLink from './Buttons/CategoryLink';
import ViewsButton from './Buttons/ViewsButton';

const Cards = (props) => {
  const {
    avatarUrl,
    title,
    date,
    description,
    image,
    id,
    categoryId,
    views,
    likeHidden = false,
    commentHidden = false,
    deleteHidden = false,
    editHidden = false,
    categoryHidden = false,
    viewsHidden = false,
    titleClassName,
    isPublic,
    likes,
    userLike,
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

  const readeMoreLink = isPublic ? `/diary/${id}?type=public` : `/diary/${id}`;

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
      <CardActions style={{ flexWrap: 'wrap' }}>
        {!likeHidden && <LikeButton userLike={userLike} id={id} />}
        {!likeHidden && <Typography variant="caption">{likes}</Typography>}
        {!viewsHidden && <ViewsButton />}
        <Typography variant="caption">{views}</Typography>
        {!commentHidden && <CommentButton />}
        <ReadMoreButton to={readeMoreLink} />
        {!deleteHidden && <DeletePostButton id={id} onDelete={onDelete} />}
        {!editHidden && <EditPostButton to={`/edit/${id}`} />}
        {!categoryHidden && <CategoryLink categoryId={categoryId} />}
      </CardActions>
    </Card>
  );
};

export default Cards;
