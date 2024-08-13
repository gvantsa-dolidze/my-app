import { NavLink } from "react-router-dom";
const Sidebar = ({ home, mission }) => {
  return (
    <div className="w-[15%] min-h-screen border-l border-r flex justify-center">
      <nav className="flex flex-col w-[100%]">
        <NavLink
          to="/"
          className={(navData) =>
            `${navData.isActive ? "bg-slate-200" : "bg-white" } py-3 border-b pl-5`
          }
        >
          {home}
        </NavLink>
        <NavLink
          to="/missions"
          className={(navData) =>
            `${navData.isActive ? "bg-slate-200" : "bg-white"} py-3 border-b pl-5`
          }
        >
          {mission}
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
