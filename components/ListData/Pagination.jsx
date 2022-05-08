import { ButtonWithIcon } from '../Buttons';
import ChevRightIcon from '@/icons/Outline/Chevron Left.svg';
import ChevLeftIcon from '@/icons/Outline/Chevron Right.svg';

const Pagination = ({ isDisabled = false, handleNext, handlePrev }) => {
  return (
    <div className="flex flex-col mx-auto md:flex-row space-x-4 md:max-w-pagination max-w-xs mt-3">
      <ButtonWithIcon
        isDisabled={isDisabled}
        title="Prev"
        Icon={ChevRightIcon}
        onClick={handlePrev}
      />
      <ButtonWithIcon
        position="right"
        title="Next"
        Icon={ChevLeftIcon}
        onClick={handleNext}
      />
    </div>
  );
};

export default Pagination;
