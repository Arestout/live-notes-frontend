import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/Cards';
import { Grid } from '@material-ui/core';

import { useAuth } from '../hooks/useAuth';
import { useEntries } from '../hooks/useEntries';

export default function MyDiaryList() {
  const { auth } = useAuth();
  const { entries, dispatchFetchEntries } = useEntries();

  useEffect(() => {
    dispatchFetchEntries(auth.access_token);
  }, [dispatchFetchEntries, auth.access_token]);

  return (
    <div style={{ padding: 12 }}>
      <Grid container spacing={3}>
        {entries.entriesList
          ? entries.entriesList.map((item) => {
              return (
                <Grid item xs={6} sm={3} key={item.id}>
                  <Card
                    id={item.id}
                    title={item.title}
                    date={new Date(item.updated_at).toLocaleString('ru')}
                    description={item.text}
                    image={''}
                    avatarUrl="/images/image-8.jpg"
                  />
                </Grid>
              );
            })
          : null}
      </Grid>
    </div>
  );
}
