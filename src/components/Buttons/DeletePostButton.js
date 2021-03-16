import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { Tooltip } from '@material-ui/core';

export default function DeletePostButton(props) {
  const { onDelete, id } = props;
  return (
    <div>
      <label htmlFor="icon-button-file">
        <Tooltip title="Удалить эту запись">
          <IconButton
            aria-label="delete"
            color="secondary"
            onClick={() => onDelete(id)}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </label>
    </div>
  );
}
