import IconButton from '@/components/IconButton';
import useDeleteQuery from '@/hooks/useDeleteQuery';
import usePostQuery from '@/hooks/usePostQuery';
import useToast from '@/hooks/useToast';
import EditIcon from '@/icons/Outline/Edit.svg';
import TrashIcon from '@/icons/Outline/Trash.svg';
import { useRouter } from 'next/router';

const Actions = ({ data, hasEdit = true, deletePath, editFormPath }) => {
  const router = useRouter();
  const mutation = usePostQuery(deletePath);
  const { notify } = useToast();

  const handleEdit = () => {
    router.push(editFormPath);
  };

  const handleDelete = () => {
    mutation.mutate(
      {
        id_location: data.id_location,
        date: data.date,
        id_admin: data.id_admin,
      },
      {
        onSuccess: (res) => {
          if (res.type === 'success') {
            notify('success', res.message);
            return router.reload();
          }
        },
        onError: () => {
          return notify('error', 'Failed to remove!!');
        },

        // onSettled: () => router.reload(),
      }
    );
  };

  return (
    <div>
      {hasEdit ? (
        <>
          <IconButton onClick={handleEdit}>
            <EditIcon className="w-6" fill="#696E76" />
          </IconButton>
          <IconButton onClick={handleDelete}>
            <TrashIcon className="w-6" fill="#696E76" />
          </IconButton>
        </>
      ) : (
        <IconButton onClick={handleDelete}>
          <TrashIcon className="w-6" fill="#696E76" />
        </IconButton>
      )}
    </div>
  );
};

export default Actions;
