import React, { useEffect } from 'react';
import Cards from '../components/Cards';
import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useAuth } from '../hooks/useAuth';
import { useEntries } from '../hooks/useEntries';
import Loader from '../components/Loader/Loader';
import Copyright from '../components/Copyright/Copyright';

const useStyles = makeStyles((theme) => ({
  title: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  loader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
}));

export default function MyDiaryList() {
  const { auth } = useAuth();
  const { entries, dispatchFetchEntries } = useEntries();
  const classes = useStyles();

  useEffect(() => {
    if (entries.entriesList.length) {
      return;
    }

    dispatchFetchEntries(auth.access_token);
    // eslint-disable-next-line
  }, [dispatchFetchEntries, auth.access_token]);

  return (
    <div style={{ padding: 12 }}>
      {entries.isLoading && (
        <div className={classes.loader}>
          <Loader />
        </div>
      )}
      <Grid container spacing={3}>
        {!entries.isLoading && entries.entriesList
          ? entries.entriesList.map((item) => {
              return (
                <Grid item xs={6} sm={3} key={item.id}>
                  <Cards
                    className={classes.title}
                    id={item.id}
                    title={item.title}
                    date={new Date(item.updated_at).toLocaleString('ru')}
                    description={item.text}
                    image={item.blog_img}
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
