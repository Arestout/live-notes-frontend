import React, { useState, useEffect } from 'react';
import UploadPhotoButton from './Buttons/UploadPhotoButton';
import DiaryEntries from './DiaryEntries';
import {
  Container,
  TextField,
  IconButton,
  Tooltip,
  Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Api from '../api/api';
import { useAuth } from '../hooks/useAuth';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useEntries } from '../hooks/useEntries';
import Loader from './Loader/Loader';

const useStyles = makeStyles((theme) => ({
  loader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const initialState = {
  titleValue: '',
  descriptionValue: '',
  image: null,
  imagePreview: '',
};

export default function DiaryForm(props) {
  const classes = useStyles();
  const [state, setState] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const {
    entries,
    dispatchUpdateEntries,
    dispatchFetchEntries,
    dispatchDeleteEntry,
  } = useEntries();
  const { auth } = useAuth();

  useEffect(() => {
    dispatchFetchEntries(auth.access_token);
  }, [dispatchFetchEntries, auth.access_token]);

  const onChangeHandler = (event) => {
    const name = event.target.name;

    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const handleFileChange = (event) => {
    console.log(event);
    const file = event.target.files[0];

    if (file) {
      if (file.size > 600 * 1024) {
        window.alert('Файл больше чем 600 кб.Выберите другой файл');
        return false;
      }
      const readerImage = new FileReader();
      readerImage.onload = (fileEvent) => {
        setState({
          ...state,
          image: file,
          imagePreview: fileEvent.target.result,
        });
      };
      readerImage.readAsDataURL(file);
    }
  };

  const createNewRecord = async (publicFlag) => {
    const formData = new FormData();
    formData.append('title', state.titleValue);
    formData.append('text', state.descriptionValue);
    formData.append('public', publicFlag);
    formData.append('blog_img', state.image);
    setIsLoading(true);
    try {
      const result = await Api({
        url: '/blog',
        method: 'POST',
        data: formData,
        headers: {
          Authorization: 'bearer' + auth.access_token,
          'Content-Type': 'multipart/form-data',
        },
      });
      dispatchUpdateEntries([
        { ...result.data, image: state.imagePreview },
        ...entries.entriesList,
      ]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    createNewRecord(0);
    setState(initialState);
  };

  const deleteDiaryEntry = async (id) => {
    const updatedDiaryEntries = entries.entriesList.filter(
      (entry) => entry.id !== id
    );
    dispatchUpdateEntries(updatedDiaryEntries);
    dispatchDeleteEntry({ id, access_token: auth.access_token });
  };

  return (
    <Container maxWidth="md" className="DiaryForm">
      <form>
        <TextField
          fullWidth
          margin="dense"
          label="Название"
          variant="outlined"
          name="titleValue"
          value={state.titleValue}
          onChange={onChangeHandler}
        />
        <TextField
          multiline
          rows="10"
          fullWidth
          margin="dense"
          label="Описание"
          variant="outlined"
          name="descriptionValue"
          value={state.descriptionValue}
          onChange={onChangeHandler}
        />
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <Tooltip title="Добавить новую запись в дневник">
            <span>
              <IconButton
                color="primary"
                aria-label="Создать запись"
                variant="contained"
                onClick={formSubmitHandler}
                disabled={
                  !state.titleValue.length || !state.descriptionValue.length
                }
              >
                <AddCircleIcon fontSize="default" />
              </IconButton>
            </span>
          </Tooltip>
          <UploadPhotoButton handleChange={handleFileChange} />
        </Grid>
      </form>
      {isLoading || entries.isLoading ? (
        <div className={classes.loader}>
          <Loader />
        </div>
      ) : (
        <DiaryEntries
          entries={entries.entriesList}
          title={entries.entriesList.title}
          description={entries.entriesList.description}
          date={entries.entriesList.date}
          id={entries.entriesList.id}
          deleteDiaryEntry={deleteDiaryEntry}
        />
      )}
    </Container>
  );
}
