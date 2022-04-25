import { Button } from '../Buttons';

const PageFormActions = ({ handleCancel, handleAdd }) => {
  return (
    <div className="flex flex-col mx-auto md:flex-row space-x-4 md:max-w-pagination max-w-xs mt-16">
      <Button
        outlinedClass="outline outline-1 py-4 px-12 text-md-3 font-semibold text-primary-500 hover:bg-primary-50 outline-primary-500"
        outlined
        title="Cancel"
        onClick={handleCancel}
      />
      <Button title="Add New" onClick={handleAdd} />
    </div>
  );
};

export default PageFormActions;
