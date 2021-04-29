import React, { useEffect, useState } from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import CategoryNav from '../components/DiariesCards/CategoryNav';
import DiariesCards from '../components/DiariesCards/DiariesCards';
import { useAuth } from '../hooks/useAuth';
import { useFetch } from '../hooks/useFetch';
import Loader from '../components/Loader/Loader';
import { useParams, useHistory } from 'react-router-dom';
import DiaresPagination from '../components/DiariesCards/DiaresPagination';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  loader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
}));

export default function Diaries() {
  const classes = useStyles();
  const { auth } = useAuth();

  const history = useHistory();
  const { categoryId, pageId = 1 } = useParams();
  const url = categoryId
    ? `/blogs/category/${categoryId}`
    : `/blogs_pagination/${pageId}`;
  const { isLoading, response, error, doFetch } = useFetch(url);

  useEffect(() => {
    doFetch({
      headers: {
        Authorization: 'bearer' + auth.access_token,
      },
    });
  }, [doFetch, auth.access_token, url]);

  const setCategory = (event) => {
    const categoryId = event.target?.dataset?.id;
    if (categoryId) {
      history.push(`/diaries/cat/${categoryId}`);
    }
  };

  if (isLoading) {
    return (
      <div className={classes.loader}>
        <Loader />
      </div>
    );
  }
  const handleClick = () => {
    setFlag(!flag);
  };

  const handlePageChange = (event, number) => {
    history.push(`/diaries/${number}`);
  };

  return (
    <>
      <CategoryNav setCategory={setCategory} color={handleClick} />
      <DiariesCards
        diaries={categoryId ? response?.data : response?.data?.blogs}
      />
      <Box mt={5} />
      {!categoryId && (
        <DiaresPagination
          count={response?.data?.pages}
          page={pageId}
          onChange={handlePageChange}
        />
      )}
      <Box mt={5} />
    </>
  );
}
