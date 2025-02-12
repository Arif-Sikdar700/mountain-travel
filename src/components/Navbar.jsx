import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

export default function Navbar() {
	const { user, logout } = useContext(AuthContext);

	const links = (
		<>
			<li>
				<NavLink to={"/"}>Home</NavLink>
			</li>

			<li>
				<NavLink to={"/updateProfile"}>Update Profile</NavLink>
			</li>

			<li>
				<NavLink to={"/Profile"} className="text-white">
					My Profile{" "}
				</NavLink>
			</li>
		</>
	);
	return (
		<div className="navbar bg-slate-800 text-white mb-6">
			<div className="navbar-start">
				<div className="dropdown">
					<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
					>
						{links}
					</ul>
				</div>
				<Link to={"/"} className="btn btn-ghost text-xl font-bold">
					<h3>Mountain Treks</h3>
				</Link>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal text-white px-1">{links}</ul>
			</div>
			<div className="navbar-end">
				{user ? (
					<div className="flex items-center gap-4">
						<img
							src={user?.photoURL}
							className="w-10 h-10 object-cover rounded-full"
							title={user?.displayName}
							alt=""
						/>
						<NavLink to="/login" className="btn bg-[#4A00FF] text-white">
							<button onClick={() => logout()}>LogOut</button>
						</NavLink>
					</div>
				) : (
					<NavLink to="/login" className="btn bg-[#4A00FF] text-white">
						Login
					</NavLink>
				)}
			</div>
		</div>
	);
}
