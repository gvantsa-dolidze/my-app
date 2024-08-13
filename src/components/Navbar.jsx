import { NavLink } from "react-router-dom";
const Navbar = ({ home, contact, about, mission }) => {
  return (
    <nav className="sm:space-x-5 space-x-2">
      <NavLink
        to="/"
        className={(navData) =>
          navData.isActive ? "text-white" : "text-black"
        }
      >
        {home}
      </NavLink>
      <NavLink
        to="/contact"
        className={(navData) =>
          navData.isActive ? "text-white" : "text-black"
        }
      >
        {contact}
      </NavLink>
      <NavLink
        to="/about"
        className={(navData) =>
          navData.isActive ? "text-white" : "text-black"
        }
      >
        {about}
      </NavLink>
      <NavLink
        to="/missions"
        className={(navData) =>
          navData.isActive ? "text-white" : "text-black"
        }
      >
        {mission}
      </NavLink>
    </nav>
  );
};

export default Navbar;
