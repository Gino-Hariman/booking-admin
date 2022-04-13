import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import DataForm from './DataForm';
import Container from '../Container';
import { Button } from '../Buttons';

const LoginForm = () => {
  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(
      Yup.object().shape({
        email: Yup.string().required('Email Required').email('Invalid Email'),
        password: Yup.string('Password format is not valid').required(
          'Password Required'
        ),
      })
    ),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return (
    <form className="flex flex-col">
      <DataForm
        forms={[
          {
            label: 'Student Email',
            name: 'email',
            placeholder: 'youremail@email.com',
            type: 'TextInput',
          },
          {
            label: 'Password',
            name: 'password',
            placeholder: 'Write Password',
            type: 'PassInput',
          },
        ]}
        register={register}
        errors={errors}
      />
      <Button title="Login" onClick={() => console.log('Login!!')} />
    </form>
  );
};

export default LoginForm;
