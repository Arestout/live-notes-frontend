import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';
import { Tooltip } from '@material-ui/core';

export default function EditPostButton() {
  return (
    <div>
      <label htmlFor="icon-button-file">
        <Tooltip title="Редактировать эту запись">
          <IconButton aria-label="edit post" color="primary">
            <CreateIcon />
          </IconButton>
        </Tooltip>
      </label>
    </div>
  );
}
