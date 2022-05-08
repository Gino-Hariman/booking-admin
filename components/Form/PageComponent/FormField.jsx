import ErrorMessage from '@/components/ErrorMessage';
import classNames from '@/helpers/classNames';

export const FormLabel = ({ title, subTitle }) => {
  return (
    <div>
      <h1 className="text-lg-1 text-gray-700">{title}</h1>
      {subTitle && (
        <p className="text-md-3 mt-2 max-w-[227px] text-gray-400 font-medium">
          {subTitle}
        </p>
      )}
    </div>
  );
};

const FormField = ({ labelComp, Comp, errorMessage, hasBorder = false }) => {
  return (
    <div
      className={classNames(
        hasBorder && 'border-b border-gray-200',
        'w-full flex items-center py-10'
      )}
    >
      <div className="w-1/3">{labelComp}</div>
      <div className="w-2/3">
        {Comp}
        {errorMessage && <ErrorMessage message={errorMessage} />}
      </div>
    </div>
  );
};

export default FormField;
