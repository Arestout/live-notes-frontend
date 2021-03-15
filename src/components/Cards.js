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

const Cards = (props, item) => {
  console.log(props);
  const { avatarUrl, title, date, description, image, id } = props;
  return (
    <Card>
      <CardHeader
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
        <LikeButton />
        <CommentButton />
        <ReadMoreButton to={`/diary/${id}`} />
      </CardActions>
    </Card>
  );
};

export default Cards;
