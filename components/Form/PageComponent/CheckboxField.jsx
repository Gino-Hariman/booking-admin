import BookTimeList from '@/components/BookTimeList';
import FormField, { FormLabel } from './FormField';

const CheckboxField = ({
  data,
  title,
  subTitle,
  register = () => {},
  name,
  errors,
  setValue,
  hasBorder,
}) => {
  const isError = errors && errors[name];

  const r = register(name);

  return (
    <FormField
      errorMessage={isError}
      hasBorder={hasBorder}
      labelComp={<FormLabel title={title} subTitle={subTitle} />}
      Comp={
        <BookTimeList
          isError={isError}
          data={data}
          ref={r?.ref}
          name={r?.name}
          setValue={setValue}
        />
      }
    />
  );
};

export default CheckboxField;
