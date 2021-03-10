import * as Yup from 'yup';

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email().required('Enter valid email-id'),
  name: Yup.string().required('Please enter full name'),
  login: Yup.string().required('Please enter login'),
  password: Yup.string()
    .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*_+-=]).{6,20}\S$/)
    .required(
      'Please valid password. One uppercase, one lowercase, one special character and no spaces'
    ),
  confirmPassword: Yup.string()
    .required('Required')
    .test('password-match', 'Password musth match', function (value) {
      return this.parent.password === value;
    }),
});

export default SignUpSchema;
