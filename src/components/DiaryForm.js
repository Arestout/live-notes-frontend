import React from 'react';
import DiaryEntries from './DiaryEntries';
import { Container, TextField, Button, Tooltip } from '@material-ui/core';

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

    diaryEntries.unshift(newEntry);

    this.setState({
      titleValue: '',
      descriptionValue: '',
      diaryEntries,
    });
  }

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
          <Tooltip title="Добавить новую запись в дневник">
            <Button
              style={{
                color: '#fff',
                width: '80px',
                background: '#999',
              }}
              variant="contained"
              onClick={this.formSubmitHandler}
              disabled={
                !this.state.titleValue.length ||
                !this.state.descriptionValue.length
              }
            >
              Создать
            </Button>
          </Tooltip>
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
