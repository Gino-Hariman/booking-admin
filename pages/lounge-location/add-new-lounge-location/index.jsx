import Breadcrumbs from '@/components/Breadcrumbs';
import PageFormActions from '@/components/Form/PageFormActions';
import usePostQuery from '@/hooks/usePostQuery';
import useToast from '@/hooks/useToast';
import AdminLayout from '@/layout/AdminLayout';
import { FILE_SIZE, SUPPORTED_FORMATS } from '@/utils/imageConfig';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import PageForm from '@/components/Form/PageForm';

export const getServerSideProps = async ({ req }) => {
  const token = req.cookies.token;

  if (!Boolean(token)) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    };
  }
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_MAIN_HOST}/time`);

  return {
    props: { timeData: data },
  };
};

const AddLoungeLocation = ({ timeData }) => {
  const { notify } = useToast();
  const router = useRouter();
  const {
    register,
    getValues,
    setValue,
    reset,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(
      Yup.object()
        .shape({
          image: Yup.mixed()
            .test('fileSize', 'The file is too large', (value) => {
              if (!value) return true;
              return value[0].size <= FILE_SIZE;
            })
            .test('fileFormat', 'Unsupported Format', (value) => {
              if (!value) return true;
              return SUPPORTED_FORMATS.includes(value[0].type);
            })
            .required('Image Required'),

          name_location: Yup.string().required('Lounge Name Required'),
          spot_name: Yup.string().required('Lounge Detail Required'),
          max_capacity: Yup.number().min(1).required(),
          times: Yup.string().required('Please select at least 1 time'),
        })
        .required()
    ),
    defaultValues: {
      image: undefined,
      name_location: '',
      spot_name: '',
      max_capacity: 1,
      times: '',
    },
    mode: 'onBlur',
  });

  const addLoungeMutation = usePostQuery('/location');

  const onSubmit = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((key, index) => {
      if (key === 'image') return formData.append(key, data[key][0]);
      formData.set(key, data[key]);
    });

    addLoungeMutation.mutate(formData, {
      onSuccess: (res) => {
        notify('success', 'Successfully add Lounge Location');
        reset();
        router.push('/lounge-location');
      },
      onError: (err) => {
        notify('error', 'Failed to add Lounge Location');
      },
    });
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
            name: 'image',
            type: 'UploadImageField',
            hasBorder: true,
          },
          {
            title: 'Input Lounge Name',
            placeholder: 'Ex. Aryaduta Lounge',
            name: 'name_location',
            type: 'InputField',
          },
          {
            title: 'Lounge Detail',
            placeholder: 'Ex. 5th Floor',
            name: 'spot_name',
            type: 'InputField',
          },
          {
            title: 'Max Capacity',
            name: 'max_capacity',
            type: 'CounterField',
            hasBorder: true,
          },
          {
            data: timeData,
            title: 'Booking Time',
            subTitle:
              'Please select Default time that available for students to at Lounge',
            name: 'times',
            type: 'CheckboxField',
          },
        ]}
        getValues={getValues}
        setValue={setValue}
        register={register}
        errors={errors}
      >
        {/* <ConfirmModal
          open={open}
          setOpen={setOpen}
          modalTitle="Sure to do these changes?"
          modalContentTitle="If you do these changes, the system will not display the lounge location on the student lounge reservation website"
          lBtnTitle={`Yes, Add New Location`}
          rBtnTitle="No, Discard Changes"
          handleSubmit={handleSubmit(onSubmit)}
        > */}
        <PageFormActions
          isDisabled={!isValid}
          handleCancel={() => router.back()}
          handleAdd={handleSubmit(onSubmit)}
          btnTitle="Add New"
        />
        {/* </ConfirmModal> */}
      </PageForm>
    </>
  );
};

AddLoungeLocation.layout = AdminLayout;

export default AddLoungeLocation;
