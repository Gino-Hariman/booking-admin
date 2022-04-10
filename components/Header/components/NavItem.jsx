import classNames from '@/helpers/classNames';
import Link from 'next/link';

const NavItem = ({ title, icon, path = '', isActive = false }) => {
  return (
    <li>
      <Link passHref href={path}>
        <a
          href="#"
          className={classNames(
            isActive && 'active-nav-item',
            'relative flex items-center nav-item pr-6 py-4'
          )}
        >
          <span class="inline-flex justify-center items-center ml-4">
            {icon}
          </span>
          <span class="ml-2 text-sm tracking-wide truncate">{title}</span>
        </a>
      </Link>
    </li>
  );
};

export default NavItem;
