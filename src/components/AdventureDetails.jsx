import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Modal from "./Modal";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../context/AuthProvider";

export default function AdventureDetails() {
	const [singleData] = useLoaderData();
	const {user} = useContext(AuthContext)
	const {
		image,
		id,
		adventureTitle,
		categoryName,
		shortDescription,
		adventureCost,
		location,
		duration,
		adventureLevel,
		includedItems,
		ecoFriendlyFeatures,
		maxGroupSize,
		specialInstructions,
	} = singleData;
	const handleModal = () => {
		const now = new Date();
		const currentHour = now.getHours();

		if (currentHour >= 10 && currentHour < 20) {
			// Open Google Meet in a new tab if within hours
			window.open("https://meet.google.com", "_blank");
		} else {
			// Show modal for consultation time outside of working hours
			document.getElementById("my_modal_5").showModal();
			alert("hello");
		}
	};
	return (
		<>
		<Helmet>
			<title>Welcome {user?.displayName}</title>
		</Helmet>
			<div className="flex flex-col md:flex-row gap-9">
				<div className="flex-1 ">
					<img
						src={image}
						alt=""
						className="w-full h-96 object-cover rounded-2xl"
					/>
				</div>
				<div className="flex-1">
					<h3 className="text-2xl font-bold">{adventureTitle}</h3>
					<div className="space-y-3 grid grid-cols-2 my-3">
						<p>
							<b>categoryName</b>: {categoryName}
						</p>
						<p>{shortDescription}</p>
						<p>
							<b>location: </b>
							{location}
						</p>
						<p>
							<b>duration: </b>
							{duration}
						</p>
						<p>
							<b>adventureLevel: </b>
							{adventureLevel}
						</p>
						<p>
							<b>includedItems: </b>
							{includedItems.join(" , ")}
						</p>
						<p>
							<b>ecoFriendlyFeatures: </b>
							{ecoFriendlyFeatures.join(" , ")}
						</p>
						<p>
							<b>specialInstructions: </b>
							{specialInstructions.join(" , ")}
						</p>
						<p>
							<b>maxGroupSize: </b>
							{maxGroupSize}
						</p>
						<p>
							<b>adventureCost: </b>${adventureCost}
						</p>
						<button onClick={handleModal} className="btn btn-accent">
							Talk with Expert
						</button>
					</div>
				</div>
				<Modal />
			</div>
		</>
	);
}
