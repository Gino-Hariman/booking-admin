import ErrorState from './ErrorState';
import { LoadingSpinner } from './Loading';

const { default: EmptyList } = require('./EmptyState/EmptyList');

const RenderResult = ({
  state,
  emptyTitle = 'data',
  checkEmpty = true,
  data,
  children,
}) => {
  const { isFetching, isError, isSuccess } = state;

  console.log('999', state);

  if (isFetching) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <ErrorState message="Something went wrong" />;
  }

  if (Boolean(data.length === 0) && checkEmpty)
    return <EmptyList title={emptyTitle} />;

  if (isSuccess) return children;

  return <EmptyList title={emptyTitle} />;
};

export default RenderResult;
