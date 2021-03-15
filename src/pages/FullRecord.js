import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../hooks/useAuth';
import { Container, Typography } from '@material-ui/core';

export default function FullRecord(props) {
  const { auth } = useAuth();
  const [data, setData] = useState(null);
  const UserRecord = async () => {
    return await axios.get(
      'https://limitless-savannah-84914.herokuapp.com/api/blog/7',
      {
        headers: {
          Authorization: 'bearer' + auth.access_token,
        },
      }
    );
    setData(props.match.params.id);
  };

  return (
    <Container>
      <Typography component="p" align="center">
        ntrcn
      </Typography>
    </Container>
  );
}
