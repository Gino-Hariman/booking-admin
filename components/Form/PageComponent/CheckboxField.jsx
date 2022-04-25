const { default: BookTimeList } = require('@/components/BookTimeList');
const { default: bookTimeConfig } = require('@/utils/bookTimeConfig');
const { default: FormField, FormLabel } = require('./FormField');

const CheckboxField = ({
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
      hasBorder={hasBorder}
      labelComp={<FormLabel title={title} subTitle={subTitle} />}
      Comp={
        <BookTimeList
          data={bookTimeConfig}
          ref={r}
          name={r?.anme}
          setValue={setValue}
        />
      }
    />
  );
};

export default CheckboxField;
