import Breadcrumbs from '@/components/Breadcrumbs';
import AdminLayout from '@/layout/AdminLayout';
import PageForm from '@/components/Form/PageForm';
import PageFormActions from '@/components/Form/PageFormActions';
import locationData from '@/_mocks/locationData';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import dayjs from 'dayjs';
import { dateFormat } from '@/utils/dateTimeConfig';

const CustomNewBookingSchedule = () => {
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
          lounge_name: Yup.string().required('Lounge Name Required'),
          max_capacity: Yup.number().min(1).required(),
        })
        .required()
    ),
    defaultValues: {
      lounge_name: '',
      max_capacity: 1,
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
        formTitle="Add New Custom Lounge Schedule"
        forms={[
          {
            title: 'Lounge Name',
            name: 'lounge_name',
            placeholder: 'Select Location',
            data: locationData,
            type: 'DropdownField',
          },
          {
            title: 'Select Date',
            name: 'select_date',
            type: 'DateField',
            placeholder: dayjs().format(dateFormat),
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

CustomNewBookingSchedule.layout = AdminLayout;

export default CustomNewBookingSchedule;
