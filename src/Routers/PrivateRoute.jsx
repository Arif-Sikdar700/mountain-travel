import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

export default function PrivateRoute({ children }) {
	const { user, loader } = useContext(AuthContext);
	if (loader) {
		return (
			<div className="flex justify-center">
				<span className="loading w-44 text-center loading-spinner loading-xs"></span>
			</div>
		);
	}
	if (user) {
		return children;
	}
	return (
		<div>
			<Navigate to="/login" />
		</div>
	);
}
