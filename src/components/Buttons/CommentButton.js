import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import { Tooltip } from '@material-ui/core';

export default function CommentButton() {
  return (
    <Tooltip title="Комментировать">
      <IconButton aria-label="comment">
        <ChatBubbleOutlineIcon />
      </IconButton>
    </Tooltip>
  );
}
