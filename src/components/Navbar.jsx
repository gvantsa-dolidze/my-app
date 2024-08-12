import { NavLink } from "react-router-dom";
const Navbar = ({home, contact, about, mission}) => {
  return (
    <nav className="space-x-5">
      <NavLink to="/" className={ navData =>navData.isActive ? 'text-red-600' : 'text-black' }>{home}</NavLink>
      <NavLink to="/contact" className={ navData =>navData.isActive ? 'text-red-600' : 'text-black' }>{contact}</NavLink>
      <NavLink to="/about" className={ navData =>navData.isActive ? 'text-red-600' : 'text-black' }>{about}</NavLink>
      <NavLink to="/missions" className={ navData =>navData.isActive ? 'text-red-600' : 'text-black' }>{mission}</NavLink>
    </nav>
  );
};

export default Navbar;
