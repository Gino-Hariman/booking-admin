import Link from 'next/link';

const TextLink = ({ title, path }) => {
  return (
    <Link href={path} passHref>
      <a className="text-md-3 font-medium text-info-600">
        <p>{title}</p>
      </a>
    </Link>
  );
};

export default TextLink;
