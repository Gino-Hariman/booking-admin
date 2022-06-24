import changeFieldText from '@/helpers/changeFieldText';
import classNames from '@/helpers/classNames';

export const generateTextColorByText = (text) => {
  switch (text) {
    case 'pending':
      return 'status-processing';
    case 'approve':
      return 'status-accepted';
    case 'decline':
      return 'status-decline';
    default:
      return '';
  }
};

const TextStatus = ({ data }) => {
  const text = `${changeFieldText(data.order_status)} by ${data.handle_by}`;

  return (
    <p
      className={classNames(
        generateTextColorByText(data.order_status),
        'text-md-4 font-medium resize-none line-clamp-2'
      )}
    >
      {text}
    </p>
  );
};

export default TextStatus;
