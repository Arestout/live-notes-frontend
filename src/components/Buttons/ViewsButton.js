import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Tooltip } from '@material-ui/core';

export default function ViewsButton() {
  return (
    <Tooltip title="Прочитало">
      <IconButton aria-label="views">
        <VisibilityIcon />
      </IconButton>
    </Tooltip>
  );
}
