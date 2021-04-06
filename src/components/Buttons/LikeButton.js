import React, { useState, useEffect } from 'react';

import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Tooltip } from '@material-ui/core';
import Api from '../../api/api';
import { useAuth } from '../../hooks/useAuth';

export default function LikeButton(props) {
  const { isLiked, onLike, id, isLoading } = props;
  // const { auth } = useAuth();

  // const [isLiked, setIsLiked] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   setIsLiked(userLike);
  // }, [userLike]);

  // const onClick = async () => {
  //   try {
  //     setIsLoading(true);
  //     setIsLiked((state) => !state);
  //     await Api({
  //       url: `/like/${id}`,
  //       method: 'POST',
  //       headers: {
  //         Authorization: 'bearer' + auth.access_token,
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     });
  //   } catch (error) {
  //     console.log(error);
  //     setIsLiked((state) => !state);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  return (
    <Tooltip title="Нравится">
      <IconButton
        aria-label="add to favorites"
        color="secondary"
        disabled={isLoading}
        onClick={() => onLike(id)}
      >
        {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
    </Tooltip>
  );
}
