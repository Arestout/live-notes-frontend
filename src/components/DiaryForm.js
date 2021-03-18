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
  title: '',
  text: '',
  public: 0,
  blog_img: null,
  imagePreview: '',
  isEdit: false,
};

export default function DiaryForm({ initialValues }) {
  const classes = useStyles();
  const [state, setState] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const { entries, dispatchUpdateEntries, dispatchDeleteEntry } = useEntries();
  const { auth } = useAuth();

  useEffect(() => {
    if (!initialValues) {
      return;
    }

    setState(initialValues);
  }, [initialValues]);

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
          blog_img: fileEvent.target.result,
          imagePreview: fileEvent.target.result,
        });
      };
      readerImage.readAsDataURL(file);
    }
  };

  const createNewRecord = async () => {
    const formData = new FormData();
    formData.append('title', state.title);
    formData.append('text', state.text);
    formData.append('public', state.public);
    formData.append('blog_img', state.blog_img);

    const method = state.isEdit ? 'PUT' : 'POST';
    const url = state.isEdit ? `/blog/${state.id}` : '/blog';
    console.log(formData);
    setIsLoading(true);
    try {
      const result = await Api({
        url,
        method,
        data: formData,
        headers: {
          Authorization: 'bearer' + auth.access_token,
          'Content-Type': 'multipart/form-data',
        },
      });
      dispatchUpdateEntries([
        { ...result.data, blog_img: state.imagePreview },
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

    createNewRecord();
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
          name="title"
          value={state.title}
          onChange={onChangeHandler}
        />
        <TextField
          multiline
          rows="10"
          fullWidth
          margin="dense"
          label="Описание"
          variant="outlined"
          name="text"
          value={state.text}
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
                disabled={!state.title.length || !state.text.length}
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
          deleteDiaryEntry={deleteDiaryEntry}
        />
      )}
    </Container>
  );
}
