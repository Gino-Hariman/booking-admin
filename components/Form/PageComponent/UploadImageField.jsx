import FormField, { FormLabel } from './FormField';
import UploadImage from './UploadImage';

const UploadImageField = ({
  title,
  subTitle,
  register = () => {},
  name,
  errors,
  getValues,
  setValue,
  hasBorder,
}) => {
  const isError = errors && errors[name];
  const r = register(name);

  console.log('gasdf', getValues());
  return (
    <>
      <FormField
        hasBorder={hasBorder}
        labelComp={<FormLabel title={title} subTitle={subTitle} />}
        Comp={
          <UploadImage
            defaultImage={getValues().image}
            ref={r}
            onBlur={r?.onBlur}
            name={r?.name}
            onChange={r?.onChange}
            setValue={setValue}
          />
        }
        errorMessage={isError && errors[name]?.message}
      />
    </>
  );
};

export default UploadImageField;
