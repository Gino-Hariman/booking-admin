import DataForm from '@/components/Form/DataForm';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/Buttons';
import roleConfig from '@/utils/roleConfig';
import usePostQuery from '@/hooks/usePostQuery';
import useToast from '@/hooks/useToast';
import { useRouter } from 'next/router';

const AddNewAdmin = ({}) => {
  const router = useRouter();
  const { notify } = useToast();
  const {
    register,
    getValues,
    setValue,
    reset,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(
      yup
        .object()
        .shape({
          username: yup.string().required('Username Required'),
          permission: yup.string().required('Role is required'),
          password: yup.string().min(3).max(32).required(),
          confirmPassword: yup
            .string()
            .oneOf([yup.ref('password'), null], 'Password must match'),
        })
        .required()
    ),
    defaultValues: {
      // username: '',
      // password: '',
    },
    mode: 'onBlur',
  });

  const addAdminMutation = usePostQuery('/add');

  const onSubmit = (data) => {
    console.log('data admin', data);
    addAdminMutation.mutate(data, {
      onSuccess: (res) => {
        if (res.type === 'success') {
          notify('success', 'Successfully add admin');
          reset();
          return router.reload();
        }
      },
      onError: (err) => {
        notify('error', 'Sorry, something went wrong!');
      },
    });
  };

  console.log('errors123', errors, getValues());
  return (
    <div className="relative flex-auto mb-4">
      <DataForm
        forms={[
          {
            label: 'Admin Username',
            name: 'username',
            placeholder: 'admin username',
            type: 'TextInput',
          },
          {
            label: 'Role',
            loading: false,
            name: 'permission',
            placeholder: 'Select Role',
            data: roleConfig,
            idItem: 'name_role',
            valueItem: 'name_role',
            type: 'DropdownField',
          },
          {
            label: 'Password',
            name: 'password',
            placeholder: 'admin password',
            type: 'PassInput',
          },
          {
            label: 'Confirm Password',
            name: 'confirmPassword',
            placeholder: 'confirmation password',
            type: 'PassInput',
          },
        ]}
        getValues={getValues}
        setValue={setValue}
        register={register}
        errors={errors}
      />
      <div className="flex items-center justify-center mt-12">
        <Button
          isDisabled={!isValid}
          title="Continue"
          onClick={handleSubmit(onSubmit)}
        />
      </div>
    </div>
  );
};

export default AddNewAdmin;
