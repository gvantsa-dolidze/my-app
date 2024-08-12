import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <div>
      <Header />
      <div className="w-[80%] m-auto p-5 flex">
        <Sidebar />
        <HomePage />
      </div>
    </div>
  );
}

export default App;
