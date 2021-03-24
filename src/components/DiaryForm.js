import React, { useState, useEffect } from 'react';
import UploadPhotoButton from './Buttons/UploadPhotoButton';
import DiaryEntries from './DiaryEntries';
import {
  Container,
  TextField,
  IconButton,
  Tooltip,
  Grid,
  FormControlLabel,
  Checkbox,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  CardMedia,
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
  formControl: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    minWidth: 120,
  },
  form: {
    marginBottom: theme.spacing(4),
  },
}));

const initialState = {
  title: '',
  text: '',
  public: 0,
  blog_img: null,
  imagePreview: '',
  category_id: 1,
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
    const value = event.target.value;

    setState({
      ...state,
      [name]: name == 'public' ? +event.target.checked : value,
    });
  };

  const handleFileChange = (event) => {
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
    formData.append('category_id', state.category_id);

    const url = state.isEdit ? `/blog/${state.id}` : '/blog';

    setIsLoading(true);
    try {
      const result = await Api({
        url,
        method: 'POST',
        data: formData,
        headers: {
          Authorization: 'bearer' + auth.access_token,
          'Content-Type': 'multipart/form-data',
        },
      });

      if (state.isEdit) {
        const newEntries = entries.entriesList.map((entry) => {
          if (entry.id === result.data.id) {
            entry = result.data;
            return entry;
          }
        });
        return dispatchUpdateEntries(newEntries);
      }

      dispatchUpdateEntries([
        { ...result.data, blog_img: state.blog_img },
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
      <form className={classes.form}>
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
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="category-label">Категория</InputLabel>
          <Select
            labelId="category-label"
            id="category_id"
            label="Категория"
            value={state.category_id}
          >
            <MenuItem value={1}>Политика</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
          </Select>
        </FormControl>
        {state.isEdit && (
          <CardMedia
            style={{
              height: '150px',
              width: '200px',
              backgroundSize: 'contain',
            }}
            image={state.blog_img}
          />
        )}
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
          <FormControlLabel
            className={classes.formControl}
            control={
              <Checkbox
                name="public"
                color="primary"
                onChange={onChangeHandler}
                checked={!!state.public}
              />
            }
            label="Сделать запись открытой"
            labelPlacement="end"
          />
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
