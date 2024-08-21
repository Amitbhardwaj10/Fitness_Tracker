import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { HiMiniMoon, HiMiniSun, HiMiniChevronDown } from "react-icons/hi2";
function Header() {
	const [mode, setMode] = useState("Dark");

	const handleClick = (e) => {
		const currMode = e.target.textContent;
		setMode(currMode);
	};

	const activeState = ({ isActive }) => {
		console.log("isActive: ", isActive);
		return isActive
			? "dark:text-white text-black"
			: "";
	};

	return (
		<header className="w-full sticky top-0 border-b-zinc-900 border-b-2 px-16 py-4 mb-5">
			<nav className="w-full flex items-center justify-between">
				<div className="logo text-teal-500 text-2xl">
					<Link to="/"> Fitness Tracker</Link>
				</div>
				<ul className="nav_links text-neutral-700 dark:text-neutral-500 flex gap-8 items-center">
					<div className="dark_mode_icon">
						<Menu as="div" className="relative inline-block text-left">
							<div>
								<MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-neutral-800 ring-inset dark:text-white">
									{mode}
									<HiMiniChevronDown
										aria-hidden="true"
										className="-mr-1 h-5 w-5"
									/>
								</MenuButton>
							</div>

							<MenuItems
								transition
								className="absolute right-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-sky-950 shadow-xl ring-1 ring-black ring-opacity-5 transition data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
							>
								<div className="py-1">
									<MenuItem className="flex gap-4 items-center">
										<a
											href="#"
											className="block px-4 py-3 text-neutral-500 text-sm data-[focus]:bg-slate-950 data-[focus]:text-white"
											onClick={handleClick}
										>
											<HiMiniSun className="text-xl" /> {"Light"}
										</a>
									</MenuItem>
									<MenuItem className="flex gap-4 items-center">
										<a
											href="#"
											className="block px-4 py-3 text-neutral-500 text-sm data-[focus]:bg-slate-950 data-[focus]:text-white"
											onClick={handleClick}
										>
											<HiMiniMoon className="text-xl" /> {"Dark"}
										</a>
									</MenuItem>
								</div>
							</MenuItems>
						</Menu>
					</div>

					<li>
						<NavLink
							to="/"
							className={({ isActive }) =>
								`before:w-0 before:h-1 before:bg-black before:absolute before:bottom-[20%] before:opacity-0 hover:before:opacity-100 hover:before:w-12 transition-opacity duration-500
								 ${activeState({ isActive })}`
							}
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/contact"
							className={({ isActive }) =>
							`hover:text-neutral-400 transition-colors duration-500
							 ${activeState({ isActive })}`
						}
						>
							Contact
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/login"
							className={({ isActive }) =>
							`hover:text-neutral-400 transition-colors duration-500
							 ${activeState({ isActive })}`}
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
