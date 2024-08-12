import Logo from './Logo'
import Navbar from './Navbar'
const Header = () => {
  return (
    <div className="bg-slate-400">
      <div className="w-[80%] m-auto p-5 flex justify-between">
<Logo />
<Navbar />
      </div>
    </div>
  )
}

export default Header