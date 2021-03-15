import React, { useEffect } from 'react';
import Card from '../components/Cards';
import { Box, Grid } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import { useAuth } from '../hooks/useAuth';
import { useEntries } from '../hooks/useEntries';
import Copyright from '../components/Copyright/Copyright';

const useStyles = makeStyles((theme) => ({
  title: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
}));

export default function MyDiaryList() {
  const { auth } = useAuth();
  const { entries, dispatchFetchEntries } = useEntries();
  const classes = useStyles();

  useEffect(() => {
    dispatchFetchEntries(auth.access_token);
  }, [dispatchFetchEntries, auth.access_token]);

  return (
    <div style={{ padding: 12 }}>
      <Grid container spacing={3}>
        {entries.entriesList
          ? Object.values(entries.entriesList).map((item) => {
              return (
                <Grid item xs={6} sm={3} key={item.id}>
                  <Card
                    titleClassName={classes.title}
                    id={item.id}
                    title={item.title}
                    date={new Date(item.updated_at).toLocaleString('ru')}
                    description={item.text}
                    image={''}
                    avatarUrl="/images/image-8.jpg"
                    likeHidden
                    commentHidden
                  />
                </Grid>
              );
            })
          : null}
      </Grid>
      <Box mt={5}>
        <Copyright />
      </Box>
    </div>
  );
}
