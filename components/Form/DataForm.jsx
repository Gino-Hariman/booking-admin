import * as Form from './components';

const DataForm = ({
  forms = [],
  register,
  control,
  errors,
  getValues,
  setValue,
}) => {
  return (
    <>
      {forms.map((form) => {
        const Comp = Form[form.type];
        return (
          <Comp
            key={form.name}
            register={register}
            errors={errors}
            control={control}
            getValues={getValues}
            setValue={setValue}
            {...form}
          />
        );
      })}
    </>
  );
};

export default DataForm;
