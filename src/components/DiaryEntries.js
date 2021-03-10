import React from 'react';
import EditPostButton from './Buttons/EditPostButton';
import ReadMoreButton from './Buttons/ReadMoreButton';
import ImageAvatar from '../components/Avatar/Avatar';

import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import {
  Tooltip,
  Typography,
  IconButton,
  CardContent,
  CardMedia,
  CardActions,
  CardHeader,
  Card,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 345,
    flexGrow: 1,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

export default function DiaryEntries(props) {
  const classes = useStyles();
  return (
    <div>
      <ul>
        {props.entries.map((entry) => {
          return (
            <Card
              className={classes.card}
              variant="outlined"
              key={entry.id}
              style={{ margin: '5px 0' }}
            >
              <CardHeader
                avatar={<ImageAvatar />}
                title={entry.title}
                subheader={entry.date}
              />
              <CardMedia
                style={{ height: '150px' }}
                image={entry.image || ''}
              />
              <CardContent>
                <Typography variant="body2" component="p">
                  {entry.description}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <Tooltip title="Удалить эту запись">
                  <IconButton
                    aria-label="delete"
                    color="secondary"
                    onClick={() => props.deleteDiaryEntry(entry.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
                <EditPostButton />
                <ReadMoreButton />
              </CardActions>
            </Card>
          );
        })}
      </ul>
    </div>
  );
}
