// import { Box, Button, Modal, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { ArrowSmLeftIcon, CheckIcon } from '@heroicons/react/solid';
import { Button, ButtonWithIcon } from '../Buttons';
import Modals from '../Modals';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import CheckIcon from '@mui/icons-material/Check';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   boxShadow: 1,
//   p: 3,
//   borderRadius: 1,
// };

const ConfirmModal = ({
  errors,
  btnTitle,
  modalTitle,
  promptTitle,
  handleSubmit,
  children,
}) => {
  const [open, setOpen] = useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button isDisabled={errors} onClick={handleOpen} title={btnTitle} />
      {open && (
        <Modals handleCloseModal={handleClose}>
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-2/4 w-[400px] shadow-sm rounded-1 bg-danger-400 p-2">
            <h1 sx={{ mb: 3, textAlign: 'center' }} variant="h4">
              {modalTitle}
            </h1>
            <div className="flex">
              <ButtonWithIcon
                isDisabled={errors}
                onClick={handleOpen}
                title="back"
                Icon={ArrowSmLeftIcon}
              />
              <ButtonWithIcon
                onClick={handleSubmit}
                title={promptTitle}
                Icon={CheckIcon}
              />
            </div>
          </div>
        </Modals>
      )}
    </>
  );
};

export default ConfirmModal;
