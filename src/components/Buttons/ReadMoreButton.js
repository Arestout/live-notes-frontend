import React from 'react';
import { Link } from 'react-router-dom';

import IconButton from '@material-ui/core/IconButton';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Tooltip } from '@material-ui/core';

export default function ReadMoreButton() {
  return (
    <div>
      <label htmlFor="icon-button-file">
        <Tooltip title="Читать далее">
          <IconButton aria-label="read more" component={Link} to="/">
            <MoreHorizIcon />
          </IconButton>
        </Tooltip>
      </label>
    </div>
  );
}
