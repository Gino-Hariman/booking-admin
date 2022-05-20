import Counter from '@/components/Counter';
import { LoadingSpinner } from '@/components/Loading';
import classNames from '@/helpers/classNames';
import FormField, { FormLabel } from './FormField';

const CustomCounterField = ({
  title,
  register = () => {},
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
      Comp={
        <Counter
          name={name}
          ref={r}
          getValues={getValues}
          setValue={setValue}
        />
      }
      errorMessage={errors[name]?.message}
    />
  );
};

export default CustomCounterField;
