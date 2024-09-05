import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App/>} >
		<Route path="" element={<Home />} />
		<Route path="/contact" element={<Contact />} />
		<Route path="/login" element={<Login />} />
	</Route>
	)
);

createRoot(document.getElementById("root")).render(
	<RouterProvider router={router} />
);