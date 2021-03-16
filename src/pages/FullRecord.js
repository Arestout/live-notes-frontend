import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../hooks/useAuth';
import ImageAvatar from '../components/Avatar/Avatar';
import {
  CardHeader,
  Container,
  Typography,
  CardMedia,
  Box,
} from '@material-ui/core';
import Loader from '../components/Loader/Loader';
import Copyright from '../components/Copyright/Copyright';

export default function FullRecord(props) {
  const { auth } = useAuth();
  const { id } = props.match.params;

  const [recordData, setRecordData] = useState(null);

  useEffect(() => {
    const UserRecord = async () => {
      return await axios.get(
        `https://limitless-savannah-84914.herokuapp.com/api/blog/${id}`,
        {
          headers: {
            Authorization: 'bearer' + auth.access_token,
          },
        }
      );
    };
    UserRecord().then((response) => {
      if (response.status === 200) {
        setRecordData(response.data);
      }
    });
  }, [auth.access_token, id]);

  return (
    <Container>
      {recordData ? (
        <>
          <CardHeader
            avatar={<ImageAvatar />}
            title={recordData.title}
            subheader={new Date(recordData.updated_at).toLocaleString('ru')}
          />
          <CardMedia
            style={{ height: '600px' }}
            image={
              recordData.blog_img || 'https://picsum.photos/seed/picsum/200/300'
            }
          />
          <Typography component="p">{recordData.text}</Typography>
        </>
      ) : (
        <Loader />
      )}
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
