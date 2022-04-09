const NavItem = ({ title, icon }) => {
  return (
    <li>
      <a
        href="#"
        class="relative flex items-center focus:outline-none hover:bg-blue-800 hover:bg-primary-50 hover:text-white-800 border-transparent pr-6 py-4"
      >
        <span class="inline-flex justify-center items-center ml-4">{icon}</span>
        <span class="ml-2 text-sm tracking-wide truncate">{title}</span>
      </a>
    </li>
  );
};

export default NavItem;
