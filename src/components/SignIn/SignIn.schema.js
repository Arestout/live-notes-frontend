import * as Yup from 'yup';

const SignInSchema = Yup.object().shape({
  email: Yup.string().email().required('Enter valid email-id'),
  password: Yup.string().matches(
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()]).{5,20}\S$/
  ),
});

export default SignInSchema;
