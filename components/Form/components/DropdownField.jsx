import Dropdowns from '@/components/Dropdowns';
import ErrorMessage from '@/components/ErrorMessage';
import FormField, { FormLabel } from '../PageComponent/FormField';
// import FormField, { FormLabel } from './FormField';

const DropdownField = ({
  label,
  register = () => {},
  loading = false,
  placeholder,
  name,
  errors,
  data,
  setValue,
  idItem,
  valueItem,
}) => {
  const isError = errors && errors[name];

  const r = register(name);
  console.log('data locaiton', data);
  return (
    <div key={name} className="mt-5">
      <label className="label">{label}</label>
      <Dropdowns
        rounded
        name={name}
        idItem={idItem}
        valueItem={valueItem}
        placeholder={placeholder}
        setValue={setValue}
        datas={data}
        loading={false}
      />
      {isError && <ErrorMessage message={errors[name]?.message} />}
    </div>
  );
};

export default DropdownField;
