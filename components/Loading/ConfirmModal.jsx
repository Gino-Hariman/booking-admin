import Modals from '../Modals';
import { ModalButton, ModalContent } from '../Modals/components';

const ConfirmModal = ({
  open,
  setOpen,
  modalTitle,
  modalContentTitle,
  lBtnTitle,
  rBtnTitle,
  handleSubmit,
  children,
}) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {children}
      {open && (
        <Modals title={modalTitle} handleCloseModal={handleClose}>
          <ModalContent title={modalContentTitle}>
            <ModalButton title={lBtnTitle} onClick={handleSubmit} />
            <ModalButton title={rBtnTitle} outlined onClick={handleClose} />
          </ModalContent>
        </Modals>
      )}
    </>
  );
};

export default ConfirmModal;
