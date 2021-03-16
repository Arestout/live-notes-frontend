import React from 'react';
import { Link } from 'react-router-dom';

import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';
import { Tooltip } from '@material-ui/core';

export default function EditPostButton(props) {
  return (
    <div>
      <label htmlFor="icon-button-file">
        <Tooltip title="Редактировать эту запись">
          <IconButton
            aria-label="edit post"
            component={Link}
            to={props.to}
            color="primary"
          >
            <CreateIcon />
          </IconButton>
        </Tooltip>
      </label>
    </div>
  );
}
