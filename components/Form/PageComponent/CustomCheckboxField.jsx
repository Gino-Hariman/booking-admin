import CustomTimeList from '@/components/BookTimeList/CustomBookTimeList';
import { LoadingSpinner } from '@/components/Loading';
import FormField, { FormLabel } from './FormField';

const CustomCheckboxField = ({
  data,
  title,
  subTitle,
  register = () => {},
  name,
  errors,
  setValue,
  hasBorder,
  getValues,
  loading,
}) => {
  const isError = errors && errors[name];
  const r = register(name);

  if (!getValues().id_location) return <></>;

  if (loading) return <LoadingSpinner />;

  return (
    <FormField
      errorMessage={isError}
      hasBorder={hasBorder}
      labelComp={<FormLabel title={title} subTitle={subTitle} />}
      Comp={
        <CustomTimeList
          isError={isError}
          data={data?.times}
          ref={r?.ref}
          name={r?.name}
          setValue={setValue}
        />
      }
    />
  );
};

export default CustomCheckboxField;
