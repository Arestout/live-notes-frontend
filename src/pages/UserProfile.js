import React from 'react';
import '../App.css';
import { useAuth } from '../hooks/useAuth';

import ImageAvatar from '../components/Avatar/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import SaveIcon from '@material-ui/icons/Save';
import {
  Box,
  Container,
  Fab,
  Grid,
  TextField,
  Tooltip,
  Typography,
} from '@material-ui/core';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
  avatarContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
}));

export default function UserProfile() {
  const { auth } = useAuth();
  const { user } = auth;
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(user.birthday);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <>
      <Container className="App" maxWidth="md">
        <CssBaseline />
        <div className={classes.avatarContainer}>
          <ImageAvatar />
          <p>{user.login}</p>
        </div>
        <Box mt={5}></Box>
        <Typography variant="h6" gutterBottom>
          Профиль
        </Typography>
        <Box mt={5}></Box>
        <Grid container spacing={3}>
          <Grid item sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="Имя"
              fullWidth
              defaultValue={user.name}
              autoComplete="given-name"
            />
          </Grid>
          <Grid item sm={6}>
            <TextField
              required
              id="login"
              name="lastName"
              label="Логин"
              defaultValue={user.login}
              fullWidth
              autoComplete="family-name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              defaultValue={user.email}
              autoComplete="shipping address-line1"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="password"
              name="password"
              label="Пароль"
              type="password"
              fullWidth
              defaultValue="Hello World"
              autoComplete="shipping address-line"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="confirmPassword"
              name="confirmPassword"
              label="Подтвердить пароль"
              fullWidth
              type="password"
              defaultValue="Hello World"
            />
          </Grid>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Дата рождения"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
        </Grid>
        <Box mt={5}></Box>
        <Tooltip title="сохранить изменеия" aria-label="save">
          <Fab color="primary">
            <SaveIcon />
          </Fab>
        </Tooltip>
      </Container>
      <Box mt={5}></Box>
    </>
  );
}
