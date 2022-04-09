import * as Form from './components';

const DataForm = ({ forms = [], register, control, errors }) => {
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
            {...form}
          />
        );
      })}
    </>
  );
};

export default DataForm;
