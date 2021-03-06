import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cards from '../components/Cards';
import { Box, Button, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useAuth } from '../hooks/useAuth';
import { useEntries } from '../hooks/useEntries';
import Loader from '../components/Loader/Loader';

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
      {!entries.entriesList.length && (
        <Box mt={20}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Typography variant="inherit" component="p">
              У вас пока нет записей
            </Typography>

            <Button color="inherit" component={Link} to="/create">
              Создать запись
            </Button>
            <Box mt={44}></Box>
          </Grid>
        </Box>
      )}
      <Grid container spacing={3}>
        {!entries.isLoading && entries.entriesList && entries.entriesList.length
          ? entries.entriesList.map((item) => {
              return (
                <Grid item xs={6} sm={4} key={item.id}>
                  <Cards
                    className={classes.title}
                    id={item.id}
                    categoryId={item.category_id}
                    title={item.title}
                    date={new Date(item.updated_at).toLocaleString('ru')}
                    description={item.text}
                    image={item.blog_img}
                    public={item.public}
                    avatarUrl="/images/image-8.jpg"
                    likeHidden
                    commentHidden
                    viewsHidden
                  />
                </Grid>
              );
            })
          : null}
      </Grid>
      <Box mt={5}></Box>
    </div>
  );
}
