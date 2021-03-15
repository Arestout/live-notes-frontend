import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Copyright from '../Copyright/Copyright';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { Formik, Form } from 'formik';
import axios from 'axios';
import SignUpSchema from './SignUp.schema';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const formStatusProps = {
  success: {
    message: 'Регистрация прошла успешно',
    type: 'success',
  },
  duplicate: {
    message: 'Email уже существует',
    type: 'error',
  },
  error: {
    message: 'Что-то пошло не так. Попробуйте еще раз',
    type: 'error',
  },
};

export default function SignUp() {
  const classes = useStyles();
  const history = useHistory();

  const [displayFormStatus, setDisplayFormStatus] = useState(false);
  const [formStatus, setFormStatus] = useState({
    message: '',
    type: '',
  });

  const createNewUser = async (data, setSubmitting) => {
    try {
      if (data) {
        console.log(data);
        const response = await axios.post(
          'https://limitless-savannah-84914.herokuapp.com/api/auth/registration',
          data
        );

        if (response.data?.message === 'Successfully registration!') {
          return history.push('/sign-in');
        } else {
          setFormStatus(formStatusProps.error);
          setSubmitting(false);
        }
      }
    } catch (error) {
      const response = error.response;
      if (response?.message === 'The email has already been taken.') {
        setFormStatus(formStatusProps.duplicate);
      } else {
        setFormStatus(formStatusProps.error);
      }
    } finally {
      setDisplayFormStatus(true);
      setSubmitting(false);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Регистрация
        </Typography>
        <Formik
          initialValues={{
            name: '',
            password: '',
            confirmPassword: '',
            login: '',
            email: '',
            birthday: new Date(new Date()).toJSON().slice(0, 10),
          }}
          onSubmit={(values, actions) => {
            createNewUser(values, actions.setSubmitting);
            // setTimeout(() => {
            //   actions.setSubmitting(false);
            // }, 500);
          }}
          validationSchema={SignUpSchema}
        >
          {(props) => {
            const {
              values,
              touched,
              errors,
              handleBlur,
              handleChange,
              setFieldValue,
              isSubmitting,
            } = props;
            return (
              <Form className={classes.form}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      autoComplete="name"
                      value={values.name}
                      name="name"
                      variant="outlined"
                      required
                      fullWidth
                      id="name"
                      label="Имя"
                      autoFocus
                      helperText={
                        errors.name && touched.name
                          ? 'Введите ваше имя.'
                          : 'Введите ваше имя.'
                      }
                      error={errors.name && touched.name ? true : false}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      autoComplete="login"
                      value={values.login}
                      name="login"
                      variant="outlined"
                      required
                      fullWidth
                      id="login"
                      label="Логин"
                      helperText={
                        errors.login && touched.login
                          ? 'Введите ваш логин.'
                          : 'Введите ваш логин.'
                      }
                      error={errors.login && touched.login ? true : false}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      autoComplete="email"
                      value={values.email}
                      variant="outlined"
                      required
                      fullWidth
                      id="email"
                      label="Email"
                      name="email"
                      helperText={
                        errors.email && touched.email
                          ? 'Введите ваш валидный Email.'
                          : 'Введите ваш Email'
                      }
                      error={errors.email && touched.email ? true : false}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      autoComplete="current-password"
                      value={values.password}
                      variant="outlined"
                      required
                      fullWidth
                      name="password"
                      label="Пароль"
                      type="password"
                      id="password"
                      helperText={
                        errors.password && touched.password
                          ? 'Минимум 6 знаков и обязательно один символ.'
                          : 'Минимум 6 знаков и обязательно один символ.'
                      }
                      error={errors.password && touched.password ? true : false}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      value={values.confirmPassword}
                      variant="outlined"
                      required
                      fullWidth
                      name="confirmPassword"
                      id="confirmPassword"
                      label="Подтвердить пароль"
                      type="password"
                      helperText={
                        errors.confirmPassword && touched.confirmPassword
                          ? errors.confirmPassword
                          : 'Введите ваш пароль еще раз'
                      }
                      error={
                        errors.confirmPassword && touched.confirmPassword
                          ? true
                          : false
                      }
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        required
                        format="dd/MM/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Дата рождения"
                        value={values.birthday}
                        onChange={(value) => {
                          console.log({ value });
                          setFieldValue(
                            'birthday',
                            new Date(value).toJSON()?.slice(0, 10)
                          );
                        }}
                        autoOk
                        KeyboardButtonProps={{
                          'aria-label': 'изменить дату рождения',
                        }}
                      />
                    </MuiPickersUtilsProvider>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          value="allowExtraEmails"
                          color="primary"
                          required
                        />
                      }
                      label="Я согласен/согласна с политикой конфиденциальности *"
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  disabled={isSubmitting}
                >
                  Зарегистрироваться
                </Button>
                {displayFormStatus && (
                  <div className="formStatus">
                    {formStatus.type === 'error' ? (
                      <p className={classes.errorMessage}>
                        {formStatus.message}
                      </p>
                    ) : formStatus.type === 'success' ? (
                      <p className={classes.successMessage}>
                        {formStatus.message}
                      </p>
                    ) : null}
                  </div>
                )}
                <Grid container justify="flex-end">
                  <Grid item>
                    <Link to="/sign-in" component={RouterLink} variant="body2">
                      Уже есть аккаунт? Войти
                    </Link>
                  </Grid>
                </Grid>
              </Form>
            );
          }}
        </Formik>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
