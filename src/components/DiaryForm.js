import React from 'react';
import axios from 'axios';

import UploadPhotoButton from './Buttons/UploadPhotoButton';
import DiaryEntries from './DiaryEntries';
import {
  Container,
  TextField,
  IconButton,
  Tooltip,
  Grid,
} from '@material-ui/core';

import AddCircleIcon from '@material-ui/icons/AddCircle';

class DiaryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleValue: '',
      descriptionValue: '',
      diaryEntries: [],
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.formSubmitHandler = this.formSubmitHandler.bind(this);
    this.deleteDiaryEntry = this.deleteDiaryEntry.bind(this);
  }

  componentDidMount() {
    this.hydrateStateWithLocalStorage();

    window.addEventListener(
      'beforeunload',
      this.saveStateToLocalStorage.bind(this)
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      'beforeunload',
      this.saveStateToLocalStorage.bind(this)
    );
    this.saveStateToLocalStorage();
  }

  saveStateToLocalStorage() {
    for (let key in this.state) {
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  hydrateStateWithLocalStorage() {
    for (let key in this.state) {
      if (localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key);
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          this.setState({ [key]: value });
        }
      }
    }
  }

  onChangeHandler(event) {
    const name = event.target.name;

    this.setState({
      [name]: event.target.value,
    });
  }

  formSubmitHandler(event) {
    event.preventDefault();
    const diaryEntries = [...this.state.diaryEntries];

    const date = new Date().toLocaleDateString();
    const id = 1 + Math.random();

    const newEntry = {
      title: this.state.titleValue,
      description: this.state.descriptionValue,
      date: date,
      id: id,
    };

    this.createNewRecord(newEntry.title, newEntry.description, 0);

    diaryEntries.unshift(newEntry);

    this.setState({
      titleValue: '',
      descriptionValue: '',
      diaryEntries,
    });
  }

  createNewRecord = async (title, text, publicFlag) => {
    return await axios.post(
      'https://limitless-savannah-84914.herokuapp.com/api/blog',
      {
        title,
        text,
        public: publicFlag,
      },
      {
        headers: {
          Authorization: 'bearer' + this.props.auth.access_token,
        },
      }
    );
  };

  deleteDiaryEntry(id) {
    const diaryEntries = [...this.state.diaryEntries];
    const updatedDiaryEntries = diaryEntries.filter((entry) => entry.id !== id);
    this.setState({
      diaryEntries: updatedDiaryEntries,
    });
  }

  render() {
    return (
      <Container maxWidth="md" className="DiaryForm">
        <form>
          <TextField
            fullWidth
            margin="dense"
            label="Название"
            variant="outlined"
            name="titleValue"
            value={this.state.titleValue}
            onChange={this.onChangeHandler}
          />
          <TextField
            multiline
            rows="10"
            fullWidth
            margin="dense"
            label="Описание"
            variant="outlined"
            name="descriptionValue"
            value={this.state.descriptionValue}
            onChange={this.onChangeHandler}
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
                  onClick={this.formSubmitHandler}
                  disabled={
                    !this.state.titleValue.length ||
                    !this.state.descriptionValue.length
                  }
                >
                  <AddCircleIcon fontSize="default" />
                </IconButton>
              </span>
            </Tooltip>
            <UploadPhotoButton />
          </Grid>
        </form>
        <DiaryEntries
          entries={this.state.diaryEntries}
          title={this.state.diaryEntries.title}
          description={this.state.diaryEntries.description}
          date={this.state.diaryEntries.date}
          id={this.state.diaryEntries.id}
          deleteDiaryEntry={this.deleteDiaryEntry}
        />
      </Container>
    );
  }
}

export default DiaryForm;
