import Dropdowns from '@/components/Dropdowns';
import FormField, { FormLabel } from './FormField';

const DropdownField = ({
  title,
  register = () => {},
  placeholder,
  name,
  errors,
  data,
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
      Comp={<Dropdowns rounded placeholder={placeholder} datas={data} />}
      errorMessage={errors[name]?.message}
    />
  );
};

export default DropdownField;
