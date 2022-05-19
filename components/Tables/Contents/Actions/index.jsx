import IconButton from '@/components/IconButton';
import useDeleteQuery from '@/hooks/useDeleteQuery';
import usePostQuery from '@/hooks/usePostQuery';
import useToast from '@/hooks/useToast';
import EditIcon from '@/icons/Outline/Edit.svg';
import TrashIcon from '@/icons/Outline/Trash.svg';
import { useRouter } from 'next/router';

const Actions = ({ data, deletePath }) => {
  const router = useRouter();
  const mutation = usePostQuery(deletePath);
  const { notify } = useToast();
  console.log('ddataa234', data.id_location);

  const handleEdit = () => {
    router.push(`/lounge-location/edit/${data.id_location}`);
  };
  console.log('data.id_location', data.id_location);
  const handleDelete = () => {
    mutation.mutate(
      { id_location: data.id_location },
      {
        onSuccess: () => {
          notify('success', 'Success, to remove!!');
        },
        onError: () => {
          notify('error', 'Failed to remove!!');
        },

        onSettled: () => router.reload(),
      }
    );
  };

  return (
    <div>
      <IconButton onClick={handleEdit}>
        <EditIcon className="w-6" fill="#696E76" />
      </IconButton>
      <IconButton onClick={handleDelete}>
        <TrashIcon className="w-6" fill="#696E76" />
      </IconButton>
    </div>
  );
};

export default Actions;
