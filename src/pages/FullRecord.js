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
import { makeStyles } from '@material-ui/core/styles';
import Loader from '../components/Loader/Loader';
import Copyright from '../components/Copyright/Copyright';
import CategoryButton from '../components/Buttons/CategoryButton';
import { useLocation } from 'react-router';
import Api from '../api/api';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    width: '100%',
  },
  loader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
}));

export default function FullRecord(props) {
  const { auth } = useAuth();
  const { id } = props.match.params;
  const location = useLocation();

  const [recordData, setRecordData] = useState(null);

  const classes = useStyles();

  const url =
    location.search === '?type=public' ? `/blogs/${id}` : `/blog/${id}`;

  useEffect(() => {
    const UserRecord = async () => {
      return await Api.get(url, {
        headers: {
          Authorization: 'bearer' + auth.access_token,
        },
      });
    };
    UserRecord().then((response) => {
      if (response.status === 200) {
        setRecordData(response.data);
      }
    });
  }, [auth.access_token, id, url]);
  return (
    <Container>
      {recordData ? (
        <>
          <CardHeader
            avatar={<ImageAvatar />}
            title={recordData.title}
            subheader={new Date(recordData.updated_at).toLocaleString('ru')}
          />
          {recordData.blog_img !== 'null' && (
            <>
              <CardMedia
                style={{ backgroundSize: 'contain', height: '600px' }}
                image={recordData.blog_img}
              />
              <Box mt={5} />
            </>
          )}
          <Typography component="p">{recordData.text}</Typography>
        </>
      ) : (
        <div className={classes.loader}>
          <Loader />
        </div>
      )}
      <Box mt={5}></Box>
    </Container>
  );
}
