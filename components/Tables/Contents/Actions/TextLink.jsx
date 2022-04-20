import Link from 'next/link';

const TextLink = ({ title, path }) => {
  return (
    <Link href={path} passHref className="text-md-3 font-medium text-info-600">
      <a>
        <p>{title}</p>
      </a>
    </Link>
  );
};

export default TextLink;
