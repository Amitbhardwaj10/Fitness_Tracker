import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Contact from "./pages/Contact";

createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<App />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/login" element={<Login />} />
		</Routes>
	</BrowserRouter>
);
