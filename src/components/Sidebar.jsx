import { NavLink } from "react-router-dom";
const Sidebar = ({ home, mission }) => {
  return (
    <div className="w-52 min-w-24 min-h-screen border-x justify-center hidden sm:flex">
      <nav className="flex flex-col w-[100%]">
        <NavLink
          to="/"
          className={(navData) =>
            `${navData.isActive ? "bg-slate-200" : "bg-white" } py-3 border-b px-5`
          }
        >
          {home}
        </NavLink>
        <NavLink
          to="/missions"
          className={(navData) =>
            `${navData.isActive ? "bg-slate-200" : "bg-white"} py-3 border-b px-5`
          }
        >
          {mission}
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
