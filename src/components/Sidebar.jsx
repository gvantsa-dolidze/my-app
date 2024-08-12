import { NavLink } from "react-router-dom";
const Sidebar = ({ home, mission }) => {
  return (
    <div className="w-[25%] min-h-screen border-r  border-gray-500">
      <nav className="flex flex-col">
        <NavLink
          to="/"
          className={(navData) =>
            navData.isActive ? "text-red-600" : "text-black"
          }
        >
          {home}
        </NavLink>
        <NavLink
          to="/missions"
          className={(navData) =>
            navData.isActive ? "text-red-600" : "text-black"
          }
        >
          {mission}
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
