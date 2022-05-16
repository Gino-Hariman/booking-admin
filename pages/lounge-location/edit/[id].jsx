import Breadcrumbs from '@/components/Breadcrumbs';
import PageForm from '@/components/Form/PageForm';
import PageFormActions from '@/components/Form/PageFormActions';
import AdminLayout from '@/layout/AdminLayout';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

const EditLoungeLocation = () => {
  const {
    register,
    getValues,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(
      Yup.object()
        .shape({
          upload_photo: Yup.string().required('Photo Required'),
          lounge_name: Yup.string().required('Lounge Name Required'),
          lounge_detail: Yup.string().required('Lounge Detail Required'),
          max_capacity: Yup.number().min(1).required(),
        })
        .required()
    ),
    defaultValues: {
      upload_photo: '',
      lounge_name: 'bimbim',
      lounge_detail: '',
      max_capacity: 2,
    },
    mode: 'onBlur',
  });

  const onSubmit = (data) => {
    console.log('data', data);
  };
  return (
    <>
      <Breadcrumbs />
      <PageForm
        formTitle="Add New Lounge Location"
        forms={[
          {
            title: 'Upload Photos',
            subTitle:
              'Please upload photos with minimum resolution 300 x 300 and max size of the picture is 1MB',
            name: 'upload_photo',
            type: 'UploadImageField',
            hasBorder: true,
          },
          {
            title: 'Input Lounge Name',
            placeholder: 'Ex. Aryaduta Lounge',
            name: 'lounge_name',
            type: 'InputField',
          },
          {
            title: 'Lounge Detail',
            placeholder: 'Ex. 5th Floor',
            name: 'lounge_detail',
            type: 'InputField',
          },
          {
            title: 'Max Capacity',
            name: 'max_capacity',
            type: 'CounterField',
            hasBorder: true,
          },
          {
            title: 'Booking Time',
            subTitle:
              'Please select Default time that available for students to at Lounge',
            name: 'booking_time',
            type: 'CheckboxField',
          },
        ]}
        getValues={getValues}
        setValue={setValue}
        register={register}
        errors={errors}
      >
        <PageFormActions />
      </PageForm>
    </>
  );
};

EditLoungeLocation.layout = AdminLayout;

export default EditLoungeLocation;
