import React, { useEffect, useState } from 'react';
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
import { useLocation } from 'react-router';
import Api from '../api/api';
import CommentList from '../components/Comments/CommentList';
import CommentForm from '../components/Comments/CommentForm';

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
    height: '100hv',
  },
}));

export default function FullRecord(props) {
  const { auth } = useAuth();
  const { id } = props.match.params;
  const location = useLocation();

  const [recordData, setRecordData] = useState(null);
  const [userComments, setUserComments] = useState([]);

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
        setUserComments(response.data.comments);
      }
    });
  }, [auth.access_token, id, url]);
  return (
    <>
      <Container>
        {recordData ? (
          <>
            <CardHeader
              className={classes.root}
              avatar={<ImageAvatar />}
              title={recordData.title}
              subheader={new Date(recordData.updated_at).toLocaleString('ru')}
            />
            <Typography component="p">{recordData.text}</Typography>

            <CardMedia
              style={{ backgroundSize: 'contain', height: '600px' }}
              image={recordData.blog_img}
            />
            <Box mt={5} />
            {location.search === '?type=public' && (
              <>
                <CommentForm
                  blog_id={recordData.id}
                  comments={userComments}
                  setUserComments={setUserComments}
                />
                <CommentList
                  comments={userComments}
                  setUserComments={setUserComments}
                />
              </>
            )}
          </>
        ) : (
          <div className={classes.loader}>
            <Loader />
          </div>
        )}
      </Container>
    </>
  );
}
