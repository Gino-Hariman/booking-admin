import Breadcrumbs from '@/components/Breadcrumbs';
import AdminLayout from '@/layout/AdminLayout';
import PageForm from '@/components/Form/PageForm';
import PageFormActions from '@/components/Form/PageFormActions';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import dayjs from 'dayjs';
import { dateFormat } from '@/utils/dateTimeConfig';
import useGetQuery from '@/hooks/useGetQuery';
import usePostQuery from '@/hooks/usePostQuery';
import useToast from '@/hooks/useToast';
import { useRouter } from 'next/router';

const CustomNewBookingSchedule = ({ timeData }) => {
  const { notify } = useToast();
  const router = useRouter();
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
          id_location: Yup.string().required('Lounge Name Required'),
          date: Yup.string().required('Date Required'),
          limit: Yup.number().min(1).required(),
          id_location_time_list: Yup.string().required('Time Rquired'),
        })
        .required()
    ),
    defaultValues: {
      limit: 1,
    },
    mode: 'onBlur',
  });

  const { data: loungeDetail, isFetching: loungeDetailFetch } = useGetQuery(
    ['times', 'custom-location', getValues().id_location],
    '/location/detail',
    {
      params: { id_location: getValues().id_location },
      enabled: getValues().id_location ? true : false,
      onSettled: (res) => {
        setValue('limit', res.max_capacity, {
          shouldValidate: true,
          shouldDirty: true,
        });
      },
    }
  );

  const { data: locationData, isFetching: locationFetch } = useGetQuery(
    ['simple', 'location'],
    '/location/all',
    {
      onSuccess: (res) => console.log('res123', res),
      onError: (err) => console.log('er123', er),
    }
  );

  console.log('locationData', locationData);

  const customLoungeMutation = usePostQuery('/location/custom');

  const onSubmit = (data) => {
    console.log('data214', data);
    customLoungeMutation.mutate(data, {
      onSuccess: (res) => {
        notify('success', 'Successfully Add Custom Lounge Schedule');
        router.replace('/lounge-location');
      },
      onError: (err) => {
        notify('error', 'Sorry, Something went wrong!');
      },
    });
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <>
      <Breadcrumbs />
      <PageForm
        formTitle="Add New Custom Lounge Schedule"
        forms={[
          {
            title: 'Lounge Locatioin',
            loading: locationFetch,
            name: 'id_location',
            placeholder: 'Select Location',
            data: locationData,
            idItem: 'id_location',
            valueItem: 'name_location',
            type: 'DropdownField',
          },
          {
            single: true,
            title: 'Select Date',
            name: 'date',
            type: 'DateField',
            placeholder: dayjs().format(dateFormat),
          },
          {
            idItem: 'max_capacity',
            title: 'Max Capacity',
            name: 'limit',
            type: 'CustomCounterField',
            hasBorder: true,
          },
          {
            data: loungeDetail,
            loading: loungeDetailFetch,
            title: 'Disabled Time',
            subTitle:
              'Please select Default time that available for students to at Lounge',
            name: 'id_location_time_list',
            type: 'CustomCheckboxField',
          },
        ]}
        getValues={getValues}
        setValue={setValue}
        register={register}
        errors={errors}
      >
        <PageFormActions
          handleCancel={handleBack}
          handleAdd={handleSubmit(onSubmit)}
          btnTitle="Add New"
        />
      </PageForm>
    </>
  );
};

CustomNewBookingSchedule.layout = AdminLayout;

export default CustomNewBookingSchedule;
