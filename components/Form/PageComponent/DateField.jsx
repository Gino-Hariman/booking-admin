import DatePicker from '@/components/DatePicker';
import FormField, { FormLabel } from './FormField';

const DateField = ({
  title,
  register = () => {},
  placeholder,
  name,
  errors,
  setValue,
  getValues,
  hasBorder,
}) => {
  const isError = errors && errors[name];

  const r = register(name);
  return (
    <FormField
      hasBorder={hasBorder}
      labelComp={<FormLabel title={title} />}
      errorMessage={errors[name]?.message}
      Comp={
        <DatePicker
          placeholder={placeholder}
          name={name}
          ref={r}
          getValues={getValues}
          setValue={setValue}
        />
      }
    />
  );
};

export default DateField;
