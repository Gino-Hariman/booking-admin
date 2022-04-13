import { ButtonWithIcon } from '../Buttons';
import ChevRight from '@/icons/OChevronRight.svg';
import ChevLeft from '@/icons/OChevronLeft.svg';

const Pagination = () => {
  return (
    <div className="flex flex-col mx-auto md:flex-row space-x-4 md:max-w-pagination max-w-xs mt-3">
      <ButtonWithIcon
        title="Prev"
        Icon={ChevLeft}
        onClick={() => console.log('prev')}
      />
      <ButtonWithIcon
        position="right"
        title="Next"
        Icon={ChevRight}
        onClick={() => console.log('next')}
      />
    </div>
  );
};

export default Pagination;
