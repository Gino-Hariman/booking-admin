import { useState } from 'react';
import Switch from '@/components/Tables/Contents/Switch';
import Modals from '..';
import { ModalButton, ModalContent } from '../components';
import usePutQuery from '@/hooks/usePutQuery';
import useToast from '@/hooks/useToast';
import { useRouter } from 'next/router';

const SwithModal = ({ data, value, modalTitle, lBtnTitle, rBtnTitle }) => {
  const router = useRouter();
  const { notify } = useToast();
  const [open, setOpen] = useState(false);
  const statusMutation = usePutQuery(
    value === 1 ? '/location/deactive' : '/location/active'
  );

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    statusMutation.mutate(
      { id_location: data.id_location },
      {
        onSuccess: (res) => {
          console.log('res status', res);
          notify('success', 'Successfully change status');
          handleClose();
          if (res === 'success') router.reload();
        },
        onError: (err) => {
          console.log('errr status', err);
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
