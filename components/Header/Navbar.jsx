import Image from 'next/image';
import logo from '../../public/logo.png';

const Navbar = ({}) => {
  return (
    <div className="h-nav flex fixed w-full bg-shade-FG shadow">
      <div className="max-w-[80%] w-full self-center ml-8">
        <Image src={logo} objectFit="fill" />
      </div>
    </div>
  );
};

export default Navbar;
