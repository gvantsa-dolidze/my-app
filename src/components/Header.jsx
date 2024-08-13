import Logo from "./Logo";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <div className="bg-slate-400">
      <div className="sm:w-[80%] max-w-full m-auto p-5 flex justify-between gap-5">
        <Logo />
        <Navbar
          home="Home"
          contact="Contact"
          about="About"
          mission="Missions"
        />
      </div>
    </div>
  );
};

export default Header;
