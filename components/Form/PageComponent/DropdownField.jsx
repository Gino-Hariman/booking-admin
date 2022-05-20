import Dropdowns from '@/components/Dropdowns';
import FormField, { FormLabel } from './FormField';

const DropdownField = ({
  title,
  register = () => {},
  loading,
  placeholder,
  name,
  errors,
  data,
  setValue,
  hasBorder,
}) => {
  const isError = errors && errors[name];

  const r = register(name);
  console.log('data locaiton', data);
  return (
    <FormField
      hasBorder={hasBorder}
      labelComp={<FormLabel title={title} />}
      Comp={
        <Dropdowns
          rounded
          name={name}
          idItem="id_location"
          valueItem="name_location"
          placeholder={placeholder}
          setValue={setValue}
          datas={data}
          loading={loading}
        />
      }
      errorMessage={errors[name]?.message}
    />
  );
};

export default DropdownField;
