import FormHeader from './components/FormHeader';
import * as Form from './PageComponent';

const PageForm = ({
  forms = [],
  register,
  control,
  errors,
  formTitle,
  getValues,
  setValue,
  children,
}) => {
  return (
    <div className="mt-4 rounded-6 shadow bg-shade-FG p-12 flex flex-col">
      <FormHeader title={formTitle} />

      <div>
        <div>
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
        </div>
        {children}
      </div>
    </div>
  );
};

export default PageForm;
