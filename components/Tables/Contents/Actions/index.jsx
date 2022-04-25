import IconButton from '@/components/IconButton';
import EditIcon from '@/icons/Outline/Edit.svg';
import TrashIcon from '@/icons/Outline/Trash.svg';

const Actions = () => {
  return (
    <div>
      <IconButton>
        <EditIcon className="w-6" fill="#696E76" />
      </IconButton>
      <IconButton>
        <TrashIcon className="w-6" fill="#696E76" />
      </IconButton>
    </div>
  );
};

export default Actions;
