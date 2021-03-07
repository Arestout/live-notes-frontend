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
import ReadMoreButton from './Buttons/ReadMoreButton';
import LikeButton from './Buttons/LikeButton';
import CommentButton from './Buttons/CommentButton';

const Cards = (props) => {
  const { avatarUrl, title, date, description, image } = props;
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
        <ReadMoreButton />
      </CardActions>
    </Card>
  );
};

export default Cards;
