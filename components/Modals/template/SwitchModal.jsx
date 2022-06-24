import { useState } from 'react';
import Switch from '@/components/Tables/Contents/Switch';
import Modals from '..';
import { ModalButton, ModalContent } from '../components';
import usePutQuery from '@/hooks/usePutQuery';
import useToast from '@/hooks/useToast';
import { useRouter } from 'next/router';

const SwithModal = ({
  data,
  value,
  modalTitle,
  lBtnTitle,
  rBtnTitle,
  isLocation = false,
}) => {
  const router = useRouter();
  const { notify } = useToast();
  const [open, setOpen] = useState(false);
  const statusMutation = usePutQuery(
    value === 1
      ? `${isLocation ? '/location' : ''}/deactive`
      : `${isLocation ? '/location' : ''}/active`
  );

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    statusMutation.mutate(
      { id_location: data.id_location, id_admin: data.id_admin },
      {
        onSuccess: (res) => {
          handleClose();
          if (res.type === 'success') {
            notify(
              'success',
              res?.message ? res.message : 'Successfully change status'
            );
            router.reload();
          }
        },
        onError: (err) => {
          notify('error', 'Failed to change status!!');
        },
      }
    );
  };

  return (
    <>
      <Switch
        id={`swith-${data.id_location}`}
        value={value}
        handleOpen={handleOpen}
      />
      {open && (
        <Modals
          title="Sure to do these changes?"
          handleCloseModal={handleClose}
        >
          <ModalContent title={modalTitle}>
            <ModalButton title={lBtnTitle} onClick={handleSubmit} />
            <ModalButton title={rBtnTitle} outlined onClick={handleClose} />
          </ModalContent>
        </Modals>
      )}
    </>
  );
};

export default SwithModal;
