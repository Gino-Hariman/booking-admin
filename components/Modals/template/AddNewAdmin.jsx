import DataForm from '@/components/Form/DataForm';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/Buttons';

const AddNewAdmin = ({ register, errors }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(
      yup.object().shape({
        name: yup.string().required('Student Name Required'),
        username: yup.string().required(),
        password: yup.string().when('changePassword', {
          is: true,
          then: yup.string().min(6).max(32).required(),
          otherwise: yup.string(),
        }),
        confirmPassword: yup
          .string()
          .oneOf([yup.ref('password'), null], 'Password must match'),
      })
    ),
    defaultValues: {
      name: '',
      username: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'onBlur',
  });

  const onSubmit = () => {
    console.log('submit');
  };
  return (
    <div className="relative flex-auto mb-4">
      <DataForm
        forms={[
          {
            label: 'Admin Name',
            name: 'name',
            placeholder: 'admin name',
            type: 'TextInput',
          },
          {
            label: 'Admin Username',
            name: 'username',
            placeholder: 'admin username',
            type: 'TextInput',
          },
          {
            label: 'Password',
            name: 'password',
            placeholder: 'admin password',
            type: 'PassInput',
          },
          {
            label: 'Confirm Password',
            name: 'confirm_password',
            placeholder: 'confirmation password',
            type: 'PassInput',
          },
        ]}
        register={register}
        errors={errors}
      />
      <div className="flex items-center justify-center mt-12">
        <Button title="Continue" onClick={handleSubmit(onSubmit)} />
      </div>
    </div>
  );
};

export default AddNewAdmin;
