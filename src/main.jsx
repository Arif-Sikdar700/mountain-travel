import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { router } from "./Routers/Router";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<HelmetProvider>
			<AuthProvider>
				<RouterProvider router={router} />
				<ToastContainer />
			</AuthProvider>
		</HelmetProvider>
	</StrictMode>
);
