import * as Yup from 'yup';

const SignInSchema = Yup.object().shape({
  email: Yup.string().email().required('Enter valid email-id'),
  password: Yup.string().matches(
    /^(?=.*([a-z]|[A-Z]))(?=.*[!@#$%^&*_+-=]).{6,255}/
  ),
});

export default SignInSchema;
