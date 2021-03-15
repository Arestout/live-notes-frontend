import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../hooks/useAuth';
import Card from '../components/Cards';
import { Grid } from '@material-ui/core';

export default function MyDiaryList() {
  const { auth } = useAuth();
  const allUserRecord = async () => {
    return await axios.get(
      'https://limitless-savannah-84914.herokuapp.com/api/blog',
      {
        headers: {
          Authorization: 'bearer' + auth.access_token,
        },
      }
    );
  };
  const [data, setData] = useState(null);

  useEffect(() => {
    async function req() {
      try {
        const response = await allUserRecord();
        setData(Object.values(response.data));
      } catch (e) {
        console.error(e);
      }
    }
    req();
  }, []); // eslint-disable-line

  return (
    <div style={{ padding: 12 }}>
      <Grid container spacing={3}>
        {data
          ? data.map((item) => {
              return (
                <Grid item xs={6} sm={3} key={item.id}>
                  <Card
                    title={item.title}
                    date={new Date(item.updated_at).toLocaleString('ru')}
                    description={item.text}
                    image={''}
                    avatarUrl="/images/image-8.jpg"
                    id={item.id}
                  />
                </Grid>
              );
            })
          : null}
      </Grid>
    </div>
  );
}
