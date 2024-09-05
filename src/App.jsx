import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="min-h-screen text-black dark:bg-[#000000] dark:text-white">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
