import BookTimeList from '@/components/BookTimeList';
import EditBookTimeList from '@/components/BookTimeList/EditBookTimeList';
import FormField, { FormLabel } from './FormField';

const CheckboxField = ({
  data,
  isEdit = false,
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
        isEdit ? (
          <EditBookTimeList
            isError={isError}
            data={data}
            ref={r?.ref}
            name={r?.name}
            setValue={setValue}
          />
        ) : (
          <BookTimeList
            isError={isError}
            data={data}
            ref={r?.ref}
            name={r?.name}
            setValue={setValue}
          />
        )
      }
    />
  );
};

export default CheckboxField;
