import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/logo.png';

const Navbar = ({}) => {
  return (
    <div className="z-50 h-nav flex fixed w-full bg-shade-FG shadow">
      <div className="max-w-[80%] w-full self-center ml-8">
        <Link href="/dashboard" passHref>
          <a>
            <Image src={logo} objectFit="fill" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
