import PageForm from '@/components/Form/PageForm';
import PageFormActions from '@/components/Form/PageFormActions';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import React from 'react';
import { FILE_SIZE, SUPPORTED_FORMATS } from '@/utils/imageConfig';
import { useRouter } from 'next/router';
import usePutQuery from '@/hooks/usePutQuery';
import useToast from '@/hooks/useToast';

const EditForm = ({ data, timeData }) => {
  const router = useRouter();
  const { notify } = useToast();
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
              return value[0]?.size <= FILE_SIZE;
            })
            .test('fileFormat', 'Unsupported Format', (value) => {
              if (!value) return true;
              return SUPPORTED_FORMATS.includes(value[0]?.type);
            }),
          // .notRequired(),

          name_location: Yup.string().required('Lounge Name Required'),
          spot_name: Yup.string().required('Lounge Detail Required'),
          max_capacity: Yup.number().min(1).required(),
          times: Yup.string().required('Please select at least 1 time'),
        })
        .required()
    ),
    defaultValues: {
      image: data?.image,
      active: 1,
      id_location: router.query.id,
      name_location: data.name_location,
      spot_name: data.spot_name,
      max_capacity: data.max_capacity,
      times: data.times,
    },
    mode: 'onBlur',
  });

  console.log('data1235', data);

  const editLoungeMutation = usePutQuery('/location');

  const onSubmit = (dataSubmit) => {
    const formData = new FormData();
    Object.keys(dataSubmit).forEach((key, index) => {
      if (key === 'image' && typeof dataSubmit[key] === 'object') {
        console.log('masuk');
        return formData.append(key, dataSubmit[key][0]);
      }

      if (key === 'image' && dataSubmit[key] === undefined) {
        return formData.append('image', data?.image);
      }

      return formData.set(key, dataSubmit[key]);
    });
    console.log('data123', formData, dataSubmit);
    editLoungeMutation.mutate(formData, {
      onSuccess: (res) => {
        if (res.type === 'success') {
          notify('success', res.message);

          return router.push('/lounge-location');
        }
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
            previewURL: data.image,
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
          btnTitle="Save"
        />
      </PageForm>
    </>
  );
};
export default EditForm;
