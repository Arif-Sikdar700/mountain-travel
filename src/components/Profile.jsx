import React, {  useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { NavLink } from "react-router-dom";

export default function Profile() {
	const { user } = useContext(AuthContext);
	
	return (
		<div className="flex gap-7">
			<figure>
				<img className="rounded-xl " src={user?.photoURL} alt="" />
			</figure>
			<div className="space-y-4">
				<h3>
					<b>Name:</b> {user?.displayName}
				</h3>
				<h3>
					<b>Name:</b> {user?.email}
				</h3>
        <NavLink to={"/updateProfile"}><button className="btn btn-accent">update Button</button></NavLink>
			</div>
		</div>
	);
}
