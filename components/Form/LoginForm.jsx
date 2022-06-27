import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import DataForm from './DataForm';
import { Button } from '../Buttons';
import { useAuth } from '@/context/AuthenticationContext';

const LoginForm = () => {
  const { login } = useAuth();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(
      Yup.object().shape({
        username: Yup.string()
          .required('Email Required')
          .matches(
            '(@lecturer.uph.edu|@uph.edu)',
            'only can @lecturer.uph.edu'
          ),
        password: Yup.string('Password format is not valid').required(
          'Password Required'
        ),
      })
    ),
    defaultValues: {
      username: '',
      password: '',
    },
    mode: 'onBlur',
  });

  const onSubmit = (data) => {
    login(data);
  };

  return (
    <form className="flex flex-col">
      <DataForm
        forms={[
          {
            label: 'Email',
            name: 'username',
            placeholder: 'username',
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
      <div className="mt-12 text-center">
        <Button
          title="Login"
          isDisabled={!isValid}
          onClick={handleSubmit(onSubmit)}
        />
      </div>
    </form>
  );
};

export default LoginForm;
