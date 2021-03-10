import * as Yup from 'yup';

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email().required('Enter valid email-id'),
  name: Yup.string().required('Please enter full name'),
  login: Yup.string().required('Please enter login'),
  password: Yup.string()
    .matches(/^(?=.*([a-z]|[A-Z]))(?=.*[!@#$%^&*_+-=]).{6,255}/)
    .required(
      'Please valid password. One uppercase, one lowercase, one special character and no spaces'
    ),
  confirmPassword: Yup.string()
    .required('Required')
    .test('password-match', 'Пароли должны совпадать', function (value) {
      return this.parent.password === value;
    }),
});

export default SignUpSchema;
