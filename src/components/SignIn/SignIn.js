import React, { useState, useEffect } from 'react';
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
import Copyright from '../Copyright/Copyright';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { Formik, Form } from 'formik';
import SignInSchema from './SignIn.schema';
import { useAuth } from '../../hooks/useAuth';
import Api from '../../api/api';

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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  errorMessage: { color: 'red' },
}));

const formStatusProps = {
  success: {
    message: 'Регистрация прошла успешно',
    type: 'success',
  },
  unauthorized: {
    message: 'Неправильные Email или пароль',
    type: 'error',
  },
  error: {
    message: 'Что-то пошло не так. Попробуйте еще раз',
    type: 'error',
  },
};

export default function SignIn() {
  const classes = useStyles();
  const history = useHistory();
  const { dispatchUpdateToken } = useAuth();

  const [displayFormStatus, setDisplayFormStatus] = useState(false);
  const [formStatus, setFormStatus] = useState({
    message: '',
    type: '',
  });

  const loginUser = async (data, setSubmitting) => {
    try {
      if (data) {
        const result = await Api.post('/auth/login', data);
        const { access_token } = result.data;
        dispatchUpdateToken(access_token);
        window.localStorage.setItem('access_token', access_token);
        if (access_token) {
          return history.push('/');
        }
      }
    } catch (error) {
      if (error.response.status === 401) {
        setFormStatus(formStatusProps.unauthorized);
      } else {
        setFormStatus(formStatusProps.error);
      }
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
          Войти
        </Typography>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={(values, actions) => {
            loginUser(values, actions.setSubmitting);
          }}
          validationSchema={SignInSchema}
        >
          {(props) => {
            const {
              values,
              touched,
              errors,
              handleBlur,
              handleChange,
              isSubmitting,
            } = props;
            return (
              <Form className={classes.form}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  value={values.email}
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  error={errors.email && touched.email ? true : false}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  value={values.password}
                  required
                  fullWidth
                  name="password"
                  label="Пароль"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  error={errors.password && touched.password ? true : false}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Запомнить меня"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  disabled={isSubmitting}
                >
                  Войти
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
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Забыли пароль?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to="/sign-up" component={RouterLink} variant="body2">
                      Нет аккаунта? Зарегистрируйтесь
                    </Link>
                  </Grid>
                </Grid>
              </Form>
            );
          }}
        </Formik>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
