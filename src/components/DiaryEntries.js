import React from 'react';
import EditPostButton from './Buttons/EditPostButton';
import ReadMoreButton from './Buttons/ReadMoreButton';
import ImageAvatar from '../components/Avatar/Avatar';

import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  CardContent,
  CardMedia,
  CardActions,
  CardHeader,
  Card,
  Box,
} from '@material-ui/core';
import DeletePostButton from './Buttons/DeletePostButton';

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
              {entry.blog_img ? (
                <CardMedia
                  style={{ height: '150px', backgroundSize: 'contain' }}
                  image={entry.blog_img}
                />
              ) : (
                <Box mt={3}></Box>
              )}
              <CardContent>
                <Typography variant="body2" component="p">
                  {entry.text}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <ReadMoreButton to={`/diary/${entry.id}`} />
                <DeletePostButton
                  id={entry.id}
                  onDelete={props.deleteDiaryEntry}
                />
                <EditPostButton to={`/edit/${entry.id}`} />
              </CardActions>
            </Card>
          );
        })}
      </ul>
    </div>
  );
}
