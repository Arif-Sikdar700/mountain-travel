import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import AdventureDetails from "../components/AdventureDetails";
import PrivateRoute from "./PrivateRoute";


import Profile from "../components/Profile";
import UpdatePro from "../components/UpdatePro";
import ErrorPage from "../components/ErrorPage";
export const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Home />,
				loader: async () => {
					const adventure = await fetch("/AdventureTravel.json");
					return adventure;
				},
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/register",
				element: <Register />,
			},
			{
				path: "/updateProfile",
				element: (
					<PrivateRoute>
						<UpdatePro />
					</PrivateRoute>
				),
			},
			{
				path: "/Profile",
				element: (
					<PrivateRoute>
						<Profile />
					</PrivateRoute>
				),
			},
			{
				path: "/adventureDetails/:id",
				element: (
					<PrivateRoute>
						<AdventureDetails />
					</PrivateRoute>
				),
				loader: async ({ params }) => {
					const adventureDetails = await fetch("/AdventureTravel.json");
					const data = await adventureDetails.json();
					const filterData = data.filter((curdata) => curdata.id == params.id);

					return filterData;
				},
			},
		],
	},
]);
