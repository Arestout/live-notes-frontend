import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Tooltip } from '@material-ui/core';

export default function LikeButton() {
  return (
    <Tooltip title="Нравится">
      <IconButton aria-label="add to favorites" color="secondary">
        <FavoriteIcon />
      </IconButton>
    </Tooltip>
  );
}
