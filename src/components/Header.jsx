import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { HiMiniMoon, HiMiniSun, HiMiniChevronDown } from "react-icons/hi2";
function Header() {
	const [mode, setMode] = useState(localStorage.getItem("mode") || "Dark");

	//useEffect for chnaging the mode
	useEffect(() => {
		if (mode === "Light") {
			document.body.classList.remove("dark");
			document.body.classList.add("light");
			document.documentElement.style.backgroundColor = "white"; // Set background for light mode
		} else {
			document.body.classList.remove("light");
			document.body.classList.add("dark");
			document.documentElement.style.backgroundColor = "#000114"; // Set background for dark mode
		}
	}, [mode]);

	// Setting the mode to local storage
	const handleClick = (e) => {
		const currMode = e.target.innerText;
		localStorage.setItem("mode", currMode);
		setMode(currMode);
	};

	// function for setting the navlinks to active
	const activeState = ({ isActive }) => {
		return isActive
			? "dark:text-white text-black before:w-0 before:h-[2px] before:bg-black before:absolute before:-bottom-1 before:opacity-100 before:w-full before:transition-[width] before:duration-1000 before:delay-75  ease-in-out"
			: "";
	};

	// icon click karne par undefined aa rha he -> shi karna he

	return (
		<header className="w-full sticky top-0 z-999 border-b-zinc-900 border-b-2 px-16 py-4 mb-5">
			<nav className="w-full flex items-center justify-between">
				<div className="logo text-teal-500 text-2xl">
					<Link to="/"> Fitness Tracker</Link>
				</div>
				<ul className="nav_links text-neutral-700 dark:text-neutral-500 flex gap-8 items-center">
					<div className="dark_mode">
						<Menu as="div" className="relative inline-block text-left">
							<div>
								<MenuButton className="inline-flex items-center w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-neutral-800 ring-inset dark:text-white">
									{mode === "Light" ? (
										<>
											{" "}
											<HiMiniSun /> {mode}{" "}
										</>
									) : (
										<>
											{" "}
											<HiMiniMoon /> {mode}
										</>
									)}
									<HiMiniChevronDown
										aria-hidden="true"
										className="-mr-1 h-5 w-5"
									/>
								</MenuButton>
							</div>

							<MenuItems
								transition
								className="absolute right-0 z-99 mt-2 w-44 origin-top-right rounded-md bg-slate-200 dark:bg-sky-950 shadow-xl ring-1 ring-black ring-opacity-5 transition data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
							>
								<div className="py-1">
									<MenuItem className="flex gap-4 items-center">
										<a
											href="#"
											className="block px-4 py-3 text-neutral-500 text-sm data-[focus]:bg-slate-500 dark:data-[focus]:bg-slate-950 data-[focus]:text-white"
											onClick={handleClick}
										>
											<HiMiniSun className="text-xl" /> <span>Light</span>
										</a>
									</MenuItem>
									<MenuItem className="flex gap-4 items-center">
										<a
											href="#"
											className="block px-4 py-3 text-neutral-500 text-sm data-[focus]:bg-slate-500 dark:data-[focus]:bg-slate-950 data-[focus]:text-white"
											onClick={handleClick}
										>
											<HiMiniMoon className="text-xl" /> <span>Dark</span>
										</a>
									</MenuItem>
								</div>
							</MenuItems>
						</Menu>
					</div>

					<li className="relative">
						<NavLink
							to="/"
							className={({ isActive }) =>
								`before:w-0 before:h-[2px] before:bg-black before:absolute before:-bottom-1 before:opacity-0 hover:before:opacity-100 hover:before:w-full before:transition-[width] before:duration-700 delay-75  ease-in-out dark:before:bg-white
								${activeState({ isActive })}`
							}
						>
							Home
						</NavLink>
					</li>
					<li className="relative">
						<NavLink
							to="/contact"
							className={({ isActive }) =>
								`before:w-0 before:h-[2px] before:bg-black before:absolute before:-bottom-1 before:opacity-0 hover:before:opacity-100 hover:before:w-full before:transition-[width] before:duration-700 delay-75  ease-in-out dark:before:bg-white
							 ${activeState({ isActive })}`
							}
						>
							Contact
						</NavLink>
					</li>
					<li className="relative">
						<NavLink
							to="/login"
							className={({ isActive }) =>
								`before:w-0 before:h-[2px] before:bg-black before:absolute before:-bottom-1 before:opacity-0 hover:before:opacity-100 hover:before:w-full before:transition-[width] before:duration-700 delay-75  ease-in-out dark:before:bg-white
							 ${activeState({ isActive })}`
							}
						>
							Login
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
