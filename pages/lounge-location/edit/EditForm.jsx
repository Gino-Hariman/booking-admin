import PageForm from '@/components/Form/PageForm';
import PageFormActions from '@/components/Form/PageFormActions';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import React from 'react';
import { FILE_SIZE, SUPPORTED_FORMATS } from '@/utils/imageConfig';
import { useRouter } from 'next/router';

const EditForm = ({ data, timeData }) => {
  const router = useRouter();
  const {
    register,
    getValues,
    setValue,
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
            }),

          name_location: Yup.string().required('Lounge Name Required'),
          spot_name: Yup.string().required('Lounge Detail Required'),
          max_capacity: Yup.number().min(1).required(),
          times: Yup.string().required('Please select at least 1 time'),
        })
        .required()
    ),
    defaultValues: {
      image: data.image,
      name_location: data.name_location,
      spot_name: data.spot_name,
      max_capacity: data.max_capacity,
      times: data.times,
    },
    mode: 'onBlur',
  });

  const onSubmit = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((key, index) => {
      if (key === 'image') return formData.append(key, data[key][0]);
      formData.set(key, data[key]);
    });

    addLoungeMutation.mutate(formData, {
      onSuccess: (res) => {
        console.log('res add', res);
        notify('success', 'Successfully add Lounge Location');
        router.push('/lounge-location');
      },
      onError: (err) => {
        notify('error', 'Failed to add Lounge Location');
      },
    });
  };
  return (
    <>
      <PageForm
        formTitle="Edit Lounge Location"
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
            data: data.times,
            title: 'Booking Time',
            isEdit: true,
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
        <PageFormActions
          isDisabled={!isValid}
          handleCancel={() => router.back()}
          handleAdd={handleSubmit(onSubmit)}
        />
      </PageForm>
    </>
  );
};
export default EditForm;
