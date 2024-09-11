import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
	return (
		<>
			<div className="min-h-screen text-black dark:bg-[#040715] dark:text-[#94a3b8]">
				<Header />
				<Outlet />
				<Footer />
			</div>
		</>
	);
}

export default App;
