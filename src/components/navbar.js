import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTent } from '@fortawesome/free-solid-svg-icons';

// Define the Navbar component
function NavBar(props) {
  return (
    // Navbar
    <nav
      id="navbar"
      className="items-center flex flex-row justify-between gap-8 py-8 px-5"
    >
      {/* Logo */}
      <h1 id="logo" className="font-normal">
        <span className="text-primary">
          <FontAwesomeIcon icon={faTent} />
          CityScape
        </span>
      </h1>
      {/* Redirects */}
      <ul className="flex">
        {props.navItems.map((navItem, index) => (
          <li key={index}>
            <a
              href={navItem.url}
              className="py-2 px-5 my-0 mx-1 hover:text-coral"
            >
              {navItem.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// Export the Navbar class as the default export
export default NavBar;
