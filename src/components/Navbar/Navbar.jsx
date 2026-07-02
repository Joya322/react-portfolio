import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineMenuFold } from "react-icons/ai";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navClass = ({ isActive }) =>
    isActive
      ? "block w-full rounded-lg px-2 !bg-violet-600/80 !text-white"
      : "block w-full rounded-lg px-2 hover:bg-violet-600/20";

  const closeMenu = () => setIsMenuOpen(false);

  const links = (
    <>
      <li>
        <NavLink to="/" className={navClass} onClick={closeMenu}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className={navClass} onClick={closeMenu}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/skills" className={navClass} onClick={closeMenu}>
          Skills
        </NavLink>
      </li>
      <li>
        <NavLink to="/experiences" className={navClass} onClick={closeMenu}>
          Experiences
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className={navClass} onClick={closeMenu}>
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar sticky top-0 bg-gradient-to-t from-sky-50 to-sky-100 opacity-90 shadow-lg px-0 py-7">
      <div className="w-11/12 mx-auto flex justify-between items-center">
        {/* Logo */}
        <a className="btn btn-ghost text-3xl font-bold px-0 text-violet-700">
          Jannatul Ferdoush
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex menu menu-horizontal gap-4 text-lg">
          {links}
        </ul>

        {/* Mobile Menu */}
        <div className="lg:hidden relative">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="btn btn-ghost btn-circle"
          >
            {isMenuOpen ? (
              // Menu Close icon
              <AiOutlineMenuFold size={26} />
            ) : (
                // Menu Open icon
              <AiOutlineMenuUnfold size={26} />
            )}
          </button>

          {isMenuOpen && (
            <ul className="absolute right-0 mt-2 w-48 bg-base-100 shadow-lg rounded-lg z-50 p-3 flex flex-col gap-2 text-lg">
              {links}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
