import React from 'react';

import Cards from '../Cards';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    wordBreak: 'break-all',
  },
  loader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  root: {
    margin: '10px 5px',
  },
  cardsContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
}));

export default function DiariesCards(props) {
  const { diaries } = props;
  const classes = useStyles();

  return (
    <Grid container>
      <div className={classes.cardsContainer}>
        {diaries &&
          diaries.map((diary) => {
            return (
              <Grid className={classes.root} item xs={6} sm={3} key={diary.id}>
                <Cards
                  titleClassName={classes.title}
                  id={diary.id}
                  categoryId={diary.category_id}
                  title={diary.title}
                  date={new Date(diary.updated_at).toLocaleString('ru')}
                  description={diary.text}
                  image={diary.blog_img}
                  avatarUrl="/images/image-8.jpg"
                  deleteHidden
                  editHidden
                  views={diary.views}
                />
              </Grid>
            );
          })}
      </div>
    </Grid>
  );
}
