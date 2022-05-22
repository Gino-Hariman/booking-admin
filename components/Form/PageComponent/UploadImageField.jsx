import FormField, { FormLabel } from './FormField';
import UploadImage from './UploadImage';

const UploadImageField = ({
  previewURL,
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
    <>
      <FormField
        hasBorder={hasBorder}
        labelComp={<FormLabel title={title} subTitle={subTitle} />}
        Comp={
          <UploadImage
            ref={r}
            onBlur={r?.onBlur}
            name={r?.name}
            onChange={r?.onChange}
            setValue={setValue}
            previewURL={previewURL}
          />
        }
        errorMessage={isError && errors[name]?.message}
      />
    </>
  );
};

export default UploadImageField;
