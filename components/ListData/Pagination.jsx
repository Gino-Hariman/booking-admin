import { ButtonWithIcon } from '../Buttons';
import ChevRightIcon from '@/icons/Outline/Chevron Left.svg';
import ChevLeftIcon from '@/icons/Outline/Chevron Right.svg';

const Pagination = () => {
  return (
    <div className="flex flex-col mx-auto md:flex-row space-x-4 md:max-w-pagination max-w-xs mt-3">
      <ButtonWithIcon
        title="Prev"
        Icon={ChevRightIcon}
        onClick={() => console.log('prev')}
      />
      <ButtonWithIcon
        position="right"
        title="Next"
        Icon={ChevLeftIcon}
        onClick={() => console.log('next')}
      />
    </div>
  );
};

export default Pagination;
