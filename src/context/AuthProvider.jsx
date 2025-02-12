import React, { createContext, useEffect, useState } from "react";
import { auth } from "../fireBase/fireBase.init";
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext();
export default function AuthProvider({ children }) {
	const [user, setUser] = useState("hello");
	const [loader, isLoader] = useState(true)
	// register
	const register = (email, password, name, photoUrl) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};
	// logout
	const logout = () => {
		isLoader(true)
		return signOut(auth);
	};
	// singIn
	const singIn = (email, password) => {
		isLoader(true)
		return signInWithEmailAndPassword(auth, email, password);
	};
	
    const googleProvider = new GoogleAuthProvider();
    const googleLogin = ()=>{
		isLoader(true)
        return signInWithPopup(auth, googleProvider)
    }
	const updateUserprofile=(updateDate)=>{
		isLoader(true)
		return updateProfile(auth.currentUser, updateDate)
	}

	const authInfo = {
		register,
		setUser,
		user,
		logout,
        singIn,
        googleLogin,
		updateUserprofile,
		loader
	};
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			
			setUser(currentUser);
			isLoader(false)
		});

		return () => {
			unsubscribe();
		};
	}, []);

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
}
