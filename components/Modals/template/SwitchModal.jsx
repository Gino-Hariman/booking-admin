import { useState } from 'react';
import { ArrowSmLeftIcon, CheckIcon } from '@heroicons/react/solid';
import Switch from '@/components/Tables/Contents/Switch';
import { ButtonWithIcon } from '@/components/Buttons';
import Modals from '..';

const SwithModal = ({ value, handleSubmit }) => {
  console.log('value55', value);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Switch value={value} handleOpen={handleOpen} />
      {/* <Button onClick={handleOpen} title={btnTitle} /> */}
      {open && (
        <Modals title="Change Status" handleCloseModal={handleClose}>
          <div className="p-2">
            <h1 sx={{ mb: 3, textAlign: 'center' }} variant="h4">
              Confirm Change Status
            </h1>
            <div className="flex">
              <ButtonWithIcon
                // isDisabled={errors}
                onClick={handleClose}
                title="back"
                Icon={ArrowSmLeftIcon}
              />
              <ButtonWithIcon
                onClick={handleSubmit}
                title="Confirm"
                Icon={CheckIcon}
              />
            </div>
          </div>
        </Modals>
      )}
    </>
  );
};

export default SwithModal;
